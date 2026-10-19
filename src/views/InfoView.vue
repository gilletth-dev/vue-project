<script setup>
import {ref} from 'vue'
import HomeView from './HomeView.vue'

const message = ref('')

function recevoir(texte){
    message.value = texte
}

</script>


<template>

    <MessageButton @send-message="recevoir" />
    <p>{{ message }}</p>

    <h2>Connaissez-vous Michel ?</h2>
    <div class="choix">
        <RouterLink to="/michel">Oui</RouterLink>
        <RouterLink to="/">Non</RouterLink>
    </div>
</template>


<style scoped>

</style>