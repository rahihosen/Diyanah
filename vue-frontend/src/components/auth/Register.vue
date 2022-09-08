<template>
    <div class="modal fade" id="modal-register" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <form @submit.prevent="register(form)">
                    <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalLabel">Register Modal</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close" id="register-close-modal"></button>
                    </div>
                    <div class="modal-body">
                        <div class="form-group">
                            <label>Name</label>
                            <input type="text" v-model="form.name" required class="form-control" placeholder="Enter your name" />
                            <credential-error :error="credentialErrors.name"></credential-error>
                            <label>Email</label>
                            <input type="email" v-model="form.email" required class="form-control" placeholder="Email" />
                            <credential-error :error="credentialErrors.email"></credential-error>
                            <label>Password</label>
                            <input type="password" v-model="form.password" required class="form-control" placeholder="Password" />
                            <credential-error :error="credentialErrors.password"></credential-error>
                            <label>Confirm Password</label>
                            <input type="password" v-model="form.password_confirmation" required class="form-control" placeholder="Confirm password" />
                            <credential-error :error="credentialErrors.password_confirmation"></credential-error>
                        </div>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        <button type="submit" class="btn btn-primary">Register</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>
<script setup>
import { computed, onMounted, ref, watch } from 'vue';
import { useStore } from 'vuex';
import useAuth from '../../composables/useAuth';
import CredentialError from '../error/CredentialError.vue';

const store = useStore();
const { register, credentialErrors } = useAuth();
const form = ref({ name: '', email: '', password: '', password_confirmation: '' });
const isAuthenticated = ref(computed(() => store.getters.isAuthenticated));
let closeButton = null;

onMounted(() => {
    closeButton = document.getElementById('register-close-modal');
});

watch(isAuthenticated, () => {
    closeButton.click();
})
</script>