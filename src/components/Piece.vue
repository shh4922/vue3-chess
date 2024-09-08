<template>
  <div>
    <h1 @click="showPossiblePosition">{{ piece.icon }}</h1>
    <p>{{ piece.team }}</p>
  </div>
</template>

<style scoped></style>

<script>
import Piece from "../Pieces/Piece";
import { mapState, mapActions } from "vuex";
import Board from "../Objects/Board";
mapState;
mapActions;
Board;
export default {
  name: "Piece",
  props: {
    piece: {
      type: Piece,
      required: true,
    },
  },
  data() {
    return {};
  },
  computed: {
    board() {
      return this.$store.state.board;
    },
  },
  methods: {
    /**
     * 이동가능한 위치를 리턴후, 해당 위치를 board에서 깜빡이도록 설정하고싶음..
     * 어케함 이거??....ㅇㅅㅇ;
     */
    showPossiblePosition() {
      const possiblePosition = this.piece.getPossiblePosition(this.board);
      console.log(possiblePosition);
      this.$store.commit("setPossiblePosition", possiblePosition);
    },
  },
};
</script>
