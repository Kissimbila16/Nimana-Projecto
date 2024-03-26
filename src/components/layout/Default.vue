<script>
import FooterVue from "./Footer.vue";
import HeaderVue from "./Header.vue";
import LayoutVue from "./Layout.vue";
export default {
  name: "DefaultLayout",
  components: {
    HeaderVue,
    LayoutVue,
    FooterVue,
  },
};
</script>

<template>
  <section>
    <HeaderVue />
  <div>
      <LayoutVue />
    <FooterVue />
  </div>
  </section>
</template>

<style scoped>
section {
  width: 100%;
  height: 100%;
  background: var(--background-color);
}

div{
    
}
</style>
