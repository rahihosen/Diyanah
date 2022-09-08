<template>
    <div class="row p-3">
        <div class="py-5 text-center">
            <h2>Checkout form</h2>
        </div>
        <div class="col-md-6 order-md-2 mb-4">
            <h4 class="d-flex justify-content-between align-items-center mb-3">
                <span class="text-muted">Your cart</span>
                <span class="badge badge-secondary badge-pill">3</span>
            </h4>
            <ul class="list-group mb-3">
                <li
                    v-for="(cartProduct, index) in cartProducts"
                    :key="index"
                    class="
                        list-group-item
                        d-flex
                        justify-content-between
                        lh-condensed
                    "
                >
                    <div>
                        <h6 class="my-0">{{ cartProduct.product_name }}</h6>
                        <small class="text-muted"
                            >{{ cartProduct.product_price }} x
                            {{ cartProduct.quantity }}</small
                        >
                    </div>
                    <span class="text-muted">{{
                        cartProduct.product_price * cartProduct.quantity
                    }}</span>
                </li>

                <li
                    class="
                        list-group-item
                        d-flex
                        justify-content-between
                        bg-light
                    "
                >
                    <div class="text-success">
                        <h6 class="my-0">Promo code</h6>
                        <small>EXAMPLECODE</small>
                    </div>
                    <span class="text-success">0</span>
                </li>
                <li class="list-group-item d-flex justify-content-between">
                    <span>Total (TK)</span>
                    <strong> {{ store.getters.cartTotal }}</strong>
                </li>
            </ul>

            <form class="card p-2">
                <div class="input-group">
                    <input
                        type="text"
                        class="form-control"
                        placeholder="Promo code"
                    />
                    <div class="input-group-append">
                        <button type="submit" class="btn btn-secondary">
                            Redeem
                        </button>
                    </div>
                </div>
            </form>
        </div>
        <div class="col-md-6 order-md-1">
            <h4 class="mb-3">Billing address</h4>
            <form class="needs-validation" @submit.prevent="orderForm()">
                <div class="mb-3">
                    <label for="username">Name</label>
                    <div class="input-group">
                        <input
                            type="text"
                            class="form-control"
                            id="username"
                            placeholder="Username"
                            v-model="form.username"
                            required
                        />
                        <div class="invalid-feedback" style="width: 100%">
                            Your name is required.
                        </div>
                    </div>
                </div>

                <div class="mb-3">
                    <label for="Mobile Number">Mobile Number </label>
                    <div class="input-group">
                        <input
                            v-model="form.mobile_number"
                            type="text"
                            class="form-control"
                            id="mobile-number"
                            placeholder="Phone Number"
                            required
                        />
                        <div class="invalid-feedback" style="width: 100%">
                            Your name is required.
                        </div>
                    </div>
                </div>

                <div class="mb-3">
                    <label for="email"
                        >Email <span class="text-muted">(Optional)</span></label
                    >
                    <input
                        v-model="form.email"
                        type="email"
                        class="form-control"
                        id="email"
                        placeholder="you@example.com"
                    />
                    <div class="invalid-feedback">
                        Please enter a valid email address for shipping updates.
                    </div>
                </div>

                <div class="mb-3">
                    <label for="address">Address</label>
                    <input
                        v-model="form.address"
                        type="text"
                        class="form-control"
                        id="address"
                        placeholder="1234 Main St"
                        required
                    />
                    <div class="invalid-feedback">
                        Please enter your shipping address.
                    </div>
                </div>

                <div class="row">
                    <div class="col-md-5 mb-3">
                        <label for="country">Country</label>
                        <select
                            v-model="form.country"
                            class="custom-select d-block w-100"
                            id="country"
                            required
                        >
                            <option value="">Choose...</option>
                            <option value="1">Bangladesh</option>
                        </select>
                        <div class="invalid-feedback">
                            Please select a valid country.
                        </div>
                    </div>
                    <div class="col-md-4 mb-3">
                        <label for="state">State</label>
                        <select
                            v-model="form.state"
                            class="custom-select d-block w-100"
                            id="state"
                            required
                        >
                            <option value="">Choose...</option>
                            <option value="1">Dhaka</option>
                            <option value="2">Chattogram</option>
                            <option value="3">Barishal</option>
                            <option value="4">Khulna</option>
                            <option value="5">Mymensingh</option>
                            <option value="6">Rajshahi</option>
                            <option value="7">Rangpur</option>
                            <option value="8">Sylhet</option>
                        </select>
                        <div class="invalid-feedback">
                            Please provide a valid state.
                        </div>
                    </div>

                    <div class="col-md-3 mb-3">
                        <label for="zip">Zip</label>
                        <input
                            v-model="form.zip"
                            type="text"
                            class="form-control"
                            id="zip"
                            placeholder=""
                            required
                        />
                        <div class="invalid-feedback">Zip code required.</div>
                    </div>
                </div>
                <hr class="mb-4" />
                <div class="custom-control custom-checkbox">
                    <input
                        type="checkbox"
                        class="custom-control-input"
                        id="same-address"
                    />
                    <label class="custom-control-label" for="same-address"
                        >Shipping address is the same as my billing
                        address</label
                    >
                </div>
                <div class="custom-control custom-checkbox">
                    <input
                        type="checkbox"
                        class="custom-control-input"
                        id="save-info"
                    />
                    <label class="custom-control-label" for="save-info"
                        >Save this information for next time</label
                    >
                </div>
                <hr class="mb-4" />

                <h4 class="mb-3">Payment option</h4>

                <div class="d-block my-3">
                    <div class="custom-control custom-radio">
                        <input
                            v-model="form.paymentMethod"
                            id="credit"
                            value="1"
                            name="paymentMethod"
                            type="radio"
                            class="custom-control-input"
                            checked
                            required
                        />
                        <label class="custom-control-label" for="credit"
                            >Cash On Delivary</label
                        >
                    </div>
                    <div class="custom-control custom-radio">
                        <input
                            v-model="form.paymentMethod"
                            value="2"
                            id="debit"
                            name="paymentMethod"
                            type="radio"
                            class="custom-control-input"
                            required
                        />
                        <label class="custom-control-label" for="debit"
                            >Online Pay</label
                        >
                    </div>
                </div>

                <hr class="mb-4" />
                <button
                    class="btn btn-primary btn-lg btn-block mb-5"
                    type="submit"
                >
                    Continue to checkout
                </button>
            </form>
        </div>
    </div>
</template>
<script setup>
import { computed, ref, reactive } from "vue";
import { useStore } from "vuex";
import {useRouter} from 'vue-router';

const router = useRouter();
const baseURL = ref("");
baseURL.value = axios.defaults.baseURLPublic;

const store = useStore();
const cartProducts = ref(computed(() => store.getters.getCartProducts ?? {}));

const form = ref({
    username: "",
    mobile_number: "",
    address: "",
    email: "",
    country: "",
    state: "",
    zip: "",
    paymentMethod: 1,
    cartProducts: [],
});

function orderForm() {
    // console.log(form);
    form.value.cartProducts = cartProducts.value;
    const formData = form.value;

    Swal.fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Confirm order'
        }).then((result) => {
        if (result.isConfirmed) {
            axios.post("orderform", formData).then((response) => {
                //success msg
                if(response.data.success){
                    store.commit("EMPTY_CART")
                    Toast.fire({
                        icon: "success",
                        title: "Your Order Submitted successfully",
                    });
                    router.push({name: 'home'})
                }
                
                
                //success msg end
                //const paymentMethod = response.data.paymentMethod;
                // console.log(paymentMethod)
            });
        }
    })
    
}
</script>
