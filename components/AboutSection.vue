<template>
  <section class="section about" id="about">
    <div class="section__container">
      <h2 class="about__title">Что такое DVGames?</h2>
      <ul class="about__list">
        <li class="about__list-item">
          <p class="about__subtitle">
            Как правило, спортивные сообщества формируются по узкому,
            определенному интересу: футбол, хоккей или что-то еще. Мы
            замахнулись шире, и создаем DVGames, чтобы объединить все
            соревновательные активности Дальнего Востока.
          </p>
        </li>
        <li class="about__list-item">
          <p class="about__subtitle">
            Мы не будем фокусироваться на чем-то одном. Наша цель —
            аккумулировать в одном месте все ключевые события, которые проходят
            в нашем регионе, как в off-line, так и в on-line формате. Сделать
            удобным поиск и регистрацию на них, наладить обратную связь с
            организатором, оперативно рассказывать о важных новостях.
          </p>
        </li>
        <li class="about__list-item">
          <p class="about__subtitle">
            Турниры по мини футболу, картинг, пейнтбол, баскетбол, городки,
            лыжные гонки, покер, киберспорт и все остальное, что вам интересно,
            будет представлено здесь, на DVGames!
          </p>
        </li>
      </ul>
    </div>
  </section>
</template>

<script>
export default {
  name: "About",
};
</script>

<style lang="scss" scoped>
.about {
  padding: 50px 14px;
  background-image: linear-gradient(
      to bottom,
      rgba(220, 220, 220, 0.9),
      rgba(220, 220, 220, 0.9)
    ),
    url("/img/4.webp");
  min-height: 300px;
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  color: #212121;
  box-shadow: inset 0 0 0 3000px rgba(150, 150, 150, 0.192);
  &__title {
    font-size: 32px;
  }
  &__list {
    display: flex;
    flex-direction: column;
    gap: 15px;
    list-style: none;
    margin-top: 10px;
    &-item {
    }
  }
}
</style>
