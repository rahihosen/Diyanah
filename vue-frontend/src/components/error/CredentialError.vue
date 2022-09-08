<template>
    <p class="text-danger" v-for="(err, index) in error" :key="index">{{ err }}</p>
</template>
<script setup>
const props = defineProps({
    error: {
        type: Array,
        default: () => []
    }
});
</script>