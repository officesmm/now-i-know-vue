const app = Vue.createApp({
  data() {
    return {
      name: '',
      counter: 0,
      items: ['a', 'b', 'c'],
      info: null,
      confirmedName: ''
    };
  },
  methods: {
    confirmedInput(){
      this.confirmedName = this.name;
    },
    resetData(){
      this.name= '';
    },
    submitForm(event){
      console.log("hehehehe");
    },
    setName(event, lastname){
      this.name = event.target.value + ' ' + lastname;
    },
    add(){
      this.counter++;
    },
    newItem(){
      this.items.push('d');
    },
  },
  computed:{
    fullname(){
      if(this.name === ''){
        return '';
      }
      return this.name + " Last Name";
    },
  }

});

app.mount('#events');
