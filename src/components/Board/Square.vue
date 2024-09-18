<template>
  <div :class="`box ${color}`" @click="moveToPiece">
    <Piece v-if="piece !== null" :piece="piece" />
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
    position: {
      required: true,
    },
    piece: {
      type: Piece,
      required: false,
    },
  },
  computed: {
    gameManager() {
      return this.$store.state.gameManager;
    },
  },
  components: {
    Piece,
  },
  created() {},
  methods: {
    moveToPiece() {
      if (this.gameManager.isClicked) {
        // console.log("moveToPiece");
        this.gameManager.movePiece(this.position);
      }
    },
  },
};
</script>
