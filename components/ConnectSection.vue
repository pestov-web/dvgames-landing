<script setup>
const data = reactive({
  select: [],
  selfSelect: "",
  selfSport: "",
  content: "",
  sport: "",
  selectErr: false,
  sportErr: false,
  succes: "",
  selectRules: [
    (value) => {
      if (value.length) {
        data.selectErr = false;
        return true;
      } else {
        data.selectErr = true;
        return "необходимо сделать выбор";
      }
    },
  ],
  sportRules: [
    (value) => {
      if (value.length > 1) {
        data.sportErr = false;
        return true;
      } else {
        data.sportErr = true;
        return "необходимо сделать выбор";
      }
    },
  ],
  items: [
    "Покер",
    "Киберспорт",
    "Велоспорт",
    "Зимние виды спорта",
    "Шахматы",
    "Другое...",
  ],
  // loading: false,
});
const dialog = useState("dialog", () => false);
const error = useState("error", () => false);
const succes = useState("succes", () => false);

const onSubmit = async () => {
  if (!data.sportErr && !data.selectErr) {
    if (localStorage.getItem("succes")) {
      dialog.value = true;
      succes.value = true;
    } else {
      try {
        await $fetch("http://127.0.0.1:3001/polls", {
          method: "POST",
          body: data,
        }).then(() => {
          dialog.value = true;
          error.value = false;
          localStorage.setItem("succes", "true");
        });
      } catch (e) {
        dialog.value = true;
        error.value = true;
      }
    }
  }
};
</script>

<template>
  <section class="section connect" id="connect">
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

    <v-sheet class="mx-auto connect__form">
      <v-form validate-on="submit" @submit.prevent="onSubmit">
        <v-autocomplete
          v-model="data.sport"
          label="ваш вид спорта"
          :items="data.items"
          variant="solo"
          :rules="data.sportRules"
        ></v-autocomplete
        ><v-text-field
          v-if="data.sport === `Другое...`"
          v-model="data.selfSport"
          label="Укажите ивд спорта"
          variant="solo"
        ></v-text-field>
        <v-combobox
          v-model="data.select"
          :items="data.items"
          label="Какой раздел вас интересует ? "
          multiple
          variant="solo"
          :rules="data.selectRules"
        ></v-combobox
        ><v-text-field
          v-if="data.select.includes(`Другое...`)"
          v-model="data.selfSelect"
          label="Укажите свои разделы"
          variant="solo"
        ></v-text-field
        ><v-textarea
          label="Что вы хотите видеть на портале ? "
          variant="solo"
          v-model="data.content"
        ></v-textarea>
        <v-btn type="submit" block class="mt-2">отправить</v-btn>
      </v-form>
    </v-sheet>
    <AlertDialog :dialog="dialog.value" />
  </section>
</template>

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
    width: 100%;
    color: #000000;
    @include md {
      width: calc(100% / 12 * 6);
    }
  }
  &__form {
    background-color: rgba(90, 116, 119, 0.5);
    border-radius: 5px;
    padding: 30px;
    box-shadow: 0 5px 10px 0 rgba(0, 0, 0, 0.5);
    max-width: 400px;
    width: 100%;
    &-list {
      padding: 40px 0;
    }
  }
}
</style>
