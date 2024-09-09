import Board from '@/Objects/Board';
import GameManager from '@/Objects/GameManager';
import { createStore } from 'vuex';

interface State {
    board: Board | null;
    gameManager: GameManager | null
    possiblePosition: Position[]
}

// Vuex 스토어 생성
const store = createStore<State>({
    state() {
        return {
            board: null, // Board 타입을 명시적으로 지정
            possiblePosition: [],
            gameManager: null
        };
    },
    getters: {
        getBoard(state) {
            return state.board;
        },
    },
    actions: {
        initBoard({ commit }, board: Board) {
            commit('setBoard', board);
        },

        initGameManager({ commit }, gameManager: GameManager) {
            commit('setGameManager', gameManager)
        }
    },
    mutations: {
        setBoard(state, board: Board) {
            state.board = board; // Board 객체를 상태로 설정
        },
        setGameManager(state, gameManager: GameManager) {
            state.gameManager = gameManager
        },
        setPossiblePosition(state, position: Position[]) {
            state.possiblePosition = position
        },
    },
});

export default store;