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
  background-image: url("/img/1.webp");
  min-height: 100vh;
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  color: #f0f8ffff;
  padding: 0 15px;
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
    @include sm {
      max-width: calc(100% / 12 * 6);
      font-size: 26px;
    }
  }
  &__buttons-container {
    display: flex;
  }
  &__button {
    margin-right: 15px;
    padding: 0 10px;
  }
}
</style>
