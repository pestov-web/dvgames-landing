<template>
  <main class="page">
    <HeroSection />
    <AboutSection />
    <UsefulSection />
    <WhySection />
    <ConnectSection />
  </main>
</template>

<script>
export default {
  name: "index",
};
</script>

<style scoped>
.page {
  display: flex;
  flex-direction: column;
  background-color: rgb(0, 0, 0);
  align-items: center;
}
</style>
<style lang="scss">
html,
body,
#app {
  margin: 0;
  padding: 0;
  position: relative;
  background-color: rgb(0, 0, 0);
}
.section {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  &__container {
    max-width: 1200px;
    width: 100%;
    min-height: 100%;
  }
}
</style>
