<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import Menu from './components/Menu.vue';
</script>

<template>
  <main id="card-app">
    <div id="content-app">
      <Menu />
      <RouterView />
    </div>

  </main>

</template>

<style scoped lang="scss">
#card-app{
  height: 90%;
  width: 80%;
  background-color: var(--app-card-background);
  border-radius: 1.5rem;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
}

#content-app{
  border-radius: 1rem;
  height: 80px;
  //height: calc(100% - 50rem);
  background-color:rgb(48, 56, 59);
}
</style>
