<script setup lang="ts">
import { onMounted } from 'vue';

onMounted(() => {
  window.ipc.on('WRITE_FILE', (data: any) => {
    console.log('communication #vue');
  });
});
const sendEvent = () => {
  window.ipc.send('WRITE_FILE', 'test dupa');
};
</script>
<template>
  <div class="header" @click="sendEvent()">Header</div>
  <span></span>
</template>
<style lang="scss" scoped>
.header {
  border-bottom: 1px solid black;
  padding: 24px;
}
</style>
