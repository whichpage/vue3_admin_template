<script setup lang="ts">
defineProps({
  iconName: {
    type: String,
    required: true
  }
})
</script>

<template>
  <svg class="svg-icon" aria-hidden="true">
    <use :href="`#icon-${iconName}`" />
  </svg>
</template>

<style scoped>
.svg-icon {
  width: 24px;
  height: 24px;
  fill: currentColor;
}
</style>