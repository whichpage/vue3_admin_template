<script setup lang="ts">
import { Plus } from '@element-plus/icons-vue'
import { ElButton, ElIcon } from 'element-plus'
import Test from './components/Test.vue'
import SvgIcon from './components/SvgIcon.vue'
</script>

<style scoped>

</style>

<template>
  <div>
    <ElButton type="primary" size="default">
      <ElIcon><Plus /></ElIcon>
      按钮
    </ElButton>
    <Test />

    <SvgIcon icon-name="example" />
    <br>

    <svg class="svg-icon" aria-hidden="true">
      <use href="#icon-example" />
    </svg>
    <br>
    <svg-icon icon-name="example" />
  </div>
</template>
 