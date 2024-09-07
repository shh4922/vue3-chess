import Bishop from "@/Pieces/Bishop";
import King from "@/Pieces/King";
import Knight from "@/Pieces/Knight";
import Pawn from "@/Pieces/Pawn";
import Piece from "@/Pieces/Piece";
import Queen from "@/Pieces/Queen";
import Rook from "@/Pieces/Rook";

class Board {
    blockList: Array<Array<Piece | null>>;

    constructor() {
        this.blockList = Array(8).fill(null).map(() => Array(8).fill(null));
        const blackAry = [
            new Rook("black", { x: 0, y: 0 }),
            new Knight("black", { x: 1, y: 0 }),
            new Queen("black", { x: 2, y: 0 }),
            new Bishop("black", { x: 3, y: 0 }),
            new King("black", { x: 4, y: 0 }),
            new Bishop("black", { x: 5, y: 0 }),
            new Knight("black", { x: 6, y: 0 }),
            new Rook("black", { x: 7, y: 0 }),
        ];
        const blackPawnList = [
            new Pawn("black", { x: 0, y: 1 }),
            new Pawn("black", { x: 1, y: 1 }),
            new Pawn("black", { x: 2, y: 1 }),
            new Pawn("black", { x: 3, y: 1 }),
            new Pawn("black", { x: 4, y: 1 }),
            new Pawn("black", { x: 5, y: 1 }),
            new Pawn("black", { x: 6, y: 1 }),
            new Pawn("black", { x: 7, y: 1 }),
        ];
        const whiteList = [
            new Rook("white", { x: 0, y: 7 }),
            new Knight("white", { x: 1, y: 7 }),
            new Bishop("white", { x: 2, y: 7 }),
            new King("white", { x: 3, y: 7 }),
            new Queen("white", { x: 4, y: 7 }),
            new Bishop("white", { x: 5, y: 7 }),
            new Knight("white", { x: 6, y: 7 }),
            new Rook("white", { x: 7, y: 7 }),
        ];
        const whitePawnList = [
            new Pawn("white", { x: 1, y: 6 }),
            new Pawn("white", { x: 1, y: 6 }),
            new Pawn("white", { x: 2, y: 6 }),
            new Pawn("white", { x: 3, y: 6 }),
            new Pawn("white", { x: 4, y: 6 }),
            new Pawn("white", { x: 5, y: 6 }),
            new Pawn("white", { x: 6, y: 6 }),
            new Pawn("white", { x: 7, y: 6 }),
        ];

        this.blockList[0] = blackAry;
        this.blockList[1] = blackPawnList;
        this.blockList[6] = whitePawnList;
        this.blockList[7] = whiteList;
    }

    /**
     * 왜 만든건지 모르겠음
     * @param piece 
     * @param newPosition 
     */
    movePiece(piece: Piece, newPosition: Position) {
        const { x: oldX, y: oldY } = piece.position;
        const { x: newX, y: newY } = newPosition;

        // 기존 위치를 비움
        this.blockList[oldY][oldX] = null;

        // 새 위치로 이동
        this.blockList[newY][newX] = piece;
        piece.position = newPosition;
    }


    /**
     * 선택한 기물의 이동가능위치를 받아 보드의 상태를 확인하고 최종적으로 이동이 가능한지 여부를 판단하여 줌.
     * 차후에 팀이 다를시에 이동뿐 아니라, 공격기능으로 바꿔서 해당위치의 기물을 없애줘야함. -> 그냥 바꿔주면 되긴함. 로직은 같을듯. 
     * 단, 폰의 경우 이동위치와 공격위치가 다름. 이것을 인지해야함.
     * @param position 선택한 기물의 이동가능 위치
     * @param team 선택한 기물의 팀
     * @returns 
     */
    getPossiblePosition(position: Position, team: String): Position | null {
        const { x, y } = position
        if (this.blockList[y][x] === null || this.blockList[y][x]?.team !== team) {
            return position
        }
        return null
    }
}

export default Board