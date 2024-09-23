import Board from "@/Objects/Board";
import Piece from "./Piece"

class Knight extends Piece {
    icon: string

    private possiblePosition = [
        { x: 2, y: 1 }, { x: 2, y: -1 },  // 두칸 오른쪽 + 위아래
        { x: -2, y: 1 }, { x: -2, y: -1 }, // 두칸 왼쪽 + 위아래
        { x: 1, y: 2 }, { x: -1, y: 2 },  // 두칸 위 + 양쪽
        { x: 1, y: -2 }, { x: -1, y: -2 } // 두칸 아래 + 양쪽
    ];

    constructor(team: string, position: Position) {
        super(team, position)
        this.icon = team === 'black' ? '♞' : '♘'
    }

    /**
     * 이동가능한 포시션을 리턴
     * @param board 현재 보드의 상태
     * @returns 이동가능한 포지션을 배열에담아서 리턴함.
     */
    getPossiblePosition(board: Board): Position[] {
        const positions: Position[] = []
        const { x, y } = this.position;

        for (const move of this.possiblePosition) {
            const destination: Position = {
                x: x + move.x,
                y: y + move.y
            }

            if (this.isOutOfRange(destination.x, destination.y)) { continue }


            const newPosition = board.getPossiblePosition(destination, this.team)
            if (newPosition != null) {
                positions.push(newPosition)
            }
        }

        return positions
    }

}
export default Knight