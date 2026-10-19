<script setup>
import { ref } from 'vue'

const emit = defineEmits('update-total');

const counter = ref(0);

const incrementCounter =() => {
    counter.value++;
    emit('update-total', counter.value);
}
const decrementCounter =() => {
    counter.value--;
    emit('update-total', counter.value);
}
const refreshCounter = () => {
    counter.value = 0;
    emit('update-total', counter.value);
}
</script>

<template>
    <div>
        <button @click="incrementCounter">plus</button>
        <button @click="decrementCounter">moins</button>
        <button @click="refreshCounter">refresh</button>
        <p>Le compteur est de {{ counter }}</p> 
    </div>

    <!-- <button @click="count++">Ajouter</button>
    <button @click="count--">Soustraire</button>
    <button @click="count = 0">Réinitialiser</button>
    <p>Le compteur est de {{ count }}</p> -->
</template>