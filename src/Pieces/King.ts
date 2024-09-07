import Piece from "./Piece"
import Board from "@/Objects/Board"

class King extends Piece {
    icon: string
    private possiblePosition = [
        { x: 1, y: 0 }, { x: -1, y: 0 }, // 좌우
        { x: 0, y: 1 }, { x: 0, y: -1 }, // 상하
        { x: 1, y: 1 }, { x: 1, y: -1 }, // 대각선
        { x: -1, y: 1 }, { x: -1, y: -1 } // 대각선
    ]


    constructor(team: string, position: Position) {
        super(team, position)
        this.icon = team === 'black' ? '♚' : '♔'
    }


    move(): void {

    }

    /**
     * 현재보드의 상태와, 기물의 이동가능 위치를 비교하여 이동가능한 위치를 리턴
     * @param board 현재보드상태
     * @returns 이동가능한 위치
     */
    getPossiblePosition(board: Board): Position[] {
        const positions: Position[] = []
        const { x, y } = this.position;



        for (const move of this.possiblePosition) {
            const isPossiblePosition: Position = {
                x: x + move.x,
                y: y + move.y
            }

            if (isPossiblePosition.x < 0 || isPossiblePosition.x >= 8 || isPossiblePosition.y < 0 || isPossiblePosition.y >= 8) {
                break
            }

            const newPosition = board.getPossiblePosition(isPossiblePosition, this.team)

            if (newPosition != null) {
                positions.push(newPosition)
            }
        }

        return positions
    }




}
export default King