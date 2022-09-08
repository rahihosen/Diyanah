<template>
    <div class="bg-white">
        <div class="mt-1">
            <div id="carouselExampleFade" style="padding-right: 0 !important; padding-left: 0 !important"
                class="carousel slide carousel-fade" data-bs-ride="carousel">
                <div class="carousel-inner">
                    <div class="carousel-item" :class="{ active: index == 0 }" data-bs-interval="3000"
                        v-for="(homeslide, index) in HomeSliderdata" :key="index">
                        <img :src="baseURL + 'slide/' + homeslide.slide_image" class="d-block w-100 h-100" alt="..." />
                    </div>
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade"
                    data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleFade"
                    data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button>
            </div>
        </div>
        <!-- promational part start  -->
        <div class="row mt-3 p-1 ">
            <div class="col-md-6 mt-1 text-center">
                <img class="img-fluid" src="../assets/images/mpimage.jpg" alt />
            </div>
            <div class="col-md-6 mt-1 text-center">
                <img class="img-fluid" src="../assets/images/mpimage2.jpg" alt />
            </div>
        </div>

        <div class="all-category mt-5 mb-1 text-center">
            <h4>Our Product Categories</h4>
        </div>
        <div class="row row-cols-1 row-cols-sm-2 row-cols-md-5  g-2 p-3">
            <div v-for="category in categories" :key="category.id" class="col">
                <div class="bg-light border border-1 rounded-pill category-box-home">
                    <router-link :to="{
                        name: 'product.show',
                        params: { categoryId: category.id },
                    }" class="cat-name-div p-2">
                        <img class="ml-2" :src="baseURL + 'category-icon/' + category.category_icon" alt width="25"
                            height="23" />
                        <span class="cate-name-home">{{ category.name }}</span>
                        <span class="float-end cate-home-icon">
                            <i class="fas fa-chevron-right"></i>
                        </span>
                    </router-link>
                </div>
            </div>
        </div>


        <!-- end -->
        <!-- how to order slide start -->
        <div class="container-md container-lg">
            <div class="row">
                <div class="how-to-order-slide mt-5 mb-1 text-center">
                    <div class="odrer-ins">
                        <h4>How to order from Diyanah ?</h4>
                    </div>
                    <div id="myCarousel" class="carousel slide bg-inverse ms-auto me-auto" data-bs-ride="carousel">
                        <ol class="carousel-indicators">
                            <li data-bs-target="#myCarousel" data-bs-slide-to="0" class="active"></li>
                            <li data-bs-target="#myCarousel" data-bs-slide-to="1"></li>
                            <li data-bs-target="#myCarousel" data-bs-slide-to="2"></li>
                        </ol>
                        <div class="carousel-inner" role="listbox">
                            <div class="carousel-item active">
                                <img class="d-block w-100" src="../assets/images/order-1.jpg" alt="First slide"
                                    style="width: 100%" />
                            </div>
                            <div class="carousel-item">
                                <img class="d-block w-100" src="../assets/images/order-2.jpg" key alt="Second slide"
                                    style="width: 100%" />
                            </div>
                            <div class="carousel-item">
                                <img class="d-block w-100" src="../assets/images/order-2.jpg" alt="Third slide"
                                    style="width: 100%" />
                            </div>
                        </div>
                        <a class="carousel-control-prev" href="#myCarousel" role="button" data-bs-slide="prev">
                            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span class="visually-hidden">Previous</span>
                        </a>
                        <a class="carousel-control-next" href="#myCarousel" role="button" data-bs-slide="next">
                            <span class="carousel-control-next-icon" aria-hidden="true"></span>
                            <span class="visually-hidden">Next</span>
                        </a>
                    </div>
                </div>
            </div>
        </div>
        <!-- how to  order slide end -->
        <!-- spacial product slide start -->
        <div class="all-category mt-5 text-center">
            <h4>Special Offers</h4>
        </div>
        <!-- // vue slider start -->
        <div style="position: relative; overflow: hidden; padding: 0 60px;">
            <Carousel v-if="spacialSliderdata.length!==0" :settings="settings" :breakpoints="breakpoints">
                <template #slides>
                    <Slide v-for="(offer, index) in spacialSliderdata" :key="index" class="p-1">
                        <div class="carousel__item m-1 border border-dark rounded-3">
                            <div class="col-md-7">
                                <div class="post-container">
                                    <div class="post">
                                        <div class="image">
                                            <img :src="baseURL + 'offer_banner/' + offer.offer_image"
                                                :alt="offer.offer_image" alt="" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-5">
                                <div id="products">
                                    <div class="product-content">
                                        <img style="height: 170px; width: 130px"
                                            :src="baseURL + 'product/' + offer.product.product_image"
                                            :alt="offer.product.product_name" class="image mx-auto d-block" />
                                        <div class="overlay">
                                            <div class="text">Add To Shopping Bag</div>
                                            <div type="button" class="delails-btn">
                                                <button @click.prevent="setProduct(offer.product)" id="modal-button"
                                                    data-bs-toggle="modal" data-bs-target="#exampleModal"
                                                    class="details" style="width: 100%">
                                                    Details >
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="text-content">
                                        <div class="product-name p-1" style="height: 48px; overflow: hidden">
                                            <span>{{ offer.product.product_name }}</span>
                                        </div>
                                        <div class="price" v-if="offer.offer_amount != 0">
                                            <span>৳</span>
                                            {{ offer.after_offer_price }} <span
                                                style="font-size:10px;text-decoration: line-through;">{{
                                                        offer.product_price
                                                }}</span>
                                        </div>
                                        <div class="price" v-if="offer.offer_amount == 0">
                                            <span>৳</span>
                                            {{ offer.product_price }}
                                        </div>
                                    </div>
                                    <div class="bag_button">
                                        <a style="text-decoration: none">
                                            <button class="add-to-bag-btn pb-2" type="button"
                                                @click.prevent="setCart(offer.product)" style="width: 100%">
                                                Add to Bag
                                            </button>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Slide>

                </template>

                <template #addons>
                    <Navigation />
                   
                </template>
            </Carousel>
        </div>
        <!-- </div> -->
        <!-- spacial product slide end -->
        <div class="container">
            <div class="row">
                <div class="why-people-love container-fluid">
                    <div class="all-category mt-5 mb-1 text-center">
                        <h4>Why People Love Diyanah ?</h4>
                    </div>
                    <div class="row why-love-row">
                        <div class="col-lg-4 col-md-6 why-love">
                            <img class="img-fluid d-block why_love_img" src="../assets/images/lp.jpg" alt />
                            <br />
                            <div class="why-text-1">
                                <h2>Convenient & Quick</h2>
                                <br />
                                <p>
                                    No waiting in traffic, no haggling, no worries
                                    <br />carrying groceries, they're delivered right at your
                                    door.
                                </p>
                            </div>
                        </div>
                        <div class="col-lg-4 col-md-6 why-love">
                            <img class="img-fluid d-block why_love_img" src="../assets/images/lp-features-2.jpg" alt />
                            <br />
                            <div class="why-text-2">
                                <h2>Convenient & Quick</h2>
                                <br />
                                <p>
                                    No waiting in traffic, no haggling, no worries
                                    <br />carrying groceries, they're delivered right at your
                                    door.
                                </p>
                            </div>
                        </div>
                        <div class="col-lg-4 col-md-6 why-love">
                            <img class="img-fluid d-block why_love_img" src="../assets/images/lp-features-3.jpg" alt />
                            <br />
                            <div class="why-text-3">
                                <h2>Convenient & Quick</h2>
                                <br />
                                <p>
                                    No waiting in traffic, no haggling, no worries
                                    <br />carrying groceries, they're delivered right at your
                                    door.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- why people love sec -->

        <!-- why people love sec end -->
        <!-- corporate page -->
        <div class="corporate">
            <div class="corporate-content">
                <svg width="80px" height="80px" style="
            fill: #fff;
            stroke: #fff;
            display: inline-block;
            vertical-align: middle;
          " version="1.1" viewBox="0 0 100 100" data-reactid=".x6v76rwizu.6.2.0.0.8.0.0.0.0">
                    <g data-reactid=".x6v76rwizu.6.2.0.0.8.0.0.0.0.0">
                        <path
                            d="m82.652 27.863h-18.59v-2.1328c0-3.4453-2.8047-6.25-6.25-6.25h-15.625c-3.4453 0-6.25 2.8047-6.25 6.25v2.1328h-18.59c-1.0039 0-1.8164 0.8125-1.8164
                      1.8164v16.371c0 0.78125 0.5 1.4766 1.2422 1.7227l23.281 7.75v6.6875c0 
                      1.0039 0.8125 1.8125 1.8125 1.8164l16.289 0.035156h0.003906c0.48047 0 
                      0.94141-0.19141 1.2812-0.53125s0.53125-0.80469 0.53125-1.2852v-6.7227l23.246-7.75c0.74219-0.24609 1.2422-0.94141 1.2422-1.7227l0.007812-16.371c0-1.0039-0.8125-1.8164-1.8164-1.8164zm-43.082-2.1328c0-1.4414 1.1719-2.6172 2.6172-2.6172h15.625c1.4414 0 2.6172 1.1719 2.6172 2.6172v2.1328h-20.859zm4.1172 34.668v-4.3672h12.656v4.3945zm37.148-15.656l-22.969 7.6562h-15.703l-23-7.6602v-13.242h61.672z"
                            data-reactid=".x6v76rwizu.6.2.0.0.8.0.0.0.0.0.0" />
                        <path
                            d="m82.652 52.398c-1.0039 0-1.8164 0.8125-1.8164 1.8164v16.184c0 3.5781-2.9102 6.4922-6.4922 6.4922l-48.691-0.003906c-3.5781 0-6.4922-2.9102-6.4922-6.4922l0.003906-16.18c0-1.0039-0.8125-1.8164-1.8164-1.8164s-1.8164 0.8125-1.8164 1.8164v16.184c0 5.582 4.543 10.125 10.125 10.125h48.691c5.582 0 10.125-4.543 10.125-10.125l-0.003906-16.184c0-1.0039-0.8125-1.8164-1.8164-1.8164z"
                            data-reactid=".x6v76rwizu.6.2.0.0.8.0.0.0.0.0.1" />
                    </g>
                </svg>
                <h2>Do You Own A Business??</h2>
                <h3>Become A corporate Customer</h3>
            </div>
        </div>
        <!-- <div class="our-app">
      <div class="row">
        <div class="col-md-9 our-app-text">
          <div style="color: rgb(122 117 117 / 95%)">
            <h3>Be a part of our family</h3>
          </div>
          <div class="pt-5">
            <input class="ourapp-text-input" type="text" />
            <button class="get-app-btn btn btn-outline-danger">Get App</button>
          </div>
          <div class="pt-3">e.g. +8801672955886</div>
          <div class="play-store">
            <img width="200"
              src="https://chaldn.com/asset/Egg.Grocery.Fabric/Egg.Grocery.Web/1.5.0+DataCenter-Release-2566/Default/stores/chaldal/components/landingPage2/MobileAppSection/images/lp_getandroidapp.png?v=2&q=low&webp=1&alpha=1"
              alt />
            <img width="200"
              src="https://chaldn.com/asset/Egg.Grocery.Fabric/Egg.Grocery.Web/1.5.0+DataCenter-Release-2566/Default/stores/chaldal/components/landingPage2/MobileAppSection/images/lp_getandroidapp.png?v=2&q=low&webp=1&alpha=1"
              alt />
          </div>
        </div>
        <div class="col-md-3 phn-img">
          <img src="../assets/images/lp_iphone_nexus.png" alt />
        </div>
      </div>
    </div> -->
        <div class="map">
            <img class="img-fluid" src="../assets/images/chaldal_new_warehouses.jpg" alt />
        </div>
    </div>

    <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-xl">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel"></h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="">
                    <div class="container-fluid">
                        <div class="row p-3">
                            <div class="col-md-6 align-items-stretch">
                                <!-- <img class="sigle-product-img mt-4" v-viewer :src="
                                    baseURL + 'product/' + product_details.product_image
                                " alt /> -->
                                <v-zoomer style="width: 450px; height: 450px; border: solid 1px silver;" class="img-fluid">
                                    <img :src="baseURL + 'product/' + product_details.product_image"
                                        style="object-fit: contain; width: 100%; height: 100%;">
                                </v-zoomer>
                            </div>
                            <div class="col-md-6 ms-auto">
                                <div class="product-des">
                                    <div class="product-name p-2">
                                        <h2>
                                            {{ product_details.product_name }}
                                        </h2>
                                        <span>{{ product_details.per_unit_qty }} {{ product_details.unit_name
                                        }}</span>
                                    </div>
                                    <div class="product-price p-2">
                                        <span style="font-size: 35px; font-weight: bold">
                                            ৳
                                            {{ product_details.product_price }} <span
                                                style="font-size:10px;text-decoration: line-through;">{{
                                                        product_details.product_price_without_offer
                                                }}</span>
                                        </span>
                                    </div>
                                    <div class="quantity-btn p-2">
                                        <button class="btn-minus"
                                            @click="decrementSingleProductQty(product_details.id)">
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
                                            style="font-weight: bold; font-size: 20px; width: 40%"
                                            @click="setCart(product_details)">
                                            Buy now
                                        </button>
                                    </div>
                                    <div class="p-2" style="overflow-y: scroll; height: 200px"
                                        v-html="product_details.product_description"></div>
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
</template>
<script setup>
import { onMounted, computed, ref, reactive } from "vue";
import Category from "../apis/Category";
import { Carousel, Slide, Navigation } from 'vue3-carousel';
import spacialSlider from "../apis/SpacialSlide";
import HomeSlider from "../apis/HomeSlide";
import TheFooter from "../components/TheFooter.vue";
import { useStore } from "vuex";
import 'vue3-carousel/dist/carousel.css';




