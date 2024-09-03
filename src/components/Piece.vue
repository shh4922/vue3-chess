<template>
  <h1 @click="goToMove">{{ piece.icon }}</h1>
</template>

<style scoped></style>

<script>
import Piece from "../Pieces/Piece";
export default {
  name: "Piece",
  props: {
    piece: {
      type: Piece,
      required: true,
    },
  },
  created() {},
  methods: {
    goToMove() {
      console.log(this.piece.move());
      console.log(`im ${this.piece.name} ${this.piece.team}`);
    },
  },
};
</script>
