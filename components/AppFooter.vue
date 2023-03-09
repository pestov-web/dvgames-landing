<template>
  <footer class="d-flex flex-column footer">
    <div class="bg-white d-flex w-100 align-center px-4 justify-center">
      <div class="footer__container">
        <strong>Присоеденяйся в социальных сетях!</strong>
        <div class="footer__social">
          <!--          <v-btn-->
          <!--            v-for="icon in icons"-->
          <!--            :key="icon"-->
          <!--            :icon="icon"-->
          <!--            size="small"-->
          <!--          ></v-btn>-->
          <v-btn size="small" icon href="https://t.me/dvgamesru">
            <svg
              width="18"
              height="16"
              viewBox="0 0 20 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0.350701 8.37408L4.9488 10.0886L6.74126 15.8557C6.8192 16.2454 7.2868 16.3233 7.59854 16.0895L10.1703 13.9853C10.4041 13.7515 10.7938 13.7515 11.1055 13.9853L15.7036 17.3364C16.0154 17.5702 16.483 17.4144 16.5609 17.0247L19.99 0.658655C20.0679 0.268988 19.6782 -0.120677 19.2886 0.0351905L0.350701 7.36095C-0.1169 7.51681 -0.1169 8.21821 0.350701 8.37408ZM6.50747 9.23135L15.5477 3.69807C15.7036 3.62013 15.8595 3.85394 15.7036 3.93187L8.29993 10.868C8.06613 11.1018 7.83233 11.4135 7.83233 11.8032L7.59854 13.6736C7.59854 13.9074 7.20886 13.9853 7.13093 13.6736L6.19572 10.2445C5.96192 9.85482 6.1178 9.38721 6.50747 9.23135Z"
                fill="#000000"
              /></svg
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
    height: 100px;
    width: 100%;
    max-width: 1200px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  &__social {
    display: flex;
    gap: 8px;
  }
}
</style>
