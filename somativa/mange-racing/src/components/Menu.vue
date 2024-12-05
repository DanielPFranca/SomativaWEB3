<script setup lang="ts">


</script>

<template>

<div>
    <header class="flex flex-row align-items-center justify-content-evenly">
        <p>MANGE RACING ®️</p>
        <nav class="ml-5">
            <RouterLink class="m-3" to="/">Home</RouterLink>
            <RouterLink class="m-3" to="/moto">Motorização</RouterLink>
            <RouterLink class="m-3" to="/cart">Cart</RouterLink>
          </nav>
    </header>
</div>

</template>

<style scoped lang="scss">

#flag{
    height: 2.5rem;
    width: 3.5rem;
    cursor: pointer;
}

header{
    height: 5rem;
    width: 40rem;
    max-width: 100%;
    p{  
        font-size: 30px;
        font-weight: bold;
        font-style: italic;
        text-decoration-color: white;
    }
    a{
        text-decoration: none;
        font-size: 1.5rem;
        color: var(--app-dark-text-color);
    }
    .router-link-exact-active{
        font-weight: bold;
    }
}

</style>
