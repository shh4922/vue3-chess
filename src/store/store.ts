import Board from '@/Objects/Board';
import { createStore } from 'vuex';


interface State {
    board: Board | null;
}

// Vuex 스토어 생성
const store = createStore<State>({
    state() {
        return {
            board: null, // Board 타입을 명시적으로 지정
        };
    },
    getters: {
        getBoard(state) {
            return state.board;
        },
    },
    actions: {
        initializeBoard({ commit }, board: Board) {
            commit('setBoard', board);
        },
    },
    mutations: {
        setBoard(state, board: Board) {
            state.board = board; // Board 객체를 상태로 설정
        },
    },
});

export default store;