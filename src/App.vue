<template>
  <board />
</template>

<script lang="ts">
import Board from "@/components/Board/Board.vue";
export default {
  name: "App",
  components: {
    Board,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  display: flex;
  justify-content: center;
  align-content: center;
}
</style>
