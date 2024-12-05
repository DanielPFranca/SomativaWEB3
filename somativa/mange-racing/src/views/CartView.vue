<!-- 
<script>
import { computed } from "vue";
import {CrossView} from "./CrossView.vue";

import { 
  frente, motor, rodaFrente, rodaTras, 
  selectedFrenteIndex, selectedMotorIndex, 
  selectedRodaFrenteIndex, selectedRodaTrasIndex 
} from "./CrossView.vue"; // Atualize o caminho correto para importar as variáveis

export default {
  setup() {
    const selectedItems = computed(() => [
      frente[selectedFrenteIndex.value],
      motor[selectedMotorIndex.value],
      rodaFrente[selectedRodaFrenteIndex.value],
      rodaTras[selectedRodaTrasIndex.value],
    ]);

    return { selectedItems };
  },
};
</script>


<template>
  <div class="cart-container">
    <h1>Carrinho de Customização</h1>
    <div class="cart-items">
      <div class="cart-item" v-for="(item, index) in selectedItems" :key="index">
        <img :src="item.src" :alt="item.nome" class="item-image" />
        <div class="item-details">
          <h3>{{ item.nome }}</h3>
        </div>
      </div>
    </div>
    <div class="cart-actions">
      <button class="checkout-button">Finalizar Compra</button>
    </div>
  </div>
</template>



<style scoped lang="scss">
.cart-container {
  max-width: 800px;
  margin: 2rem auto;
  padding: 1rem;
  background-color: #f4f4f4;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
}

h1 {
  text-align: center;
  color: #333;
  margin-bottom: 1rem;
}

.cart-items {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
}

.cart-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #fff;
  padding: 1rem;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  border: 1px solid #ddd;
}

.item-image {
  width: 100%;
  max-width: 150px;
  border-radius: 8px;
  margin-bottom: 0.5rem;
}

.item-details h3 {
  font-size: 1rem;
  color: #333;
  text-align: center;
}

.cart-actions {
  margin-top: 2rem;
  display: flex;
  justify-content: center;
}

.checkout-button {
  background-color: #007bff;
  color: white;
  padding: 0.8rem 1.5rem;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  font-size: 1rem;
}

.checkout-button:hover {
  background-color: #0056b3;
}
</style> -->

<!-- 
<template>
  <div class="cart-container">
    <h1>Seu Carrinho</h1>
    <div class="cart-items">
      <div class="cart-item" v-for="(item, index) in cartItems" :key="index">
        <img :src="item.src" :alt="item.nome" class="item-image" />
        <p>{{ item.nome }}</p>
      </div>
    </div>
    <button @click="finalizePurchase" class="checkout-button">Finalizar Compra</button>
  </div>
</template>

<script>
import { ref, onMounted } from "vue";

export default {
  setup() {
    const cartItems = ref([]);

    // Recuperar os dados do localStorage ao montar a página
    onMounted(() => {
      const savedItems = JSON.parse(localStorage.getItem("cartItems"));
      if (savedItems) {
        cartItems.value = savedItems;
      }
    });

    const finalizePurchase = () => {
      alert("Compra finalizada com sucesso!");
      localStorage.removeItem("cartItems"); // Limpa o carrinho após a compra
      cartItems.value = [];
    };

    return { cartItems, finalizePurchase };
  },
};
</script>




<style scoped lang="scss">
.cart-container {
  max-width: 600px;
  margin: 0 auto;
  padding: 1.5rem;
  background-color: #f9f9f9;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

h1 {
  text-align: center;
  color: #333;
  font-size: 1.8rem;
  margin-bottom: 1.5rem;
}

.cart-items {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
}

.cart-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #fff;
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 1rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s, box-shadow 0.3s;
}

.cart-item:hover {
  transform: translateY(-3px);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);
}

.item-image {
  width: 100px;
  height: 100px;
  object-fit: contain;
  margin-bottom: 0.5rem;
}

