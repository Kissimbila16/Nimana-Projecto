<script>
export default {
  name: "contactosVue",
  data() {
    return {
      nome: "contactos",
    };
  },
};
</script>

<template>
  <div class="body">
    <form>
      <h4 class="form-text">Cadastra-se</h4>
      <div class="form-group">
        <label for="">Seu Nome</label><br>
        <input type="name" class="form-control" placeholder="Nome:" />
      </div>
      <div class="form-group">
        <label for="">Sobrenome</label><br>
        <input type="name" class="form-control" placeholder="Sobrenome:" />
      </div>
      <div class="form-group">
        <label for="">E-mail</label> <br>
        <input type="name" class="form-control" placeholder="Email:" />
      </div>
      <div class="form-group">
        <label for="">Senha</label><br>
        <input type="name" class="form-control" placeholder="senha:" />
      </div>
      <button class="form-button">
        Criar Conta
      </button>
    </form>
  </div>
</template>

<style scoped>
.form-text{
    text-align: left;
    font-family: var(--roboto);
    font-weight: 500;
    color:white;
    font-size: 2.5rem;
    padding:1%;

}
.form-group{
    margin-top:3%;
}
.body{
     display: flex;
     justify-content: center;
     width: 100%;
     height:70rem;
     align-items: center;
}
form{
    display: grid;
    justify-content: center;
    width: 50%;
    height:40rem;
    margin-top: -20%;
    background:transparent;
}

label{
    color:var(--text-color);
    margin: 1%;
    font-size: 1.5rem;

    font-family: var(--roboto);


}
button{
    height:60px;
    width: 36rem;
    margin:1%;
    margin-top:10%;
    font-size: 2rem;
    color:var(--text-color);
    border-color:var(--text-color);
    border-width:3px;
    background: transparent;
}

button:hover{
     background:var(--text-color);
      color:var(--background-color);
}

.form-control{
    padding:1%;
    margin-top:10%;
}


input{
    border-color:none;
    border-width:none;
    border-bottom-color:var(--text-color)!important;
    height: 40px;
    width:35rem;
    background: transparent;
    box-shadow:none!important;
    margin-top:15%;

}

input:focus{
box-sizing: none;
box-shadow: 0px;
border-color:transparent;
}



</style>
