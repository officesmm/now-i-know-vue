<template>
  <form @submit.prevent>
    <div>
      <label>Name: </label>
      <input type="text" v-model=inputFriendName>
    </div>
    <div>
      <label>Phone:</label>
      <input type="text" v-model=inputFriendPhNumber>
    </div>
    <div>
      <label>Email: </label>
      <input type="text" v-model=inputFriendEmail>
    </div>
    <div>
      <button @click="addFriends">Add Friend</button>
    </div>
  </form>
</template>

<script>

export default {
  props: {
    id: {
      type: String,
      required: true
    },
  },

  data() {
    return {
      inputFriendName: '',
      inputFriendPhNumber: '',
      inputFriendEmail: ''
    };
  },
  methods: {
    addFriends() {
      this.$emit('add-friend', this.inputFriendName, this.inputFriendPhNumber, this.inputFriendEmail);
    },
  }
};
</script>