<template>
    <div>
        <div class="bg-white" ref="scrollComponent">
            <div class="cat-img">
                <div class="container">
                    <div class="row mt-2">
                        <div class="col-md-6">
                            <img class="img-fluid" style="height: 150px; width:100%"
                                src="../assets/images/ad_for_cat.jpg" alt />
                        </div>
                        <div class="col-md-6">
                            <img class="img-fluid" style="height: 150px; width:100%"
                                src="../assets/images/ad_cat_2.webp" alt />
                        </div>
                    </div>
                </div>
            </div>

            <div class="page-category-name">
                <h2>Product Category</h2>
            </div>
            <!-- product container start -->
            <div class="mb-3 p-3">
                <div class="row">
                    <transition name="fade" v-if="loading">
                        <div class="loading">
                            <span class="fa fa-spinner fa-spin"></span> Loading
                        </div>
                    </transition>
                    <div id="products" class="col-md-2 col-sm-6 col-6 mt-5"
                        v-for="(product, index) in store.state.searchedProducts.products.products" :key="index">
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
                            <div class="quantity"> {{ product.per_unit_qty }} {{ product.unit_name }} </div>
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
                </div>

            </div>
        </div>
        <!-- Modal -->
        <Modal title="Diyanah" :show="modalVisible" v-if="product_details">
            <template #header>
                <button @click="closeModal" type="button" class="btn-close" data-bs-dismiss="modal"
                    aria-label="Close"></button>
            </template>
            <template #body>
                <div class="container-fluid">
                    <div class="row">
                        <div class="col-md-6 text-center">
                            <!-- <img v-if="product_details != null" class="sigle-product-img" v-viewer
                                :src="baseURL + 'product/' + product_details.product_image" alt /> -->
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
                                    <button class="btn but-now-btn"
                                        style="font-weight: bold; font-size: 20px; width:40%;"
                                        @click="SetCart(product_details)">
                                        Buy now
                                    </button>
                                </div>
                                <div class=" p-2" style="overflow-y: scroll; height: 200px"
                                    v-html="product_details.product_description">
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </template>
            <template #footer>
            </template>
        </Modal>
    </div>
</template>
<script setup>
import { onMounted, ref } from "vue";
import { useStore } from "vuex";
import Modal from "../components/common/modal.vue";
const store = useStore();

const baseURL = ref("");
const cart = ref([]);
const product_details = ref(null);
let modalVisible = ref(false);


baseURL.value = axios.defaults.baseURLPublic;
console.log("search", store.state.searchedProducts.products.products);

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

</script>

