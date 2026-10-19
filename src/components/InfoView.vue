<script setup>

const emit = defineEmits(['send-message']);

function envoyer() {
    emit('send-message', 'bonjour michel');
}

</script>

<template>
    <button @click="envoyer">Envoyer</button>
</template>

<style scoped>
button{
  position: relative;
  font-size: 1.5rem;
  text-transform: uppercase;
  color: black;
  padding: 10px 20px;
  background: rgb(209, 23, 23);
  border: 2px solid rgb(0, 0, 0);
  text-decoration: none;
  z-index: 1;
}

button::before{
  content:"";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;  
  height: 100%;
  background: rgb(255, 255, 255);
  z-index: -1;
  transform-origin: left;
  transition: transform 0.5s ease;
  transform: scaleX(1);
}

button:hover::before{
  transform-origin: right;
  transition: transform 0.5s ease;
  transform: scaleX(0);
}



</style>