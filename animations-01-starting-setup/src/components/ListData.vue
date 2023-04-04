<template>
  <transition-group tag='ul' name='user-list'>
    <li v-for='user  in users' :key='user' @click='removeUser(user)'>{{ user }}</li>
  </transition-group>
  <div>
    <input type='text' v-model='newUser'>
    <button @click='addUser'> Add User</button>
  </div>
</template>
<script>
export default {
  data() {
    return {
      newUser: '',
      users: ['Max', 'Menu', 'Julie', 'Angela', 'Michael']
    };
  },
  methods: {
    addUser() {
      this.users.unshift(this.newUser);
      this.newUser = '';
    },
    removeUser(user) {
      this.users = this.users.filter(ele => ele !== user);
    }
  }
};
</script>

<style scoped>
ul {
  list-style: none;
  margin: 0;
  padding: 0;
}

li {
  margin-bottom: 1px;
  margin-top: 1px;
  border: 1px solid;
  padding: 1rem;
  text-align: center;
}

.user-list-enter-from {
  opacity: 0;
  transform: translateX(-30px);
}

.user-list-enter-to {
  opacity: 1;
  transform: translateX(0);
}

.user-list-enter-active {
  transition: all 1s ease-out;
}

.user-list-leave-from {
  opacity: 1;
  transform: translateX(0px);
}

.user-list-leave-to {
  opacity: 0;
  transform: translateX(30px);
}

.user-list-leave-active {
  transition: all 1s ease-out;
  position: absolute;
}

.user-list-move{
  transition: transform 0.4s ease;
}

</style>