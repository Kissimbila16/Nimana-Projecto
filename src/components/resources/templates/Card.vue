<script>
export default {
  name: "CardeContent",
  components: {},
};
</script>

<template>
  <section>
    <div class="img">
      <img src="" alt="" />
    </div>
    <main>
      <div class="main_text">
        <h4>sobre a empresa</h4>
      </div>
      <div class="descriptions">
        <h4>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Assumenda
          illum impedit, itaque fugit tenetur voluptatem quae rerum perspiciatis
          expedita, dolores dolor hic. Aliquam rerum odit suscipit voluptatibus
          voluptates. Corrupti, sunt?
        </h4>
      </div>
    </main>
  </section>
</template>
<style scoped>
.main_text{
     color:black;
    font-family: var(--roboto);
    width:40%;
    padding:1%;
    display: flex;
    justify-content: center;
    align-items: center;
}
.descriptions{
    color:black;
    font-family: var(--roboto);
    width:60%;
    padding:1%;


}
main {
  display: flex;
  gap: 5px;
  width: 100%;
  height: 200px;
  background-color:white;
}

section {
  display: grid;
  height: 40rem;
  width: 100%;
}

.img {
  height: 30rem;
  width: 100%;
  background:var(--text-color);
}
</style>
