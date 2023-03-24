<template>
  <section>
    <base-card>
      <h2>Submitted Experiences</h2>
      <div>
        <base-button @click='loadExperiences'>Load Submitted Experiences</base-button>
      </div>
      <p v-if='isLoading'>Loading ... </p>
      <p v-else-if='!isLoading && theError'> {{ theError }}</p>
      <p v-else-if='!isLoading && (!results || results.length == 0)'>No data to show ... </p>
      <ul v-else-if='!isLoading && results && results.length > 0 && theError == null'>
        <survey-result
          v-for='result in results'
          :key='result.id'
          :name='result.name'
          :rating='result.rating'
        ></survey-result>
      </ul>
    </base-card>
  </section>
</template>

<script>
import SurveyResult from './SurveyResult.vue';

export default {
  components: {
    SurveyResult
  },
  data() {
    return {
      results: [],
      isLoading: false,
      theError: null
    };
  },
  methods: {
    loadExperiences() {
      const that = this;
      that.isLoading = true;
      that.theError = null;
      fetch('https://vue-http-fad5d-default-rtdb.asia-southeast1.firebasedatabase.app/surveys.json').then((res) => {
        if (res.ok) {
          return res.json();
        }
      }).then((data) => {
        const results = [];
        for (const id in data) {
          results.push({ id: id, name: data[id].name, rating: data[id].rating });
        }
        that.results = results;
        that.isLoading = false;
      }).catch((e) => {
        console.log(e);
        that.isLoading = false;
        that.theError = 'failed to fetch data - try again or connect developer';
      });
    }
  },
  mounted() {
    this.loadExperiences();
  }

};

</script>

<style scoped>
ul {
  list-style: none;
  margin: 0;
  padding: 0;
}
</style>