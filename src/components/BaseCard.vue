<template>
  <div class="MainCards">
    <div class="Cards">
      <div class="Cards__poke">
        <h2>{{ pokemons }}</h2>
        <img class="Cards__img" :src='img.front_default' :alt="pokemons">
      </div>
      <div class="Cards__values">
        <div class="Cards__value">
          <p>{{ weight }} weight</p>
          <p>{{ height }} height</p>
          <span class="Cards__type" v-for="(type, i) in types" :key="i">{{ type.type.name }}</span>
        </div>
        <div class="Cards__abilities" v-for="(ability, i) in abilities" :key="i">
          <p class="Cards__ability">{{ ability.ability.name }}</p>
        </div>
      </div>
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
    img: '',
    abilities: {},
  }),
  created() {
    getPokemon()
      .then((data) => {
        this.pokemons = data.name;
        this.weight = data.weight;
        this.height = data.height;
        this.types = data.types;
        this.img = data.sprites;
        this.abilities = data.abilities;
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
    display: flex;
    justify-content: space-evenly;
    padding: 1rem;
    width: 70%;
    height: 50%;
    background-color: rgb(119, 35, 35);
    color: rgb(255, 255, 255);
    margin-left: 10px;
    margin-bottom: 10px;
    border-radius: 10px;
  }

  .Cards__values{
    width: 60%;
  }

  .Cards__value{
    display: flex;
    justify-content: space-evenly;
  }

  .Cards__abilities{
    height: 40%;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .Cards__ability{
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: lightslategrey;
    width: 300px;
    height: 80px;
  }

  .Cards__img{
    width: 200px;
  }

  .Cards__type{
    width: 60px;
    background-color: lightslategrey;
    padding: .7rem;
    border-radius: 5px;
  }
</style>
