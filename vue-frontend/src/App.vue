<template>
    <the-header></the-header>
    <div class="side-navbar active-nav d-flex justify-content-between flex-wrap flex-column bg-white" id="sidebar">
        <the-sidebar></the-sidebar>
    </div>
    <div class="my-container active-cont">
        <the-cart> </the-cart>
        <router-view></router-view>
        <the-footer></the-footer>
    </div>
</template>

<script setup>
import TheHeader from './components/TheHeader.vue'
import TheFooter from './components/TheFooter.vue'
import TheSidebar from './components/TheSidebar.vue'
import TheCart from './components/TheCart.vue'
import { onMounted } from 'vue'
import { useStore } from 'vuex'
const store = useStore()
onMounted(() => store.commit('getMenus'))
</script>
