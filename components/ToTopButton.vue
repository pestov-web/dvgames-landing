<template>
  <v-btn @click="scrollTop" class="top-button" icon="mdi-chevron-up"></v-btn>
</template>

<script setup>
const router = useRouter();
const scrollTop = () => {
  window.scrollTo(0, 0);
  router.push({ path: "/" });
};
</script>

<style lang="scss" scoped>
.top-button {
  position: fixed;
  right: 20px;
  bottom: 20px;
  z-index: 20;
  //opacity: 0.6;
  background-color: #83abce;
}
</style>
