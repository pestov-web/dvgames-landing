<script setup>
import {
  email,
  helpers,
  minLength,
  required,
  sameAs,
} from "@vuelidate/validators";

const formData = reactive({
  select: [],
  selfSelect: "",
  selfSport: "",
  content: "",
  sport: "",
  selectErr: false,
  sportErr: false,
  succes: "",

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

const rules = computed(() => {
  return {
    sport: {
      required: helpers.withMessage("Необходимо сделать выбор !", required),
    },
    // selfSport: {
    //   required: helpers.withMessage("Необходимо сделать выбор !", required),
    // },
    select: {
      required: helpers.withMessage("Необходимо сделать выбор !", required),
    },
    // selfSelect: {
    //   required: helpers.withMessage("Необходимо сделать выбор !", required),
    // },
  };
});

import { useVuelidate } from "@vuelidate/core";
const v$ = useVuelidate(rules, formData);
const onSubmit = async () => {
  v$.value.$validate();
  if (!v$.value.$error) {
    if (localStorage.getItem("succes")) {
      dialog.value = true;
      succes.value = true;
    } else {
      try {
        await $fetch("https://apid.pestov-web.ru/polls", {
          method: "POST",
          body: formData,
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
      <v-form validate-on="input" @submit.prevent="onSubmit" class="relative">
        <div class="h-20">
          <v-autocomplete
            v-model="formData.sport"
            label="ваш вид спорта"
            :items="formData.items"
            variant="solo"
            @change="v$.sport.$touch"
            hide-details
          ></v-autocomplete
          ><span class="text-xs text-red-500 h-2" v-if="v$.sport.$error">{{
            v$.sport.$errors[0].$message
          }}</span>
        </div>
        <v-text-field
          v-if="formData.sport === `Другое...`"
          v-model="formData.selfSport"
          label="Укажите ивд спорта"
          variant="solo"
        ></v-text-field>
        <div class="h-20">
          <v-combobox
            :class="{ 'mb-6': !v$.sport.$error }"
            v-model="formData.select"
            :items="formData.items"
            label="Какой раздел вас интересует ? "
            multiple
            variant="solo"
            @change="v$.select.$touch"
            hide-details
          ></v-combobox
          ><span class="text-xs text-red-500" v-if="v$.select.$error">{{
            v$.select.$errors[0].$message
          }}</span>
        </div>
        <v-text-field
          v-if="formData.select.includes(`Другое...`)"
          v-model="formData.selfSelect"
          label="Укажите свои разделы"
          variant="solo"
        ></v-text-field
        ><v-textarea
          label="Что вы хотите видеть на портале ? "
          variant="solo"
          v-model="formData.content"
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
.none {
  opacity: 0;
}
</style>
