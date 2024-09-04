import Piece from "./Piece"
class King extends Piece {
    icon: string

    constructor(team: string, position: Position) {
        super(team, position)
        this.icon = team === 'black' ? '♚' : '♔'
    }

    move(): void {
        this.position = { x: 10, y: 29 }
        console.log(this)
    }

    getPossiblePosition(): Position[] {
        const positions: Position[] = [];
        const { x, y } = this.position;

        const moves = [
            { x: 1, y: 0 }, { x: -1, y: 0 }, // 좌우
            { x: 0, y: 1 }, { x: 0, y: -1 }, // 상하
            { x: 1, y: 1 }, { x: 1, y: -1 }, // 대각선
            { x: -1, y: 1 }, { x: -1, y: -1 } // 대각선
        ];

        for (const move of moves) {
            const newX = x + move.x
            const newY = y + move.y

            if (newX >= 0 && newX < 8 && newY >= 0 && newY < 8) {
                positions.push({ x: newX, y: newY });
            }
        }

        return positions
    }


}
export default King