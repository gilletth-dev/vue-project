<script setup>

const emit = defineEmits(['send-message']);

function envoyer() {
    emit('send-message', 'bonjour michel');
}

</script>

<template>
    <button @click="envoyer">Envoyer</button>
</template>