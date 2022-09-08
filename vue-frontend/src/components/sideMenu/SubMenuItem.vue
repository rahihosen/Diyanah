<template>
    <div>
        <div v-for="(sub, subIndex) in subMenu" :key="subIndex">
            <div @click="subMenuItemClick(sub)" :class="[
                'sub__menu menu__hover d-flex justify-content-between py-1 cursor-pointer',
                sub.active && store.state.menu.activeSubMenu?.id == sub.id
                    ? 'active__menu'
                    : '',
            ]" style="padding-left: 30px; padding-right: 9px">
                <span>{{ sub.name }}</span>
                <div v-if="sub.children.length > 0">
                    <div v-if="sub.active">
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

            <div v-show="
                store.state.menu.subSubMenu &&
                sub.id == store.state.menu.activeSubMenu?.id
            ">
                <SideSubSubMenuItem :subSubMenu="sub.children" />
            </div>
        </div>
    </div>
</template>
<script setup>
import { useStore } from 'vuex'
const store = useStore()
const { subMenu } = defineProps({
    subMenu: {
        type: Array,
        required: true,
    },
})
const subMenuItemClick = item => store.dispatch('subMenuItemClick', item)
</script>
<style>
</style>
