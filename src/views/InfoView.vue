<script setup>
import userData from '../data/user.json'

const donneesUtilisateur = userData
</script>


<template>

    <p v-if="donneesUtilisateur.prenom && donneesUtilisateur.nom">
        Bonjour {{ donneesUtilisateur.prenom }} {{ donneesUtilisateur.nom }}
    </p>

    <h2>Connaissez-vous Michel ?</h2>
    <div class="choix">
        <RouterLink to="/michel">Oui</RouterLink>
        <RouterLink to="/">Non</RouterLink>
    </div>
</template>


<style scoped>

</style>