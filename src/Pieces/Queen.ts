import Piece from "./Piece"
class Queen extends Piece {

    icon: string

    constructor(team: string, position: Position, icon: string) {
        super(team, position)
        this.icon = team === 'black' ? '♛' : '♕'
    }

}
export default Queen