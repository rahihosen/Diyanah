<template>
  <div>
    <nav class="navbar_wraper fixed-top">
      <!-- Container wrapper -->
      <!-- Toggle button -->

      <div>
        <div class="d-flex justify-content-between align-content-center"
          style="height: 60px; width: 100%; align-items: center !important">
          <div>
            <button class="btn menu_icon" id="menu-btn">
              <i style="font-size: 20px; color: white" class="fas fa-bars"></i>
            </button>
            <router-link :to="{ name: 'home' }">
              <img href="index.php" src="../assets/images/D-logo.png" class="brand-logo" alt loading="lazy" />
            </router-link>
          </div>

          <div class="flex-grow-1 px-3 search__wrapper">
            <input @keyup="scarchProduct" placeholder="Search For Product" type="text" class="main-search form-control w-100" />
          </div>

          <div class="d-flex right_menu">
            <div class="d-flex justify-content-center align-content-center text-center item_menu">
              <i class="fas fa-question text-white p-1"></i>
              <span class="text-white">Help</span>
            </div>

            <div v-if="!user && !isAuthenticated"
              class="d-flex justify-content-center align-content-center text-center item_menu">
              <span class="text-white" data-bs-toggle="modal" data-bs-target="#modal">Sign in</span>
            </div>

            <div v-if="!user && !isAuthenticated" class="d-flex justify-content-center align-content-center text-center item_menu">
              <span class="text-white"  data-bs-toggle="modal"
                data-bs-target="#modal-register">Register</span>
            </div>

            <div class="d-flex justify-content-center align-content-center text-center item_menu">
              <span class="text-white" @click="logout()">Sign Out</span>
            </div>
          </div>

          <div>
            <!-- font awasome menu dot -->
            <div class="" id="right_side_menu_btn" @click="openMobileMenu">
              <i data-bs-toggle="modal" data-bs-target="#mobile_nav_modal" class="fas fa-ellipsis-v text-white"></i>
            </div>
          </div>
        </div>
      </div>
      <!-- Right elements -->

      <!-- Container wrapper -->
    </nav>

    <!-- Navbar -->
    <div class="sticky-header-cart">
      <button class="cart-button">
        <i class="fas fa-shopping-bag" style="font-size: 35px; margin: 5px"></i>
      </button>
      <br />
      <span style="font-size: 12px">{{ cartCount }} items</span>
    </div>
    <!-- login modal -->
    <Login/>
    <Register/>
    <!-- mobile nav -->
    <Menu/>
    <!-- login modal end -->

    <div class="modal fade" id="mobile_nav_modal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header bg-black text-center">
            <h5 class="modal-title text-white" id="exampleModalLabel">
              Diyanah
            </h5>
            <button type="button" class="btn-close text-white bg-white" data-bs-dismiss="modal"
              aria-label="Close"></button>
          </div>
          <div class="modal-body">
            <div class="">
              <ul class="list-group text-center" @click="closeModal()">
                <li class="list-group-item">
                  <i class="fas fa-home"></i>

                  <router-link :to="{ name: 'home' }" class="text-decoration-none text-dark">
                    Home
                  </router-link>
                </li>
                <li class="list-group-item" v-if="!isAuthenticated" data-bs-toggle="modal" data-bs-target="#modal">
                  <i class="fas fa-sign-in-alt"></i>
                  <a href="#" class="text-decoration-none text-dark"> Login </a>
                </li>
                <li class="list-group-item">
                  <i class="fas fa-cash-register"></i>
                  <a href="#" v-if="!isAuthenticated" data-bs-toggle="modal" data-bs-target="#modal-register"
                    class="text-decoration-none text-dark">
                    Register
                  </a>
                </li>
                <li class="list-group-item">
                  <i class="fas fa-hands-helping"></i>
                  <a href="#" class="text-decoration-none text-dark"> Help </a>
                </li>
                <li class="list-group-item" v-if="isAuthenticated">
                  <i class="fas fa-hands-helping"></i>
                  <span class="text-decoration-none text-dark" @click="logout()">
                    Logout
                  </span>
                </li>
              </ul>
            </div>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { computed, ref } from "vue";
import { useStore } from "vuex";
import useAuth from "../composables/useAuth";
import Login from "./auth/Login.vue";
import Register from "./auth/Register.vue";
import Menu from "./auth/Menu.vue";

const store = useStore();

const { logout } = useAuth();
const cartCount = ref(computed(() => store.getters.cartCount));
const isAuthenticated = ref(computed(() => store.getters.isAuthenticated));

// get user from localStorage
const user = JSON.parse(localStorage.getItem("user"));
console.log("user", user);
// open mobile menu
const openMobileMenu = () => {
  $("#mobile_nav_modal").modal("show");
};
//close modal
const closeModal = () => {
  $("#mobile_nav_modal").modal("hide");
};

// search product
const scarchProduct = (e) => {
  const search = e.target.value;
   store.dispatch('searchProduct', search);  
};
</script>
<style scoped>
.menu_icon {
  background-color: #d72e4d;
  margin-left: 10px !important;
}

.navbar_wraper {
  width: 100%;
  padding: 0;
  /* display: flex; */
  background-color: #d72e4d;
}

.brand-logo {
  width: 150px;
}

.divider_menu {
  height: 50px;
  background-color: gray;
  width: 1px;
}

.item_menu {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 50px;
  color: white;
  /* font-size: 20px; */
  cursor: pointer;
  border-right: #bd1d3a 1px solid;
  padding-left: 8px;
  padding-right: 8px;
}

.item_menu:hover {
  background-color: #bd1d3a;
}

#right_side_menu_btn {
  display: none !important;
}
.right_menu{
  border-left: #bd1d3a 1px solid;
}
@media only screen and (max-width: 950px) {
  .brand-logo {
    display: none;
  }
}

@media only screen and (max-width: 750px) {
  .right_menu {
    display: none !important;
  }

  #right_side_menu_btn {
    display: block !important;
    padding-right: 20px;
  }

  .search__wrapper {
    padding-right: 20px !important;

  }
}
</style>



