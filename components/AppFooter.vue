<template>
  <footer class="d-flex flex-column footer">
    <div class="bg-white d-flex w-100 align-center px-4 justify-center">
      <div class="footer__container">
        <strong>Присоеденяйся в социальных сетях!</strong>
        <div class="footer__social">
          <v-btn
            v-for="icon in icons"
            :key="icon"
            class="mx-4"
            :icon="icon"
            variant="plain"
            size="small"
          ></v-btn>
        </div>
      </div>
    </div>

    <div class="px-4 py-2 bg-black text-center w-100">
      {{ new Date().getFullYear() }} — <strong>DVGames</strong>
    </div>
  </footer>
</template>

<script>
export default {
  data: () => ({
    icons: ["mdi-twitch", "mdi-whatsapp", "mdi-youtube", "mdi-instagram"],
  }),
};
</script>

<style lang="scss" scoped>
.footer {
  &__container {
    width: 100%;
    max-width: 1200px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
}
</style>
