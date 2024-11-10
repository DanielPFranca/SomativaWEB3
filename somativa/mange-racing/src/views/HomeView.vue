<script setup lang="ts">

import { useRouter } from 'vue-router';
const router = useRouter();


</script>

<template>
  <div class="flex flex-row align-items-center justify-content-evenly">
    <section class="flex flex-column align-items-center">
      <h2>Somos especialistas em fazer sonhos em 2 rodas,<br>
        venha conferir as maravilhosas da Indústria 4.0</h2>
    </section>

    <section>
      <h3>Estamos desde 1984 inovendo conceitos e criando tendências no mercado motociclista</h3><br>
      <h3>Contando com o nosso arsenal tecnológico, você pode criar a motocicleta que tem a sua cara!</h3>
    </section>
  </div>


  
  <div class="flex flex-row align-items-center justify-content-evenly">
    <section class="flex flex-column align-items-center">
      <img src="/src/assets/images/Group-40.png" alt="moto-1">
      <p>Cross Rider 400</p>

    </section>

    <section class="flex flex-column align-items-center">
      <img src="/src/assets/images/Group-41.png" alt="moto-1">
      <p>Nimbus 1000</p>
    </section>

    <section class="flex flex-column align-items-center">
      <img src="/src/assets/images/Group-42.png" alt="moto-1">
      <p>Travelar 600</p>
    </section>
  </div>
  <div>
    <section class="flex flex-column align-items-center">
      <button class="mt-4 app-dark-button" @click="router.push('/moto')" id="order">Quero a minha!</button>
    </section>
  </div>

</template>


<style scoped lang="scss">
    h2{
        font-size: 10;
        font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
        width: 30rem;
        text-align: justify;
        font-style: italic;
    }
    h3{
      font-size: 10;
      font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
        width: 30rem;
        text-align: justify;
        font-style: italic;
    }
    #order{
        text-decoration-color: white;
        height: 3.2rem;
        width: 20rem;    
        border-radius: 2.5rem;    
    }
</style>

