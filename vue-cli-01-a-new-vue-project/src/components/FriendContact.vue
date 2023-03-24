<template>
  <li>
    <h2> {{ name }} {{ isFavorite ? '(Fav)' : '' }}</h2>
    <button @click="toggleFavorite">Make Favorite</button>
    <button @click="toggleDetails">Show Details</button>
    <ul v-if="this.detailAreVisible">
      <li>Phone: {{ phoneNumber }}</li>
      <li>Phone: {{ emailAddress }}</li>
    </ul>
  </li>
</template>

<script>
export default {
  props: {
    id: {
      type: String,
      required: true
    },
    name: {
      type: String,
      required: true
    },
    phoneNumber: {
      type: String,
      required: true
    },
    emailAddress: {
      type: String,
      required: true
    },
    isFavorite: {
      type: Boolean,
      required: false,
      default: false
    },
  },
  emits: {
    'toggle-favorite': function (id) {
      if (id) {
        return true;
      } else {
        console.warn('id is missing');
        return false;
      }
    }
  },
  data() {
    return {
      detailAreVisible: false,
    };
  },
  methods: {
    toggleDetails() {
      this.detailAreVisible = !this.detailAreVisible;
    },
    toggleFavorite() {
      this.$emit('toggle-favorite', this.id);
      this.friendFavorite = !this.friendFavorite;
    },
  }
};
</script>

