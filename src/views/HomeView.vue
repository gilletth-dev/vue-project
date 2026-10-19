<script setup>
  import { ref } from 'vue'
  import userData from '../data/user.js'

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
  
</script>
<template>
  <div class="formulaire">
    <h2>Informations utilisateur</h2>

    <div class="info">
      <label for="info__prénom">Prénom :</label>
      <input id="info__prénom" v-model="prenom" type="text" placeholder="Écris ton prénom" />
    </div>

    <div class="info">
      <label for="info__nom">Nom :</label>
      <input id="nom" v-model="nom" type="text" placeholder="Écris ton nom" />
    </div>

    <div v-if="nom && prenom">
      {{ nom }} {{ prenom }}
      <RouterLink to="/info" @click="envoyer">S'enregistrer</RouterLink>
    </div>
  </div>

</template>


<style scoped>
.formulaire {
  max-width: 400px;
  margin: 50px auto;
  text-align: center;
}

.info {
  margin-bottom: 20px;
}

label {
  display: block;
  margin-bottom: 5px;
}

input {
  padding: 6px 10px;
  width: 80%;
}

button {
  padding: 6px 16px;
  cursor: pointer;
}
</style>