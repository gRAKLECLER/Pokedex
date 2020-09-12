<template>
  <div>
    <h1>The Pokemons</h1>
    <BaseCard/>
    <button @click="refresh">new Pokemons</button>
  </div>
</template>

<script>
import BaseCard from '@/components/BaseCard.vue';

export default {
  components: {
    BaseCard,
  },
  methods: {
    refresh() {
      window.location.reload(true);
    },
  },
};
</script>

<style>

button {
  padding: 1rem;
  border: 0;
  background-color: rgb(36, 90, 90);
  color: white;
  border-radius: 5px;
}

</style>
