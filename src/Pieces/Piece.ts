
class Piece {
    team: String
    position: Position

    /**
     * @param {*} team 레드팀인지, 블루팀인지
     * @param {*} position 해당기물의 말의 위치, x,y를 가지고있는 object형태
     */

    constructor(team: string, position: Position) {
        this.team = team
        this.position = position
    }

    move() {
        // movePosition
        console.log("Piece.js run move")
    }
}
export default Piece