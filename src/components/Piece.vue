<template>
  <div>
    <h1 @click="showPossiblePosition">{{ piece.icon }}</h1>
    <p>{{ piece.team }}</p>
  </div>
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
    showPossiblePosition() {
      console.log(this.piece.getPossiblePosition());
    },

    // goToMove() {
    //   const newPositionPiece = {
    //     ...this.piece,
    //     position: {
    //       x: 5,
    //       y: 4,
    //     },
    //   };
    //   this.$emit("movePiece", this.piece.position, newPositionPiece);
    // },
  },
};
</script>
