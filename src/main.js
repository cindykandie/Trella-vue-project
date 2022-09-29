import { createApp } from 'vue';
// import { createPinia } from 'pinia';
import App from './App.vue'

const app=createApp(App)
// app.use(createPinia);


app.mount('#app')

























// data() {
  //   return {
  //     enteredText: "",
  //     invalidInput: false,
  //   };
  // },
  // methods: {
  //   addGoal() {
  //     this.invalidInput = false;
  //     if (this.enteredText === "") {
  //       this.invalidInput = true;
  //       return;
  //     }
  //     this.$emit("add-goal", this.enteredText);
  //     this.enteredText = '';
  //   },
  // },
  // watch: {
  //   invalidInput(val) {
  //     if (val) {
  //       console.log("Analytics: Invalid Input");
  //     }
  //   },
  // },

   // setup() {
  //   const goals = ref([]);

  //   const filteredGoals = computed(function() {
  //     return goals.value.filter(
  //       (goal) => !goal.text.includes("Angular") && !goal.text.includes("React")
  //     );
  //   });

  //   function addGoal(text) {
  //     const newGoal = {
  //       id: new Date().toISOString(),
  //       text: text,
  //     };
  //     goals.value.push(newGoal);
  //   }

  //   return {
  //     filteredGoals: filteredGoals,
  //     addGoal: addGoal
  //   };
  // }
  // data() {
  //   return {
  //     goals: [],
  //   };
  // },
  // computed: {
  //   filteredGoals() {
  //     return this.goals.filter(
  //       (goal) => !goal.text.includes("Angular") && !goal.text.includes("React")
  //     );
  //   },
  // },
  // methods: {
  //   addGoal(text) {
  //     const newGoal = {
  //       id: new Date().toISOString(),
  //       text: text,
  //     };
  //     this.goals.push(newGoal);
  //   },
  // },