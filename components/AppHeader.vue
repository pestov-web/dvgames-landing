<template>
  <header class="header">
    <div class="header__container">
      <div class="logo">dvgames</div>
      <!--      <v-btn @click="regDialog = true">Регистрация</v-btn>-->
      <div></div>
    </div>
  </header>
</template>

<script setup>
const regDialog = useState("regDialog", () => false);
</script>

<style lang="scss" scoped>
.header {
  height: 50px;
  background-color: rgba(33, 33, 33, 0.57);
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 10;
  padding: 0 15px;
  &__container {
    max-width: 1200px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
}
.logo {
  color: aliceblue;
  text-transform: uppercase;
  font-weight: 700;
}
</style>
