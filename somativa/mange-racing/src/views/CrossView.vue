<script>
import { ref } from "vue";
import { useRouter } from "vue-router";

export default {
  setup() {
    const router = useRouter();

    // Dados das peças
    const frente = [{ id: 1, src: "src/assets/images/cross/Frente-4.png", nome: "Frente n1" }];
    const motor = [{ id: 1, src: "src/assets/images/cross/Motor-4.png", nome: "Motor n1" }];
    const rodaFrente = [{ id: 1, src: "src/assets/images/cross/RodaFrente-3.png", nome: "Roda Frente n1" }];
    const rodaTras = [
      { id: 1, src: "src/assets/images/cross/RodaTraseira-4.png", nome: "Roda de Tras n1" },
      { id: 2, src: "src/assets/images/cross/RodaTraseira-8.png", nome: "Roda de Tras n2" },
    ];

    // Índices das peças selecionadas
    const selectedFrenteIndex = ref(0);
    const selectedMotorIndex = ref(0);
    const selectedRodaFrenteIndex = ref(0);
    const selectedRodaTrasIndex = ref(0);

    // Função para mudar as peças
    const changePart = (part, isNext) => {
      const partData = {
        frente: { index: selectedFrenteIndex, items: frente },
        motor: { index: selectedMotorIndex, items: motor },
        rodaFrente: { index: selectedRodaFrenteIndex, items: rodaFrente },
        rodaTras: { index: selectedRodaTrasIndex, items: rodaTras },
      };
      const { index, items } = partData[part];
      const newIndex = isNext ? index.value + 1 : index.value - 1;
      index.value = (newIndex + items.length) % items.length;
    };

    // Adicionar a customização ao carrinho
    const addToCart = () => {
      const newCustomization = {
        frente: frente[selectedFrenteIndex.value],
        motor: motor[selectedMotorIndex.value],
        rodaFrente: rodaFrente[selectedRodaFrenteIndex.value],
        rodaTras: rodaTras[selectedRodaTrasIndex.value],
      };

      // Recuperar carrinho existente ou criar um novo
      const currentCart = JSON.parse(localStorage.getItem("cartItems")) || [];
      currentCart.push(newCustomization);

      // Salvar o carrinho atualizado no localStorage
      localStorage.setItem("cartItems", JSON.stringify(currentCart));

      // Navegar para a tela de carrinho
      router.push("/cart");
    };

    return {
      frente,
      motor,
      rodaFrente,
      rodaTras,
      selectedFrenteIndex,
      selectedMotorIndex,
      selectedRodaFrenteIndex,
      selectedRodaTrasIndex,
      changePart,
      addToCart,
    };
  },
};
</script>


<template>
  <div class="customization-container">
    <h1>Personalize sua Moto</h1>
    <div class="image-grid">
      <div class="image-part">
        <img 
          class="frente-images" 
          :src="frente[selectedFrenteIndex].src" 
          :alt="`Frente ${frente[selectedFrenteIndex].id}`"
        />
        <button @click="changePart('frente', false)" class="prev-selector">&#9664;</button>
        <button @click="changePart('frente', true)" class="next-selector">&#9654;</button>
      </div>
      <div class="image-part">
        <img 
          class="motor-images" 
          :src="motor[selectedMotorIndex].src" 
          :alt="`Motor ${motor[selectedMotorIndex].id}`"
        />
        <button @click="changePart('motor', false)" class="prev-selector">&#9664;</button>
        <button @click="changePart('motor', true)" class="next-selector">&#9654;</button>
      </div>
      <div class="image-part">
        <img 
          class="rodafrente-images" 
          :src="rodaFrente[selectedRodaFrenteIndex].src" 
          :alt="`Roda Frente ${rodaFrente[selectedRodaFrenteIndex].id}`"
        />
        <button @click="changePart('rodaFrente', false)" class="prev-selector">&#9664;</button>
        <button @click="changePart('rodaFrente', true)" class="next-selector">&#9654;</button>
      </div>
      <div class="image-part">
        <img 
          class="rodatras-images" 
          :src="rodaTras[selectedRodaTrasIndex].src" 
          :alt="`Roda Traseira ${rodaTras[selectedRodaTrasIndex].id}`"
        />
        <button @click="changePart('rodaTras', false)" class="prev-selector">&#9664;</button>
        <button @click="changePart('rodaTras', true)" class="next-selector">&#9654;</button>
      </div>
    </div>
    <button @click="addToCart" class="cart-button">Ir para o Carrinho</button>
  </div>
</template>


<style scoped lang="scss">
.image-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
  padding: 1rem;
  background-color: #333;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  max-width: 600px;
  margin: 0 auto;
}

.image-part {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #fff;
  border-radius: 8px;
  padding: 1rem;
  border: 2px solid #ddd;
}

.image-part img {
  max-width: 100%;
  height: auto;
  border-radius: 8px;
  object-fit: contain;
}

.prev-selector, .next-selector {
  position: absolute;
  background-color: rgba(0, 0, 0, 0.6);
  color: #fff;
  border: none;
  cursor: pointer;
  padding: 0.3rem 0.5rem;
  font-size: 1.2rem;
  border-radius: 50%;
  top: 50%;
  transform: translateY(-50%);
}

.prev-selector {
  left: -15px;
}

.next-selector {
  right: -15px;
}
</style>




