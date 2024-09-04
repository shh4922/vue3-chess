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
        // 8x8 체스판을 null로 초기화
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

    movePiece(piece: Piece, newPosition: Position) {
        const { x: oldX, y: oldY } = piece.position;
        const { x: newX, y: newY } = newPosition;

        // 기존 위치를 비움
        this.blockList[oldY][oldX] = null;

        // 새 위치로 이동
        this.blockList[newY][newX] = piece;
        piece.position = newPosition;
    }

}

export default Board