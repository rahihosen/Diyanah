<template>
  <div class="bg-white">
    <div class="cat-img">
      <div class="container">
        <div class="row mt-2">
          <div class="col-md-6">
            <img class="img-fluid" style="height: 150px; width:100%" src="../assets/images/ad_for_cat.jpg" alt />
          </div>
          <div class="col-md-6">
            <img class="img-fluid" style="height: 150px; width:100%" src="../assets/images/ad_cat_2.webp" alt />
          </div>
        </div>
      </div>
    </div>

    <div class="page-category-name">
      <h2>Product Category</h2>
    </div>
    <!-- product container start -->
    <div class="mb-3 p-3" id="scrollable-products">
      <div class="row">

        <div id="products infinite-list" class="col-md-2 col-sm-6 col-6 mt-5" v-for="(product, index) in catProducts"
          :key="index">
          <div class="product-content">
            <img style="height: 200px; width:150px" :src="baseURL + 'product/' + product.product_image"
              :alt="product.product_name" class="image mx-auto d-block" />
            <div class="overlay">
              <div class="text" @click="SetCart(product)">
                Add To Shopping Bag
              </div>
              <div type="button" class="delails-btn">
                <button @click="showModal(product)" class="details" style="width: 100%">
                  Details >
                </button>
              </div>
            </div>
          </div>
          <div class="text-content">
            <div class="product-name p-1" style="height: 30px; overflow: hidden;">
              <span>{{ product.product_name }}</span>
            </div>
            <div class="quantity"> {{ product.per_unit_qty }} {{ product?.units?.unit_name }} </div>
            <div class="price">৳ {{ product.product_price }}</div>

            <div class>
              <a style="text-decoration: none">
                <button class="add-to-bag-btn" @click="SetCart(product)" style="width: 100%">
                  Add to Bag
                </button>
              </a>
            </div>
          </div>
        </div>

        <transition name="fade" v-if="loading">
          <div class="loading">
            <span class="fa fa-spinner fa-spin"></span> Loading
          </div>
        </transition>
        <transition name="fade" >
          <div class="error text-center bg-danger text-white p-1" v-if="NoDataMsg">
            <span class="fa fa-exclamation-triangle"></span> No Data Found
          </div>
        </transition>


        <!-- loader -->

      </div>

    </div>

    <!-- <transition name="fade">
      <div class="Scroll-loading">
        <span class="fa fa-spinner fa-spin"></span> Loading
      </div>
    </transition> -->

    <!-- product container End -->

  </div>
  <!-- Modal -->
  <Modal title="Diyanah" :show="modalVisible" v-if="product_details">
    <template #header>
      <button @click="closeModal" type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
    </template>
    <template #body>
      <div class="container-fluid">
        <div class="row">
          <div class="col-md-6 text-center">
            <v-zoomer style="width: 450px; height: 450px; border: solid 1px silver;" class="img-fluid">
              <img :src="baseURL + 'product/' + product_details.product_image"
                style="object-fit: contain; width: 100%; height: 100%;">
            </v-zoomer>
          </div>
          <div class="col-md-6 ms-auto">
            <div class="product-des">
              <div class="product-name p-2">
                <h2>{{ product_details.product_name }}</h2>
                <span>{{ product_details.per_unit_qty }} {{
                    product_details.unit_name
                }}</span>
              </div>
              <div class="product-price p-2">
                <span style="font-size: 35px; font-weight: bold;">
                  ৳
                  {{ product_details.product_price }}
                </span>
              </div>
              <div class="quantity-btn p-2">
                <button class="btn-minus" @click="decrementSingleProductQty(product_details.id)">
                  <i class="fas fa-minus icon-position"></i>
                </button>
                <input class="qty-input-product" placeholder="0" :value="
                  $store.getters.getIndividualProductQty(
                    product_details.id
                  )
                " type="text" />
                <button class="btn-plus" @click="incrementSingleProductQty(product_details.id)">
                  <i class="fas fa-plus icon-position"></i>
                </button>
                <button class="btn but-now-btn" style="font-weight: bold; font-size: 20px; width:40%;"
                  @click="SetCart(product_details)">
                  Buy now
                </button>
              </div>
              <div class=" p-2" style="overflow-y: scroll; height: 200px" v-html="product_details.product_description">
              </div>
            </div>
          </div>
        </div>
      </div>
    </template>
    <template #footer>
    </template>
  </Modal>
</template>

<script setup>

import { onMounted, computed, ref, watch, onUnmounted } from "vue";
import { useRouter } from 'vue-router';
import Modal from "../components/common/modal.vue";
import { useStore } from "vuex";




const scrollComponent = ref(null)

const router = useRouter()
const store = useStore()
const itemClick = computed(() => store.getters['clickItem'])

const cart = ref([]);
const baseURL = ref("");
const product_details = ref(null);
const catProducts = ref([]);
const loading = ref(false);
const scrollLoading = ref(false);
const pageNumber = ref(1);
const totalPage = ref(1);
const totalScrollablePages = ref(1);
baseURL.value = axios.defaults.baseURLPublic;
let modalVisible = ref(false);
const NoDataMsg = ref(false);

const categoryId = ref(computed(() => router.currentRoute._rawValue.params.categoryId));
const cartProducts = ref(computed(() => store.getters.getCartProducts ?? {}));

onMounted(() => {
  window.addEventListener('scroll', () => {
    if (window.scrollY + window.innerHeight >= document.body.offsetHeight - 100) {
      console.log("scrolled to bottom")
      getCategoryProducts(categoryId.value)
    }
  });
  getCategoryProducts(categoryId.value)
});

watch(itemClick, (item, preItem) => {
  NoDataMsg.value = false;
  getCategoryProducts(item.id);
  router.push({ name: 'product.show', params: { categoryId: item.id } })
  pageNumber.value = 1;
  totalPage.value = 1;
  catProducts.value = [];
  getCategoryProducts(item.id)
});

function changeQty(index) {
  const qty = cartProducts.value[index].quantity;
  // console.log(qty)
  store.commit("CHANGE_QTY", { index, qty });
}

function incrementSingleProductQty(id) {
  store.commit("incrementSingleProductQty", id);
}

function decrementSingleProductQty(id) {
  store.commit("decrementSingleProductQty", id);
}

function decrement(index) {
  store.commit("decrement", index);
}


function SetCart(product) {
  cart.value = product;
  Store.dispatch("addToCart", product);
  Store.getters.getCartProducts();
}



function showModal(product) {
  product_details.value = product;
  modalVisible.value = true;
}
function closeModal() {
  modalVisible.value = false;
}

function getCategoryProducts(id) {
  if (!loading.value && pageNumber.value <= totalPage.value) {
    loading.value = true;
    let endPoint = `/categories/products/${id}?page=${pageNumber.value}`;
    axios
      .get(endPoint)
      .then((response) => {
        loading.value = false;
        catProducts.value.push(...response.data.products.data)
        totalPage.value = response.data.products.last_page;
        pageNumber.value = response.data.products.current_page + 1;
        if(response.data.products.current_page == 1 && catProducts.value.length == 0){
          NoDataMsg.value = true;
        }

      })
      .catch((error) => {
        console.log("errr==>", error);
      });
  }
}


</script>
<style scoped>
.Scroll-loading {
  margin-top: 20px;
  text-align: center;
  align-items: center;
  color: #fff;
  z-index: 1;
  background: rgba(7, 85, 150, 0.5);
  padding: 8px 18px;
  border-radius: 5px;
  left: calc(50% - -75px);
  top: calc(50% - -824px);
}
</style>