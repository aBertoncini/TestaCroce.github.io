<template>
  <!-- <button class="button" @click="hello('param hello')">Pulsante prova button</button>
  {{ message }}
  {{ obj.message }} -->
  <div class="p-2 text">
    testo cambia colore
  </div>
  <div>
    <button
      class="btn"
      ref="btnClick"
      @click="addClick"
      @contextmenu.prevent="clicker"
    >
      <i class="bi bi-mouse"></i>
    </button>
    {{ clicks }}
  </div>
  <div class="p-2">
    <!-- Button trigger modal -->
    <button
      type="button"
      class="btn btn-primary"
      data-bs-toggle="modal"
      data-bs-target="#exampleModal"
    >
      Launch demo modal
    </button>

    <!-- Modal -->
    <div
      class="modal fade"
      id="exampleModal"
      tabindex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h1 class="modal-title fs-5" id="exampleModalLabel">Modal title</h1>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div class="modal-body">...</div>
          <div class="modal-footer">
            <button
              type="button"
              class="btn btn-secondary"
              data-bs-dismiss="modal"
            >
              Close
            </button>
            <button type="button" class="btn btn-primary">Save changes</button>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="p-2">
    <div class="btn-group" role="group" aria-label="Basic example">
      <button type="button" class="btn btn-primary" @click="hello">Left</button>
      <button type="button" class="btn btn-primary">Middle</button>
      <button type="button" class="btn btn-primary">Right</button>
    </div>
  </div>
</template>

<script setup>
/* const message = ref("no helo");
const obj = ref({}); */
const clicks = ref(0);
const color = ref("green");
/* const hello = (param) => {
  console.log("hello");
  message.value = "hello";
  obj.value.message = param;
}; */

const addClick = () => {
  clicks.value++;
  color.value = color.value === "green" ? "blue" : "green";
};

// alternativa a arrow function
function clicker() {
  clicks.value++;
}
</script>

<style scoped>
.text {
  color: v-bind(color);
}
</style>
