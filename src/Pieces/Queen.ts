import Piece from "./Piece"
class Queen extends Piece {

    icon: string

    constructor(team: string, position: Position) {
        super(team, position)
        this.icon = team === 'black' ? '♛' : '♕'
    }
    private possiblePosition = [
        { x: 1, y: 0 }, { x: -1, y: 0 }, // 좌우
        { x: 0, y: 1 }, { x: 0, y: -1 }, // 상하
        { x: 1, y: 1 }, { x: -1, y: -1 }, // 대각선
        { x: 1, y: -1 }, { x: -1, y: 1 }  // 대각선
    ];


    // 퀸의경우, Rook&Bishop의 움직이는 기능을 섞은애.

}
export default Queen