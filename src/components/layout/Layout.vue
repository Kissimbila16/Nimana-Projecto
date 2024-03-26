<script>
import ContentVue from "../resources/templates/Content.vue";

export default {
  name: "LayoutLayout",
  components: {
    ContentVue,
  },
};
</script>

<template>
  <section>
    <div class="body">
      <h4 class="titulo">Arquitetura que <b>inova</b> e <b>Significa.</b></h4>

      <div>
        <h2>NMN</h2>
      </div>
    </div>
    <br />
    <div class="fundo"></div>
    <br />
    <div class="contents">
      <ContentVue />
    </div>
  </section>
</template>

<style scoped>
* {
  border-color: transparent;
}
section {
  height: 100%;
  width: 100%;
}
.fundo {
  background-image: url(./../../assets/background.png);
  background-repeat: no-repeat;
  background-size: cover;
  height: 30rem;
  width: 100%;
  margin-top: 5%;
  border-color: transparent;
}

b {
  color: var(--text-color) !important;
}
.titulo {
  color: white;
  margin: 6%;
  margin-top: 4%;
  font-size: 58px;
  font-family: var(--roboto);
}

h2 {
  color: var(--text-color);
  font-weight: 900;
  font-family: var(--roboto);
  width: 100%;
  margin-left: 0.5%;
  margin-top: -8%;
  font-size: 50rem;
  height: auto;
  letter-spacing: 1%;
}

.body {
  height: 52rem;
  margin-top: 1rem;
}

.contents {
  margin-top: 5%;
}


@media(max-width:578px) {
h2{
  display: none;
}
.body{
  height: 32rem;
}

}
</style>
