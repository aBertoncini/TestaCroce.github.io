<template>
  <button class="button" @click="hello">Pulsante prova button</button>
  {{ message }}
</template>

<script>
export default {
  data() {
    return {
      message: "",
    };
  },
  methods: {
    hello() {
      this.message = "hello";
    },
  },
};
</script>
