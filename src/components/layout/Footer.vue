<script>
import ContactosVue from '../resources/templates/Contactos.vue'
export default {
  name:"FooterLayout",
  components:{
ContactosVue
      
  }
}
</script>

<template>
  <ContactosVue/>
  <footer>
    <div class="footTheme">
<img  alt="">
    </div>
    <div class="center">
<h4>
2023-2024 &copy;NIMANA
</h4>

    </div>
  </footer>
</template>
<style scoped>
img{
     
    background-image: url(./../../assets/foot.png); 
    background-repeat:no-repeat;
    background-size: cover;
     width: 100%;
     height:50rem;
}

.center{
  text-align: center;

}

h4{
  color:var(--text-color);
  font-family: var(--roboto);
}
</style>