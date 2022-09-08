<script setup>

import { watch, computed } from 'vue'
import { useRouter } from 'vue-router'
import { useStore } from 'vuex'
const router = useRouter()
const store = useStore()
const itemClick = computed(() => store.getters['clickItem'])
watch(itemClick, (item, preItem) => {
    router.push({ name: 'product.show', params: { categoryId: item.id } })
});
</script>

<template>
    <div class="side__menu__wrapper">
        <div v-for="(menu, index) in store.state.menu.list" :key="index">
            <SideMenuItem :index="index" :menu="menu" />
        </div>
    </div>
</template>