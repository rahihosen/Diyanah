<script setup>
import { ref } from "vue";
import { useStore } from 'vuex'
const store = useStore()
const { menu, index } = defineProps({
    menu: {
        type: Object,
        required: true,
    },
    index: {
        type: Number,
        required: true,
    },
})
const baseURL = ref("");
baseURL.value = axios.defaults.baseURLPublic;
const menuItemClick = item => store.dispatch('meneItemClick', item)
</script>

<template>
    <div>
        <div :class="[
            'menu menu__hover d-flex justify-content-between px-2 py-1 cursor-pointer',
            menu.active && store.state.menu.activeMenu?.id == menu.id
                ? 'active__menu'
                : '',
        ]" @click="menuItemClick(menu)">
            <div>
                <img :src="baseURL +'category-icon/'+ menu.category_icon" alt="" class="category-image" width="20"
                    height="20" />
                <span>{{ menu.name }}</span>
            </div>

            <div v-if="menu.children.length > 0">
                <div v-if="menu.active">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24"
                        stroke="currentColor" stroke-width="2" style="width: 20px">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M18 12H6" />
                    </svg>
                </div>

                <svg v-else :class="'more'" xmlns="http://www.w3.org/2000/svg" style="width: 20px" fill="none"
                    viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                </svg>
            </div>
        </div>
        <SideSubMenuItem v-show="
            store.state.menu.subMenu &&
            menu.id == store.state.menu.activeMenu?.id
        " :subMenu="menu.children" />
    </div>
</template>

<style>
.sub__menu {
    padding-left: 10px;
}
</style>
