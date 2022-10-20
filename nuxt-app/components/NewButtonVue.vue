<template>
  <!-- <button class="button" @click="hello('param hello')">Pulsante prova button</button>
  {{ message }}
  {{ obj.message }} -->
  <div>
    <button ref="btnClick" @click="addClick" @contextmenu.prevent="clicker">
      Click
    </button>
    {{ clicks }}
  </div>
</template>

<script setup>
/* const message = ref("no helo");
const obj = ref({}); */
const clicks = ref(0);

/* const hello = (param) => {
  console.log("hello");
  message.value = "hello";
  obj.value.message = param;
}; */

const addClick = () => {
  clicks.value++;
};

function clicker() {
  clicks.value++;
}
</script>