p {
  font-size: 1rem;
  color: #555;
  text-align: center;
}

.checkout-button {
  display: block;
  width: 100%;
  padding: 0.75rem;
  margin-top: 1.5rem;
  background-color: #4caf50;
  color: #fff;
  border: none;
  border-radius: 8px;
  font-size: 1.2rem;
  font-weight: bold;
  text-align: center;
  cursor: pointer;
  transition: background-color 0.3s, box-shadow 0.3s;
}

.checkout-button:hover {
  background-color: #45a049;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);
}

@media (max-width: 480px) {
  .cart-items {
    grid-template-columns: 1fr;
  }

  .item-image {
    width: 80px;
    height: 80px;
  }

  h1 {
    font-size: 1.5rem;
  }
}
</style> -->


<script>
import { ref, onMounted } from "vue";

export default {
  setup() {
    const cartItems = ref([]);

    // Recuperar os dados do localStorage ao montar a página
    onMounted(() => {
      const savedItems = JSON.parse(localStorage.getItem("cartItems"));
      if (savedItems) {
        cartItems.value = savedItems;
      }
    });

    // Finalizar compra
    const finalizePurchase = () => {
      alert("Compra finalizada com sucesso!");
      localStorage.removeItem("cartItems"); // Limpa o carrinho após a compra
      cartItems.value = [];
    };

    return {
      cartItems,
      finalizePurchase,
    };
  },
};
</script>

<template>
  <div class="cart-container">
    <h1>Seu Carrinho</h1>
    
    <div v-if="cartItems.length === 0">
      <p>O carrinho está vazio.</p>
    </div>

    <div v-else>
      <div v-for="(item, index) in cartItems" :key="index" class="cart-item">
        <h2>Customização #{{ index + 1 }}</h2>
        
        <div class="cart-item-detail">
          <p><strong>Frente:</strong> {{ item.frente.nome }}</p>
          <img :src="item.frente.src" :alt="item.frente.nome" class="cart-item-image">
        </div>

        <div class="cart-item-detail">
          <p><strong>Motor:</strong> {{ item.motor.nome }}</p>
          <img :src="item.motor.src" :alt="item.motor.nome" class="cart-item-image">
        </div>

        <div class="cart-item-detail">
          <p><strong>Roda Frente:</strong> {{ item.rodaFrente.nome }}</p>
          <img :src="item.rodaFrente.src" :alt="item.rodaFrente.nome" class="cart-item-image">
        </div>

        <div class="cart-item-detail">
          <p><strong>Roda Traseira:</strong> {{ item.rodaTras.nome }}</p>
          <img :src="item.rodaTras.src" :alt="item.rodaTras.nome" class="cart-item-image">
        </div>
        
        <hr />
      </div>

      <button @click="finalizePurchase" class="checkout-button">Finalizar Compra</button>
    </div>
  </div>
</template>

<style scoped lang="scss">
.cart-container {
  max-width: 900px;
  margin: 0 auto;
  padding: 20px;
  background-color: #f8f8f8;
  border-radius: 8px;
}

h1 {
  text-align: center;
  margin-bottom: 20px;
}

.cart-item {
  display: flex;
  justify-content: space-between;
  padding: 15px;
  background-color: #fff;
  margin-bottom: 15px;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  align-items: center;
}

.cart-item-detail {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 20%; /* Ajusta o tamanho da coluna */
  text-align: center;
}

.cart-item-detail img {
  max-width: 120px;
  margin-top: 10px;
  border-radius: 5px;
  object-fit: contain;
}

.cart-item-detail p {
  margin-bottom: 5px;
}

.cart-item-detail strong {
  font-weight: bold;
}

.checkout-button {
  display: block;
  width: 100%;
  padding: 12px;
  background-color: #4CAF50;
  color: white;
  border: none;
  font-size: 18px;
  cursor: pointer;
  border-radius: 8px;
  margin-top: 20px;
}

.checkout-button:hover {
  background-color: #45a049;
}

</style>
