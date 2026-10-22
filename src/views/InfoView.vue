<script setup>
import userData from '../data/user.js'
console.log(userData.prenom)
console.log("test")
</script>


<template>

    <RouterLink to="/" class="logo">
        Michel FOREVER
    </RouterLink>

    <p v-if="userData.prenom && userData.nom">
        Bonjour, {{ userData.prenom }} {{ userData.nom }}
    </p>

    <h2>Connaissez-vous Michel ?</h2>
    <div class="choix">
        <RouterLink to="/michel">Oui</RouterLink>
        <RouterLink disabled>Non</RouterLink>
    </div>
</template>


<style scoped>
.logo {
  position: absolute;
  top: 20px;
  left: 25px;
  font-family: "Lora", serif;
  font-size: 16px;
  font-weight: bold;
  color: #0077b6;
  text-decoration: none;
}

h2 {
  font-family: "Hind Madurai", sans-serif;
  font-weight: 600;
  font-style: normal;
  font-size: 30px;
  padding: 0px 0px 20px 0px;
  color: #ebeff1;
}

p{
  font-family: "Hind Madurai", sans-serif;
  font-weight: 300;
  font-style: normal;
  color: #ebeff1;
}
</style>