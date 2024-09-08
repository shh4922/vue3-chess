import Board from "@/Objects/Board";
import Piece from "./Piece"
class Rook extends Piece {

    icon: string
    private possiblePosition = [
        { x: 1, y: 0 }, { x: -1, y: 0 }, // 좌우
        { x: 0, y: 1 }, { x: 0, y: -1 }  // 상하
    ];

    constructor(team: string, position: Position) {
        super(team, position)
        this.icon = team === 'black' ? '♜' : '♖'
    }

    // getPossiblePosition(board: Board): Position[] {
    //     const positions: Position[] = []
    //     const { x, y } = this.position;

    //     for (const move of this.possiblePosition) {
    //         let newX = x
    //         let newY = y

    //         // 앞으로 무한정 갈수있으니깐
    //         while (true) {
    //             newX += move.x
    //             newY += move.y
    //             if (this.isOutOfRange(newX, newY)) { break }

    //             const newPosition = board.getPossiblePosition({ x: newX, y: newY }, this.team);
    //             if (newPosition === null) { break }
    //             positions.push(newPosition)

    //             // 상대기물이 있으면 break
    //             if (board.blockList[newY][newX] !== null && board.blockList[newY][newX]?.team !== this.team) { break }
    //         }
    //     }

    //     return positions
    // }




}
export default Rook