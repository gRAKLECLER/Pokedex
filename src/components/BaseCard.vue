<template>
  <div class="MainCards">
    <div class="Cards">
      <p>{{ pokemons }}</p>
      <p>{{ weight }} weight</p>
      <p>{{ height }} height</p>
      <p>Types :</p>
      <span v-for="(type, i) in types" :key="i"> | {{ type.type.name }} | </span>
    </div>
  </div>
</template>

<script>
import { getPokemon } from '@/api.js';

export default {
  name: 'Card',
  data: () => ({
    pokemons: '',
    weight: '',
    height: '',
    types: {},
  }),
  created() {
    getPokemon()
      .then((data) => {
        this.pokemons = data.name;
        this.weight = data.weight;
        this.height = data.height;
        this.types = data.types;
        console.log(data);
      });
  },
};
</script>

<style>
  .MainCards{
    width: 100vw;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }

  .Cards{
    padding: 1rem;
    width: 300px;
    background-color: rgb(119, 35, 35);
    color: rgb(255, 255, 255);
    margin-left: 10px;
    margin-bottom: 10px;
    border-radius: 10px;
  }
</style>
