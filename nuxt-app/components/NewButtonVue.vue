<template>
  <!-- <button class="button" @click="hello('param hello')">Pulsante prova button</button>
  {{ message }}
  {{ obj.message }} -->
  <div>
    <button class="btn" ref="btnClick" @click="addClick" @contextmenu.prevent="clicker">
      Click
      <i class="bi bi-vinyl-fill"></i>
    </button>
    {{ clicks }}
  </div>
  <div class="p-2">
      <!-- Button trigger modal -->
      <button
        type="button"
        class="btn"
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
              <h1 class="modal-title fs-5" id="exampleModalLabel">
                Modal title
              </h1>
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
              <button type="button" class="btn btn-primary">
                Save changes
              </button>
            </div>
          </div>
        </div>
      </div>
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
