const app = Vue.createApp({
  data() {
    return { 
      enteredGoalValue: '',
      goals: [
      "memory",
      "cpu",
      "hard disk"
      ] };
  },
  methods:{
    addGoal(){
      this.goals.push(this.enteredGoalValue);
    },
    removeGoal(index){
      this.goals.splice(index,1);
    }
  }
});

app.mount('#user-goals');
