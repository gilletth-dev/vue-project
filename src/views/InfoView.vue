<script setup>
import userData from '../data/user.js'
console.log(userData.prenom)
console.log("test")
</script>


<template>
    
    <p v-if="userData.prenom && userData.nom">
        Bonjour {{ userData.prenom }} {{ userData.nom }}
    </p>

    <h2>Connaissez-vous Michel ?</h2>
    <div class="choix">
        <RouterLink to="/michel">Oui</RouterLink>
        <RouterLink to="/">Non</RouterLink>
    </div>
</template>


<style scoped>

</style>