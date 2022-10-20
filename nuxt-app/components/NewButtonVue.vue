<template>
  <button class="button" @click="hello">Pulsante prova button</button>
  {{ message }}
</template>

<script setup>
const message = ref("no helo");

const hello = () => {
  console.log('hello')
  message.value = 'hello'
};
</script>
