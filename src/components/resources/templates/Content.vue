<script>
import CardVue from "./Card.vue";
import SlideContentVue from "./SlideContent.vue";
export default {
  name: "ContextoVue",
  components: {
    CardVue,
    SlideContentVue,
  },
};
</script>

<template>
  <div>
    <CardVue/>
    <SlideContentVue/>
  </div>
</template>

<style scoped>
div {
  width: 100%;
  height: 100%;
  background: transparent;
}
</style>
