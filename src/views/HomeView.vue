<script setup>
  import { ref } from 'vue'
  import userData from '../data/user.js'
  import ParticleBackground from './ParticleBackground.vue'

  const prenom = ref('')
  const nom = ref('')

  const emit = defineEmits(['send-message'])

  function envoyer() {
    const informations = {
      prenom: prenom.value,
      nom: nom.value
    }
    userData.prenom = informations.prenom
    userData.nom = informations.nom
    emit('send-message', informations)
  }


  const rand = ( max = 1, min = 0, round = false ) => {
  const n = Math.random() * ( max - min ) + min;
  return round ? Math.round( n ) : n;
};

  
</script>
<template>
  
  <div class="background">
    <ParticleBackground />
  </div>
    
  <RouterLink to="/" class="logo">
    Michel FOREVER
  </RouterLink>

  <div class="header">
    <h1>Bienvenue sur notre site</h1>
    <p>Un site web pour les passionnés de musique.</p>
  </div>

  <div class="page">
    <div class="formulaire">
      <h2>Remplisser les informations</h2>
      <div class="center">
        <div class="info">
          <label for="info__prénom">Prénom *</label>
          <input id="info__prénom" v-model="prenom" type="text" placeholder="Écris ton prénom" autocomplete="off"  />
        </div>

        <div class="info">
          <label for="info__nom">Nom *</label>
          <input id="nom" v-model="nom" type="text" placeholder="Écris ton nom" autocomplete="off" />
        </div>
      </div>
      <div v-if="nom && prenom" class="nom-prenom">
        {{ nom }} {{ prenom }} :
        <RouterLink to="/info" @click="envoyer">S'enregistrer</RouterLink>
      </div>
    </div>
  
  </div>
  
  
</template>


<style scoped>
.background {
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  opacity: 0.5;
  z-index: -1;
}


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

h1{
  font-family: "Hind Madurai", sans-serif;
  font-weight: 600;
  font-style: normal;
  padding: 0px 0px 20px 0px;
  color: #ebeff1;
  font-size: 40px;
}

p{
  font-family: "Hind Madurai", sans-serif;
  font-weight: 300;
  font-style: normal;
  padding: 0px 0px 50px 0px;
  color: #ebeff1;
  font-size: 16px;
}

.page{
  display: flex;
  justify-content: center;
  
}

.formulaire {
  background-color: #1E263B;
  filter: drop-shadow(3px 4px 94px rgba(0,119,182, 0.7));
  padding: 50px;
  max-width: 400px;
  margin: 0px auto;
  border-radius: 20px;
}

h2 {
  font-family: "Lora", serif;
  font-optical-sizing: auto;
  font-style: normal;
  font-size: 22px;
  margin-bottom: 20px;
  color: #ebeff1;
}

.info {
  margin-bottom: 20px;
}



label {
  font-family: "Hind Madurai", sans-serif;
  font-weight: 300;
  font-style: normal;
  display: block;
  margin-top: 10px;
  margin-bottom: 5px;
  opacity: 0.6;
  color: #ebeff1;
}

input {
  font-family: "Hind Madurai", sans-serif;
  padding: 6px 10px;
  width: 80%;
  background-color: black;
  color: #ebeff1;
  border: 2px solid rgba(0,119,182, 0.7);
  outline: none;
}

.nom-prenom{
  font-family: "Lora", serif;
  font-optical-sizing: auto;
  font-style: normal;
  color: #ebeff1;
}


@media (min-width: 768px) {
  .formulaire {
    max-width: 800px;
    padding : 80px;
  }

  h2{
    font-size: 30px;
    margin-bottom: 30px;
  }

  p{
  font-size: 20px;
  }


  label{
    font-size: 20px;
  }

  input{
    font-size: 16px;
  }
}



</style>