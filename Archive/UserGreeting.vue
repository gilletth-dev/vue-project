<script setup>
defineProps({
    username: {
        type: String,
        required: true
    }
})
</script>

<template>
    Bonjour, {{ username }}
</template>

<style scoped>
</style>
