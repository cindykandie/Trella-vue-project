<template>
  <section class="container">
    <form @submit.prevent="addGoal">
      <div>
        <label for="goaltext">Task</label>
        <input type="text" id="goaltext" v-model="enteredText" autocomplete="off" />
      </div>
      <p v-if="invalidInput" style="color: red">Please enter a valid task text (non-empty)!</p>
      <button>Add Task</button>
    </form>
  </section>
</template>

<script>
import { ref, watch } from "vue";

export default {
  emits: ["add-goal"],
  setup(_, context) {
    const enteredText = ref("");
    const invalidInput = ref(false);

    watch(invalidInput, function (val) {
      if (val) {
        console.log("Analytics: Invalid Input");
      }
    });

    function addGoal() {
      invalidInput.value = false;
      if (enteredText.value === "") {
        invalidInput.value = true;
        return;
      }
      context.emit("add-goal", enteredText.value);
      enteredText.value = "";
    }

    return {
      enteredText: enteredText,
      invalidInput: invalidInput,
      addGoal,
    };
  },
  
};
</script>

<style scoped>
form {
  text-align: center;
}

label {
  display: block;
  font-weight: bold;
  margin-bottom: 0.5rem;
}

input {
  font: inherit;
  display: block;
  width: 100%;
  margin-bottom: 0.5rem;
  border-radius: 5px;

}
button{
  background: purple;
  border-radius: 5px;


}
button:hover{
  border-radius: 5px;
  background: rgb(230, 30, 230);
}
</style>