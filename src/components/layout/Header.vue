<script>
export default {
  name:"HeaderLayout",
  components:{
      
  }
}
</script>

<template>
   <header>
<h2 class="titulo text-danger">NIMANA</h2>
 <ol>
    <li><a href="">SOBRE</a></li>
    <li><a href="">PROJECTOS</a></li>
    <li><a href="">NIMANA HABITA</a></li>
    <li><a href="">CONTATO</a></li>
 </ol>

<div class="logo">
    <img src="icon.png" alt="logotipo">
</div>
   </header>
</template>

<style scoped>

.titulo{
     width: auto;
     font-weight: 400;
     font-family:var(--roboto);
     font-size: 5rem;
     margin-left:-4%;
     color:white;
}
.logo{
      padding-top:0%;

}

header{
     height: 100px;
      color:var(--text-color);
      display:flex;
      justify-content: space-around;
      align-items: center;
      padding-top:0%;
      width: 100%;
}

a{
    text-decoration: none;
    color:var(--text-color);
     font-family:var(--roboto);
     font-size: 15px;
     font-weight: 600;
}

a:active{
     color: white;
      font-weight: 700;
}

ol{
     display: flex;
     width: 30%;
          list-style: none;
          text-align: right;
          gap:5%;
}
.logo{
    width:auto;
}
</style>