<template>
  <section class="section why">
    <div class="section__container why__container">
      <div class="why__wrapper">
        <h2 class="why__title">Почему у нас все получится?</h2>
        <p class="why__subtitle">
          Над DVGames работает команда, которая в начале нулевых создала и
          активно развивала одноименный портал, посвященный киберспорту. Более
          десяти лет мы объединяли игровое сообщество, и организовывали
          собственные турниры, в том числе региональные отборы на World Cyber
          Games.
        </p>
        <p class="why__subtitle">
          Мы хорошо знакомы с тем, как создать и организовать комьюнити, в
          котором всем будет комфортно, интересно и полезно находиться. Поэтому
          мы уверены в своих силах, и приглашаем присоединиться к нам уже
          сейчас!
        </p>
      </div>
    </div>
  </section>
</template>

<script></script>

<style lang="scss" scoped>
.why {
  color: #212121;
  z-index: 1;
  position: relative;
  min-height: 360px;
  padding: 30px 15px 30px;
  &__title {
    font-size: 32px;
  }
  &__subtitle {
    margin-top: 15px;
  }
  &__wrapper {
    width: calc(100% / 12 * 6);
  }

  .why__container {
    z-index: 3;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
  }
}
.why:before {
  content: "";
  min-height: 360px;
  background-image: url("/img/6.webp");
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  position: absolute;
  height: 100px;
  z-index: 0;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  filter: blur(3px);
}
</style>
