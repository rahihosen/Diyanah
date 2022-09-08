<template>
    <!-- cart -->
    <aside id="sidebar-cart">
        <main>
            <a href="#" class="close-button-new close-button"
                ><span class="close-icon">X</span></a
            >
            <h2>
                Shopping Bag
                <span class="count">{{ store.getters.cartCount }}</span>
            </h2>
            <ul class="products">
                <li
                    v-for="(cartProduct, index) in cartProducts"
                    :key="index"
                    class="product"
                >
                    <a href="#" class="product-link">
                        <span class="product-image">
                            <img
                                :src="
                                    baseURL +
                                    'product/' +
                                    cartProduct.product_image
                                "
                                alt="Product Photo"
                            />
                        </span>
                        <span class="product-details">
                            <h3>{{ cartProduct.product_name }}</h3>
                            <span class="qty-price">
                                <span class="qty">
                                    <button
                                        class="plus-button"
                                        @click="decrement(index)"
                                        id="minus-button-1"
                                    >
                                        -
                                    </button>
                                    <input
                                        :id="'qty-input-' + index"
                                        class="qty-input"
                                        name="qty-input"
                                        @keyup="changeQty(index)"
                                        v-model="cartProduct.quantity"
                                        title="Quantity"
                                        inputmode="numeric"
                                    />
                                    <button
                                        class="minus-button"
                                        @click="increment(index)"
                                        id=""
                                    >
                                        +
                                    </button>
                                    <input
                                        type="hidden"
                                        name="item-price"
                                        id="item-price-1"
                                        value="12.00"
                                    />
                                </span>
                                <span class="price">{{
                                    store.getters.itemTotal(index)
                                }}</span>
                            </span>
                        </span>
                    </a>
                    <a @click="removeCart(index)" class="remove-button"
                        ><span class="remove-icon">X</span></a
                    >
                </li>
            </ul>
            <div class="totals">
                <div class="subtotal">
                    <span class="label">Subtotal:</span>
                    <span class="amount"> ৳ {{ store.getters.cartTotal }}</span>
                </div>
            </div>
            <div class="action-buttons">
                <a class="view-cart-button" href="#">Cart</a
                ><router-link
                    id="cart-close"
                    v-if="isAuthenticated"
                    :to="{ name: 'checkout.index' }"
                    class="checkout-button cart-close"
                    >Checkout</router-link
                >
                <a
                    style="cursor: pointer"
                    v-if="!isAuthenticated"
                    data-bs-toggle="modal"
                    data-bs-target="#modal"
                    class="checkout-button pe-auto"
                    >Checkout</a
                >
            </div>
        </main>
    </aside>
    <div id="sidebar-cart-curtain"></div>
    <!-- cart end -->
</template>


<script setup>
import { computed, ref } from "vue";
import { useStore } from "vuex";
import Login from "./auth/Login.vue";

const store = useStore();
const isAuthenticated = ref(computed(() => store.getters.isAuthenticated));

const baseURL = ref("");
baseURL.value = axios.defaults.baseURLPublic;

const cartProducts = ref(computed(() => store.getters.getCartProducts ?? {}));

function changeQty(index) {
    const qty = cartProducts.value[index].quantity;
    // console.log(qty)
    store.commit("CHANGE_QTY", { index, qty });
}

function increment(index) {
    store.commit("increment", index);
}

function decrement(index) {
    store.commit("decrement", index);
}

function removeCart(index) {
    store.commit("REMOVE_CART", index);
}
</script>

