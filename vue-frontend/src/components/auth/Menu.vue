<template>
    <div class="modal fade" id="mobile_nav_modal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header bg-black text-center">
                    <h5 class="modal-title text-white" id="exampleModalLabel">Diyanah</h5>
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
                            <li class="list-group-item" v-if="!isAuthenticated" data-bs-toggle="modal"
                                data-bs-target="#modal">
                                <i class="fas fa-sign-in-alt"></i>
                                <a href="#" class="text-decoration-none text-dark"> Login </a>
                            </li>
                            <li v-if="!isAuthenticated" class="list-group-item">
                                <i class="fas fa-cash-register"></i>
                                <a href="#"  data-bs-toggle="modal"
                                    data-bs-target="#modal-register" class="text-decoration-none text-dark">
                                    Register
                                </a>
                            </li>
                            <li class="list-group-item">
                                <i class="fas fa-hands-helping"></i>
                                <a href="#" class="text-decoration-none text-dark"> Help </a>
                            </li>
                            <li class="list-group-item" v-if="isAuthenticated" @click="logout()">
                                <i class="fas fa-hands-helping"></i>
                                <span class="text-decoration-none text-dark">
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
</template>


<script setup>
import {  ref,computed } from "vue";
import { useStore } from "vuex";
import useAuth from "../../composables/useAuth";
const store = useStore();

const { logout } = useAuth();
const isAuthenticated = ref(computed(() => store.getters.isAuthenticated));


const closeModal = () => {
  $("#mobile_nav_modal").modal("hide");
};
</script>
