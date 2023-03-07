<script setup>
const dialog = useState("dialog");
const error = useState("error");
const succes = useState("succes");
</script>

<template>
  <div class="dialog" v-if="dialog">
    <div class="dialog__container">
      <span v-if="!error && !succes" class="dialog__text"
        >Анкета успешно отправлена</span
      ><span v-if="error" class="dialog__text">Ошибка !!!</span>
      <span v-if="error" class="dialog__text">Попробуйте позже</span>
      <span v-if="succes" class="dialog__text">Ошибка !!!</span>
      <span v-if="succes" class="dialog__text">Вы уже заполняли анкету</span>
      <v-btn color="#83abce" block @click="dialog = false">Закрыть</v-btn>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.dialog {
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  z-index: 50;
  background-color: rgba(0, 0, 0, 0.63);
  display: flex;
  justify-content: center;
  align-items: center;
  &__container {
    background-color: aliceblue;
    border-radius: 15px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 25px;
    gap: 15px;
  }
}
</style>
