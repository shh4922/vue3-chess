import Board from "@/Objects/Board"
import Piece from "./Piece"

class Pawn extends Piece {
    icon: string
    // 폰은 처음엔 두칸, 그뒤로는 한칸 움직일수있음
    isMoved: boolean

    constructor(team: string, position: Position) {
        super(team, position)
        this.icon = team === 'black' ? '♟' : '♙'
        this.isMoved = false
    }

    // 테스트용 더미,
    private possiblePosition = this.team === "white" ?
        [
            { x: 0, y: -1 } // 일반 이동 (한칸 앞으로 이동)
        ] :
        [
            { x: 0, y: 1 }  // 일반 이동 (한칸 앞으로 이동)
        ];

    getPossiblePosition(board: Board): Position[] {
        const positions: Position[] = []
        const { x, y } = this.position;
        const direction = this.team === 'white' ? -1 : 1

        // 처음 움직일때
        if (!this.isMoved) {
            const firstMove = { x: x, y: y + (2 * direction) }
            const possiblePosition = board.getPossiblePosition(firstMove, this.team)

            if (possiblePosition !== null) {
                positions.push(possiblePosition)
                this.isMoved = false
            }

            return positions
        }


        return positions
    }


}
export default Pawn