<template>
  <div :class="`box ${color}`">
    <Piece v-if="piece !== null" :piece="piece" @movePiece="movePiece" />
  </div>
</template>

<style scoped>
.box {
  width: 100px;
  height: 100px;
}
.black {
  background-color: black;
}
.white {
  background-color: white;
}
</style>

<script>
import Piece from "@/components/Piece.vue";

export default {
  props: {
    color: {
      type: String,
      required: true,
    },
    piece: {
      type: Piece,
      required: false,
    },
  },
  components: {
    Piece,
  },
  created() {},
  methods: {
    movePiece(prevPosition, newPosition) {
      this.$emit("movePiece", prevPosition, newPosition);
    },
  },
};
</script>
