<script setup lang="ts">
import { ref } from "vue";

const frente = [
    { id: 1, src: 'src/assets/images/nimbus/Frente-5.png' },

    ];

const motor = [
    { id: 1, src: 'src/assets/images/nimbus/Motor-2.png' },

];

const rodaFrente = [
    { id: 1, src: 'src/assets/images/nimbus/RodaFrente-2.png' },

];

const rodaTras = [
    { id: 1, src: 'src/assets/images/nimbus/RodaTraseira-2.png' },


    
];

const selectedFrenteIndex = ref(0);
const selectedMotorIndex = ref(0);
const selectedRodaFrenteIndex = ref(0);
const selectedRodaTrasIndex = ref(0);

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

</script>

<template>
    <div v-if="frente.length > 0 && motor.length > 0" class="image-grid">
        <div class="image-part top">
            <img class="frente-images"
                 :src="frente[selectedFrenteIndex].src" 
                 :alt="`frente ${frente[selectedFrenteIndex].id}`">        
            <button @click="changePart('frente', false)" class="prev-selector">&#9664;</button>
            <button @click="changePart('frente', true)" class="next-selector">&#9654;</button>
        </div>
        
        <div class="image-part center">
            <img class="motor-images"
                 :src="motor[selectedMotorIndex].src" 
                 :alt="`motor ${motor[selectedMotorIndex].id}`">        
            <button @click="changePart('motor', false)" class="prev-selector">&#9664;</button>
            <button @click="changePart('motor', true)" class="next-selector">&#9654;</button>
        </div>
        
        <div class="image-part rodafrente">
            <img class="rodafrente-images"
                 :src="rodaFrente[selectedRodaFrenteIndex].src" 
                 :alt="`rodaFrente ${rodaFrente[selectedRodaFrenteIndex].id}`">        
            <button @click="changePart('rodaFrente', false)" class="prev-selector">&#9664;</button>
            <button @click="changePart('rodaFrente', true)" class="next-selector">&#9654;</button>
        </div>
        
        <div class="image-part rodatras">
            <img class="rodatras-images"
                 :src="rodaTras[selectedRodaTrasIndex].src" 
                 :alt="`rodaTras ${rodaTras[selectedRodaTrasIndex].id}`">        
            <button @click="changePart('rodaTras', false)" class="prev-selector">&#9664;</button>
            <button @click="changePart('rodaTras', true)" class="next-selector">&#9654;</button>
        </div>
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





