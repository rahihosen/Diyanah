<template>
  <div class="modal fade" id="modal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">
        <form @submit.prevent="login(form)">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">Login Modal</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"
              id="close-modal"></button>
          </div>
          <div class="modal-body">
            <div class="form-group">
              <label>Email</label>
              <input type="email" v-model="form.email" required class="form-control" placeholder="Email" />
              <credential-error :error="credentialErrors.email"></credential-error>
              <label>Password</label>
              <input type="password" v-model="form.password" required class="form-control" placeholder="Password" />
              <credential-error :error="credentialErrors.password"></credential-error>
            </div>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">
              Close
            </button>
            <button type="submit" class="btn btn-primary">Login</button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>
<script setup>
import { computed, onMounted, ref, watch } from "vue";
import { useStore } from "vuex";
import useAuth from "../../composables/useAuth";
import CredentialError from "../error/CredentialError.vue";

const email = ref("");
const password = ref("");

const store = useStore();

const form = ref({ email: email.value, password: password.value });
const isAuthenticated = ref(computed(() => store.getters.isAuthenticated));
let closeButton = null;
const { login, credentialErrors } = useAuth();


onMounted(() => {
  closeButton = document.getElementById("close-modal");
});

watch(isAuthenticated, () => {
  closeButton.click();
});
</script>
