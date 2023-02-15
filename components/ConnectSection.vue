<template>
  <section class="section connect">
    <div class="section__container">
      <h2 class="connect__title">Вы с нами?</h2>
      <p class="connect__subtitle">
        Запуск обновленного портала DVGames запланирован на осень 2023 года. Но
        мы приглашаем зарегистрироваться уже сейчас, чтобы не пропустить важные
        анонсы и получить бонусы от наших партнеров за раннюю регистрацию. Также
        мы будем признательны вам, если заполните небольшую анкету. Ваши ответы
        помогут нам понять, какие сервисы и разделы необходимо развивать в
        первую очередь. Пишите ваши идеи, мы обязательно реализуем их!
      </p>
    </div>

    <v-sheet width="400" class="mx-auto connect__form">
      <v-form validate-on="submit" @submit.prevent="submit">
        <v-autocomplete
          label="ваш вид спорта"
          :items="items"
          variant="solo"
        ></v-autocomplete>
        <v-combobox
          v-model="select"
          :items="items"
          label="Какой раздел вас интересует ? "
          multiple
          variant="solo"
        ></v-combobox
        ><v-textarea
          label="Что вы хотите видеть на портале ? "
          variant="solo"
        ></v-textarea>
        <v-btn type="submit" block class="mt-2">отправить</v-btn>
      </v-form>
    </v-sheet>
  </section>
</template>

<script>
export default {
  data() {
    return {
      select: [],
      items: ["Покер", "Киберспорт", "Сноуборд", "Шахматы", "Другое..."],
    };
  },
};
</script>

<style lang="scss" scoped>
.connect {
  background-image: url("/img/7.webp");
  min-height: 500px;
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  color: #000000;
  display: flex;
  flex-direction: column;
  gap: 50px;
  padding: 50px 15px;
  &__title {
    font-size: 32px;
  }
  &__subtitle {
    width: calc(100% / 12 * 6);
    color: #000000;
  }
  &__form {
    background-color: rgba(90, 116, 119, 0.5);
    border-radius: 5px;
    padding: 30px;
    box-shadow: 0 5px 10px 0 rgba(0, 0, 0, 0.5);
    &-list {
      padding: 40px 0;
    }
  }
}
</style>
