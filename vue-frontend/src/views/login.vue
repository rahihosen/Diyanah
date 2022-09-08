<template>
  <!-- <button id="" v-on:click="alert('f')">login</button> -->
</template>

<script setup>
import axios from "axios";
import { onMounted } from "vue";

// document.getElementById("close-modal").click();
onMounted(() => {
  login();
});
function login() {
  console.log("call");
  axios
    .post("http://127.0.0.1:8000/api/login", {
      email: "admin@gmail.com",
      password: "password",
    })
    .then(function ({ data }) {
      console.log(data);
    })
    .catch(function (error) {
      console.log(error);
    });
}
</script>
