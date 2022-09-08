<template>
    <div v-for="(subSub, index) in subSubMenu" :key="index">
        <div
            :class="[
                'sub__menu menu__hover d-flex justify-content-between py-1 cursor-pointer',
                subSub.active &&
                store.state.menu.activeSubSubMenu?.id == subSub.id
                    ? 'active__menu'
                    : '',
            ]"
            style="padding-left: 40px"
            @click="subSubMenuItemClick(subSub)"
        >
            <span>{{ subSub.name }}</span>
        </div>
    </div>
</template>
<script setup>
import { useStore } from 'vuex'
const store = useStore()
const { subSubMenu } = defineProps({
    subSubMenu: {
        type: Object,
        required: true,
    },
})

const subSubMenuItemClick = item => store.dispatch('subSubMenuItemClick', item)
</script>
<style></style>
