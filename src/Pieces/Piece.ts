
// Board 의 위치는 배열인데, 이걸 어케 표현할까?
// 기물이 움직일 수 잇는 거리가 있는데, 그곳에 기물이있는지는 어케 판단해야할까..?
// 머리가 멍청한건지 감이안오군,.....

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