const app = Vue.createApp({
    data(){
        return{
            username:''
        };
    },
    methods:{
        Action(){
            console.dir(this.$refs.username);
        }
    }
});
app.mount('#app');