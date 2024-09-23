
/**
 * 일단 기물이 이동할떄 필요한게,
 * 1. 보드에서 기물이 움직일 수 있는 위치에 다른 기물이 있는지 없는지,
 * 2. 기물이 있다면 우리기물인지, 상대기물인지.
 * 3. 상대기물이면 잡을수있음.
 * 그럼 이걸 판단하는 주체는 누가되어야할까.
 * 기물이 보드에 움질일수있는 방향만큼 요청을 보내면 되는거 아닌가?
 * 그리고 ok 하면 해당좌표 push 하고,
 * 화면단에선 그 좌표들 색 다르게해서 보여주고.
 * 
 * 그럼 그 좌표를 다시 누르면 해당 위치로 가야하는데,
 * 1. 그럼 지금 선택한 기물이 무엇인지 체크
 * 2. 
 */

class Piece {

    team: String // 무슨 팀인지
    position: Position // 내위치


    /**
     * @param {*} team 레드팀인지, 블루팀인지
     * @param {*} position 해당기물의 말의 위치, x,y를 가지고있는 object형태
     */

    constructor(team: string, position: Position) {
        this.team = team
        this.position = position
    }

    move(position: Position) {
        this.position = position
    }

    isOutOfRange(x: number, y: number): Boolean {
        if (x < 0 || x >= 8 || y < 0 || y >= 8) {
            return true
        }
        return false
    }
}
export default Piece