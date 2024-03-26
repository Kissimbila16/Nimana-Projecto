<template>
<div>
    <DefaultVue/>
</div>
</template>

<script>
import DefaultVue from "./components/layout/Default.vue";
export default {
  name: "App",
  components: {
    DefaultVue,
  },
};
</script>

<style global>
:root{
  --background-color:#000;
   --text-color:rgb(56, 56, 170);
   --roboto:system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
}

body{
  background: var(--background-color);
  height: 100%;
  width:100%;
}


</style>
