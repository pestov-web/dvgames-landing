<template>
  <section class="section useful">
    <div class="section__container">
      <h2 class="useful__title">DVgames будет полезен:</h2>
      <ul class="useful__list">
        <li class="useful__list-item">
          <h3 class="useful__list-title">Игрокам</h3>
          <p class="useful__list-subtitle">
            Информация обо всех мероприятиях в одном месте. Удаленная
            регистрация Полезный контент: новости и обзоры событий, девайсов,
            новинок Акции и скидки от партнеров и организаторов On-line
            трансляции событий Общение с единомышленниками Уникальный профиль с
            индикатором прогресса
          </p>
        </li>
        <li class="useful__list-item">
          <h3 class="useful__list-title">Организаторам</h3>
          <p class="useful__list-subtitle">
            Целевая площадка для анонсов мероприятий, рекламы и продвижения
            Организация удаленной регистрации на турниры Возможность вести
            рейтинги участников Организация on-line трансляций Фидбэк от
            участников
          </p>
        </li>
        <li class="useful__list-item">
          <h3 class="useful__list-title">Спонсорам</h3>
          <p class="useful__list-subtitle">
            Целевая аудитория в одном месте Повышение имиджа и узнаваемости
            бренда Фидбэк от клиентов Коллаборация с другими брендами
            Организация спецпроектов и партнерских мероприятий
          </p>
        </li>
      </ul>
    </div>
  </section>
</template>

<script></script>

<style lang="scss" scoped>
.section {
  &__layout {
    height: 100%;
    width: 100%;
    background-color: rgba(0, 0, 0, 0.6);
  }
}
.useful {
  background-image: url("/img/3.webp");
  min-height: 500px;
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  color: aliceblue;
  padding: 50px 15px 50px;
  &__title {
    font-size: 28px;
    @include sm {
      font-size: 32px;
    }
  }
  &__list {
    box-sizing: border-box;
    list-style: none;
    display: flex;
    flex-wrap: wrap;
    margin: 15px 0 0 0;
    gap: 10px;
    width: 100%;
    @include sm {
    }
    @include md {
      width: calc(100% / 12 * 10);
    }
    &-item {
      padding: 15px;
      width: 100%;
      background-color: rgba(40, 42, 44, 0.45);
      border-radius: 5px;
      box-shadow: 0 5px 10px 0 rgba(0, 0, 0, 0.5);
      @include sm {
        width: calc(100% / 12 * 6 - 10px);
      }
      @include md {
        width: calc(100% / 12 * 6 - 7px);
      }
      @include lg {
        width: calc(100% / 12 * 4 - 7px);
      }
    }

    &-title {
      font-size: 24px;
    }
    &-subtitle {
      padding-top: 10px;
    }
  }

  &__container {
  }
}
</style>
