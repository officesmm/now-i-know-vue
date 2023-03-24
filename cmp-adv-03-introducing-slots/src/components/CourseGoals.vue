<template>
  <ul>
    <li v-for="goal in goals" :key="goal">
      <slot v-bind:item="goal" another-prop="data here"></slot>
    </li>
  </ul>
</template>

<script>
export default {
  data() {
    return {
      goals: ['finish the course', 'learn Vue']
    };
  }
}
</script>