const settings = reactive({
    snapAlign: 'center',
    transition: '1000',
    autoplay: 5000,
    pauseAutoplayOnHover: true,
    wrapAround: true,
    dir: 'ltr',
    modelValue: 1,

});

const breakpoints = reactive({
    // 700px and up
    700: {
        itemsToShow: 1,
        snapAlign: 'center',

    },
    // 1024 and up
    1024: {
        itemsToShow: 2,
        snapAlign: 'start',
    }
})






const product_details = ref([]);

function setProduct(product) {
    product_details.value = product;
    //console.log('product_details', product_details.value);
}
const baseURL = ref("");
baseURL.value = axios.defaults.baseURLPublic;
const store = useStore();
const cartProducts = ref(computed(() => store.getters.getCartProducts ?? {}));
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
const cart = ref([]);
function setCart(product) {
    cart.value = product;
    store.dispatch("addToCart", product);
    // store.getters.getCartProducts();
}
// categories
const categories = ref([]);
const { getCategories } = Category;
getCategories()
    .then((response) => {
        categories.value = response.data;
    })
    .catch((error) => {
        // alert("Something went wrong.");
        console.error(error.data);
    });


//spacial offer slider Api
const spacialSliderdata = ref([]);
const { getSpacialSlider } = spacialSlider;
getSpacialSlider()
    .then((response) => {
        spacialSliderdata.value = response.data.data;
        //console.log('spacialSliderdata', spacialSliderdata.value)
    })
    .catch((error) => {
        // alert("Something went wrong.");
        console.error(error.data);
    });



// home  slider Api
const HomeSliderdata = ref([]);
const { getHomeSlider } = HomeSlider;
getHomeSlider()
    .then((response) => {
        HomeSliderdata.value = response.data;
        //console.log(HomeSliderdata.value);
    })
    .catch((error) => {
        // alert("Something went wrong.");
        console.error(error.data);
    });



</script>
<style scoped>
.overlay {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    height: 225px;
    width: 100%;
    opacity: 0;
    transition: 0.5s ease;
    background-color: rgba(40, 40, 40, 0.75);
}

.delails-btn {
    margin-top: 220px;
    border: 1px solid #f1e1e1;
}

.carousel__item {
    background-size: cover;
    display: flex;
    justify-content: center !important;
    align-items: center !important;
    padding: 20px;
}



.carousel__slide {
    padding: 20px !important;
}

.carousel__prev,
.carousel__next {
    box-sizing: content-box;
    border: 5px solid white;
}

@media (max-width: 700px) {
    .carousel__item {
        display: inline;
    }
}
</style>
