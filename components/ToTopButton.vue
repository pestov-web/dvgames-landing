<template>
  <v-btn
    @click="scrollTop"
    class="top-button"
    icon="mdi-chevron-up"
    :class="{ 'top-button__active': scrolled }"
  ></v-btn>
</template>

<script setup>
const router = useRouter();
const scrollTop = () => {
  window.scrollTo(0, 0);
  router.push({ path: "/" });
};
</script>
<script>
export default {
  data() {
    return {
      limitPosition: 500,
      scrolled: false,
      lastPosition: 0,
    };
  },
  methods: {
    handleScroll() {
      if (100 < window.scrollY) {
        this.scrolled = true;
        // move up!
      }

      if (100 > window.scrollY) {
        this.scrolled = false;
        // move down
      }

      this.lastPosition = window.scrollY;
      // this.scrolled = window.scrollY > 250;
    },
  },
  beforeMount() {
    window.addEventListener("scroll", this.handleScroll);
  },
  // beforeUnmount() {
  //   window.removeEventListener("scroll", this.handleScroll);
  // },
};
</script>

<style lang="scss" scoped>
.top-button {
  position: fixed;
  right: 20px;
  bottom: 20px;
  z-index: 20;
  background-color: #83abce;
  display: none;

  &__active {
    display: block;
  }
}
</style>
