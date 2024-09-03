<template>
  <div class="board">
    <div v-for="(row, i) in blockList" :key="i" class="row">
      <Square
        v-for="(col, j) in row"
        :key="j"
        :color="(i + j) % 2 === 0 ? 'black' : 'white'"
        :piece="col"
      >
      </Square>
    </div>
  </div>
</template>

<style scoped>
.board {
  width: 800px;
  height: 800px;
  border: 1px solid gray;
}
.row {
  display: flex;
}
</style>

<script>
import Queen from "@/Pieces/Queen";
import Rook from "../../Pieces/Rook";
import King from "../../Pieces/King";
import Bishop from "../../Pieces/Bishop";
import Knight from "../../Pieces/Knight";
import Square from "@/components/Board/Square.vue";

export default {
  name: "Board",
  components: {
    Square,
  },
  data() {
    return {
      blockList: Array(8).fill(Array(8).fill(null)),

      whiteQueen: null,
      whiteRook1: null,
      whiteRook2: null,
      whiteKnigt1: null,
      whiteKnigt2: null,
      whiteBishop1: null,
      whiteBishop2: null,
      whiteKing: null,

      blackRook1: null,
      blackRook2: null,
      blackKnigt1: null,
      blackKnigt2: null,
      blackBishop1: null,
      blackBishop2: null,
      blackKing: null,
      blackQueen: null,
    };
  },
  created() {
    this.initBlackData();
    this.initWhiteData();
  },
  methods: {
    initBlackData() {
      this.blackQueen = new Queen("black", { x: 1, y: 1 });
      this.blackRook1 = new Rook("black", { x: 1, y: 1 });
      this.blackRook1 = new Rook("black", { x: 1, y: 1 });
      this.blackKnigt2 = new Knight("black", { x: 1, y: 1 });
      this.blackKnigt2 = new Knight("black", { x: 1, y: 1 });
      this.blackBishop1 = new Bishop("black", { x: 1, y: 1 });
      this.blackBishop1 = new Bishop("black", { x: 1, y: 1 });
      this.blackKing = new King("black", { x: 1, y: 1 });

      const blackAry = [
        new Queen("Queen", "black", { x: 1, y: 1 }),
        new Rook("Rook", "black", { x: 1, y: 1 }),
        new Rook("Rook", "black", { x: 1, y: 1 }),
        new Knight("black", "black", { x: 1, y: 1 }),
        new Knight("black", "black", { x: 1, y: 1 }),
        new Bishop("black", "black", { x: 1, y: 1 }),
        new Bishop("black", "black", { x: 1, y: 1 }),
        new King("black", "black", { x: 1, y: 1 }),
      ];

      this.blockList[0] = blackAry;
    },

    initWhiteData() {
      const whiteList = [
        new Queen("Queen", "white", { x: 1, y: 1 }),
        new Rook("Rook", "white", { x: 1, y: 1 }),
        new Rook("Rook", "white", { x: 1, y: 1 }),
        new Knight("white", "white", { x: 1, y: 1 }),
        new Knight("white", "white", { x: 1, y: 1 }),
        new Bishop("white", "white", { x: 1, y: 1 }),
        new Bishop("white", "white", { x: 1, y: 1 }),
        new King("white", "white", { x: 1, y: 1 }),
      ];
      this.blockList[7] = whiteList;
    },
  },
};
</script>
