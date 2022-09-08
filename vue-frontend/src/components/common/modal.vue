<script setup lang="ts">
import TheFooter from "../TheFooter.vue";
defineProps({
  show: {
    type: Boolean,
    default: false,
  },
  title: {
    type: String,
    default: "<<Here Your Products Details>>",
  },
});

</script>

<template>
  <div class="modal fade" :class="{ show: show, 'd-block': show }"
    id="exampleModal" tabindex="-1" aria-labelledby="" aria-hidden="true">
    <div class="modal-dialog modal-xl">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLabel">{{ title }}</h5>
         
          <slot name="header"/>
        </div>
        <div class="modal-body">
          <slot name="body" />
        </div>
        <div class="modal-footer">
          <slot name="footer" />
          <TheFooter />
        </div>
      </div>
    </div>
  </div>
</template>