<script>
export default {
  name: "SlideContent",
  components: {},
};
</script>

<template>
  <section class="body">
    <div class="lay">
      <div class="card1">
    <h4 class="card-text">Card nº 1</h4>
        <div class="card-header">
            <h2>Menos é mais</h2>
            <h4>Acreditamos na tradução de necessidades e solução bonitas, mas tambem viaveis.</h4>
             </div>
        <div class="card-footer"></div>
      </div>
      <div class="card2">
    <h4 class="card-text">Card nº 2</h4>
        
        <div class="card-header">
            <h4>
                Itaú <br> Personnalité
            </h4>
        </div>
        <div class="card-footer"></div>
      </div>
      <div class="card3">
    <h4 class="card-text">Card nº 3</h4>
        
        <div class="card-header">
            <h4>
                NIMANA É A ARQUITETURA QUE INOVA E SIGNIFICA.
            </h4>
        </div>
        <div class="card-footer"></div>
      </div>
    </div>
    <br>
     <div class="lay">
      <div class="card1" style="width:48%;">
    <h4 class="card-text">Card nº 1</h4>
        <div class="card-header">
            <h2>Menos é mais</h2>
            <h4>Acreditamos na tradução de necessidades e solução bonitas, mas tambem viaveis.</h4>
             </div>
        <div class="card-footer"></div>
      </div>
      <div class="card2" style="width:48%;">
    <h4 class="card-text">Card nº 2</h4>
        
        <div class="card-header">
            <h4>
                Itaú <br> Personnalité
            </h4>
        </div>
        <div class="card-footer"></div>
      </div>
     
    </div>
  </section>
</template>
<style scoped>
.card-text{
    text-align: center;
    font-family: var(--roboto);
    margin-top:2%;
    font-size:2rem;
    height: auto;
}

.card-header{
    background: var(--background-color);
     height: 75%;
     width: 90%;
     margin-left:5%;
     margin-top:-3%;
     color:var(--text-color);
}

.card-header h4 , h2{
    font-size: 3rem;
    margin:1%;
    font-family: var(--roboto);
    font-weight:400;
}

.card-footer{
    background: var(--background-color);
     height: 12%;
     width: 90%;
     margin-left:5%;
     margin-top:2%;
}

.body {
  height: 100%;
  width: 100%;
  margin-top: 5%;
}
.lay {
  display: flex;
  justify-content: space-around;
  align-items: center;
  widows: 100%;
  height: 100%;
  background: transparent;
}

.card1,
.card2,
.card3 {
  height: 50rem;
  width: 30%;
  background: var(--text-color);
}
</style>
