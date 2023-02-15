<template>
  <header class="header">
    <div class="header__container">
      <div class="logo">dvgames</div>
      <v-dialog v-model="dialog" persistent width="1024">
        <template v-slot:activator="{ props }">
          <v-btn v-bind="props">Регистрация</v-btn>
        </template>
        <v-card>
          <v-card-title>
            <span class="text-h5">Регистрация пользователя</span>
          </v-card-title>
          <v-card-text>
            <v-container>
              <v-row>
                <v-col cols="12" sm="6" md="4">
                  <v-text-field label="Имя*" required></v-text-field>
                </v-col>
                <v-col cols="12" sm="6" md="4">
                  <v-text-field
                    label="Никнейм*"
                    hint="Ваш никнейм или прозвище"
                  ></v-text-field>
                </v-col>
                <v-col cols="12" sm="6" md="4">
                  <v-text-field
                    label="Фамилия"
                    hint=""
                    persistent-hint
                    required
                  ></v-text-field>
                </v-col>
                <v-col cols="12">
                  <v-text-field label="Email*" required></v-text-field>
                </v-col>
                <v-col cols="12">
                  <v-text-field
                    label="Пароль*"
                    type="password"
                    required
                  ></v-text-field>
                </v-col>
                <v-col cols="12" sm="6">
                  <v-select
                    :items="['0-17', '18-29', '30-54', '54+']"
                    label="Возраст"
                    required
                  ></v-select>
                </v-col>
                <v-col cols="12" sm="6">
                  <v-autocomplete
                    :items="['Покер', 'киберспорт', 'Футбол', 'Другое...']"
                    label="Интересы"
                    multiple
                  ></v-autocomplete>
                </v-col>
              </v-row>
            </v-container>
            <small>*обязательные поля</small>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="blue-darken-1" variant="text" @click="dialog = false">
              Закрыть
            </v-btn>
            <v-btn color="blue-darken-1" variant="text" @click="dialog = false">
              Отправить
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </div>
  </header>
</template>

<script>
export default {
  data: () => ({
    dialog: false,
  }),
};
</script>

<style lang="scss" scoped>
.header {
  height: 50px;
  background-color: rgba(33, 33, 33, 0.57);
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 10;
  padding: 0 15px;
  &__container {
    max-width: 1200px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
}
.logo {
  color: aliceblue;
  text-transform: uppercase;
  font-weight: 700;
}
</style>
