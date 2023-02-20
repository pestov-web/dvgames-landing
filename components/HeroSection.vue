<template>
  <section class="section hero" id="hero">
    <div class="section__container">
      <h1 class="hero__title">DVGames: стань частью комьюнити уже сегодня!</h1>
      <p class="hero__subtitle">
        Собираем всех, кто ценит дух соревнований, борьбы и азарта!
      </p>
      <v-btn
        class="hero__button"
        color="#83abce"
        :to="{ path: '/', hash: '#connect' }"
        >Я с вами!</v-btn
      >
      <v-btn
        variant="tonal"
        class="hero__button"
        :to="{ path: '/', hash: '#about' }"
        >Вначале подробности</v-btn
      >
    </div>
  </section>
</template>

<script></script>

<style lang="scss" scoped>
.hero {
  background-image: url("/img/1.webp");
  min-height: 100vh;
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  color: #f0f8ffff;
  padding: 0 15px;
  &__title {
    font-size: 36px;
    max-width: calc(100% / 12 * 7);
  }
  &__subtitle {
    margin: 30px 0;
    font-size: 26px;
    max-width: calc(100% / 12 * 6);
  }
  &__button {
    margin-right: 15px;
  }
}
</style>
