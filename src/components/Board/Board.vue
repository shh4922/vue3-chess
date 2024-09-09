<template>
  <div class="board">
    <div v-for="(row, i) in board.blockList" :key="i" class="row">
      <Square
        v-for="(col, j) in row"
        :key="j"
        :color="(i + j) % 2 === 0 ? 'black' : 'white'"
        :piece="col"
        :class="{ highlighted: isHighlighted(i, j) }"
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
.highlighted {
  background-color: yellow; /* 깜빡이는 효과를 위해 강조 */
  animation: blink 1s infinite;
}
</style>

<script>
import Square from "@/components/Board/Square.vue";
import Board from "../../Objects/Board";
import GameManager from "@/Objects/GameManager";
import { mapState, mapActions } from "vuex";
mapActions;
mapState;
/**
 * 보드의 상태또한 관리할 수 있도록 만들어야함.
 * 보드를 오브젝트로 만들고, 해당위치에 각각 기물을 넣어두고, 그 보드를 반환하여 보여주도록 함.
 * 넘겨받은 보드 상태를 확인하고, 움직일시, 해당보드 오브젝트를 수정하면, Board컴포넌트는 자동으로 반영되게 됌.
 */

export default {
  name: "Board",
  components: {
    Square,
  },
  computed: {
    possiblePosition() {
      return this.$store.state.possiblePosition;
    },
  },
  data() {
    return {
      board: null,
      gameManager: null,
    };
  },
  created() {
    this.initGameManager();
    this.initBoard();
  },
  methods: {
    // 해당 좌표가 하이라이트할 위치에 있는지 확인
    isHighlighted(row, col) {
      return this.possiblePosition.some(
        (pos) => pos.x === col && pos.y === row
      );
    },

    initBoard() {
      this.board = new Board();
      this.$store.commit("setBoard", this.board);
    },

    initGameManager() {
      this.gameManager = new GameManager();

      // this.$store.commit("setGameManager", this.gameManager);
    },
  },
};
</script>
