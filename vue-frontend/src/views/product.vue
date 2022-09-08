<template>
    <div class="row">
        <div class="col-md-6 col-sm-12">
            <img class="img-fluid"
                src="https://chaldn.com/_mpimage/popular?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D83719&q=best&v=1&m=700&webp=1"
                alt="" />
        </div>
        <div class="col-md-6 col-sm-12">
            <img class="img-fluid"
                src="https://chaldn.com/_mpimage/popular?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D83581&q=best&v=1&m=700&webp=1"
                alt="" />
        </div>
    </div>

    <div class="page-category-name">
        <h2>Product Category</h2>
    </div>
    <!-- product container start -->
    <div class="mb-5">
        <div class="row">
            <div class="col-md-2 col-xs-12 col-sm-6 ml-2 product" v-for="(product, index) in products" :key="index">
                <div class="product-content">
                    <div class="">
                        <img height="200" width="197" :src="baseURL + 'product/' + product.product_image"
                            :alt="product.product_name" class="mx-auto d-block" />
                    </div>
                    <div class="overlay">
                        <div class="text">Add To Shopping Bag</div>
                        <div type="button" class="delails-btn">
                            <button id="modal-button" @click.prevent="setProduct(product)" data-bs-toggle="modal"
                                data-bs-target="#exampleModal" class="details" style="width: 100%">
                                Details >
                            </button>
                        </div>
                    </div>

                    <div class="text-content text-center">
                        <div class="product-name">
                            {{ product.product_name }}
                        </div>
                        <div class="quantity">
                            Stock {{ product.product_quantity }} unit
                        </div>
                        <div class="price">৳ {{ product.product_price }}</div>

                        <div class="">
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
    <!-- product container End -->

    <!-- Modal -->
    <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-xl">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel"></h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <div class="container-fluid">
                        <div class="row">
                            <div class="col-md-6">
                                <img class="sigle-product-img" v-viewer :src="
                                    baseURL +
                                    'product/' +
                                    product_details.product_image
                                " alt="" />
                            </div>
                            <div class="col-md-6 ms-auto">
                                <div class="product-des">
                                    <div class="product-name">
                                        <h2>
                                            {{ product_details.product_name }}
                                        </h2>
                                    </div>
                                    <div class="product-price">
                                        <span>
                                            ৳
                                            {{
                                                    product_details.product_price
                                            }}</span>
                                    </div>
                                    <div class="quantity-btn p-3">
                                        <button class="btn-minus" @click="$store.commit('decrement')">
                                            <i class="fas fa-minus"></i>
                                        </button>
                                        <input class="qty-input-product" placeholder="0"
                                            :value="$store.getters.counterValue" type="text" />
                                        <button class="btn-plus" @click="$store.commit('increment')">
                                            <i class="fas fa-plus"></i></button><button class="btn but-now-btn">
                                            Buy now
                                        </button>
                                    </div>
                                    <div style="
                                            overflow-y: scroll;
                                            height: 200px;
                                        ">
                                        {{
                                                product_details.product_description
                                        }}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="modal-footer">
                    <the-footer></the-footer>
                </div>
            </div>
        </div>
    </div>
    <!-- modal end -->
</template>

<script setup>
import TheFooter from '../components/TheFooter.vue'
import { ref } from 'vue'
import Products from '../apis/Product'

const product_details = ref([])
function setProduct(product) {
    product_details.value = product

    //console.log(product.value)
    // let button = document.getElementById('modal-button');
    // button.setAttribute("data-bs-target", "#exampleModal");
}

const cart = ref([])
function SetCart(product) {
    cart.value = product
    Store.dispatch('addToCart', product)
    Store.getters.getCartProducts()
}

// products
const { getProducts } = Products

const products = ref([])
const baseURL = ref('')
baseURL.value = axios.defaults.baseURLPublic
getProducts()
    .then(response => {
        products.value = response.data
    })
    .catch(error => {
        // alert("Something went wrong.");
        console.error(error.data)
    })
</script>
