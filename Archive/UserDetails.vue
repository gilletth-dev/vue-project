<script setup>
defineProps({
    username: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        required: true
    },
    mail: {
        type: String,
        required: true
    }
})
</script>

<template>
    <div>
        <ul>
            <li>{{ username }}</li>
            <li>{{ name }}</li>
            <li>{{ mail }}</li>
            <li>{{ age }}</li>
        </ul>
    </div>
</template>

<style scoped>
</style>
