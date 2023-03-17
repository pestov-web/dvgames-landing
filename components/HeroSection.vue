<template>
  <section class="section hero" id="hero">
    <div class="hero__container">
      <h1 class="hero__title">DVGames: стань частью комьюнити уже сегодня!</h1>
      <p class="hero__subtitle">
        Собираем всех, кто ценит дух соревнований, борьбы и спортивного азарта!
      </p>
      <div class="hero__buttons-container">
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
    </div>
  </section>
</template>

<script></script>

<style lang="scss" scoped>
.hero {
  min-height: 100vh;
  background-position: center;
  background-repeat: no-repeat;
  background-image: url("/img/11_small.webp");
  background-size: cover;
  color: #f0f8ffff;
  padding: 0 15px;
  @include sm {
  }
  @include md {
    background-image: url("/img/11.webp");
    background-attachment: fixed;
  }
  @include lg {
  }
  @include xl {
  }
  &__container {
    display: flex;
    width: 100%;
    max-width: 1200px;
    flex-direction: column;
    gap: 30px;
  }
  &__title {
    font-size: 26px;
    width: 100%;
    color: #212121;
    @include sm {
      max-width: calc(100% / 12 * 7);
    }
    @include md {
      font-size: 36px;
    }
  }
  &__subtitle {
    margin: 0;
    font-size: 24px;
    width: 80%;
    color: #212121;
    @include sm {
      max-width: calc(100% / 12 * 6);
      font-size: 26px;
    }
  }
  &__buttons-container {
    display: flex;
    color: #212121;
  }
  &__button {
    margin-right: 15px;
    padding: 0 10px;
  }
}
</style>
