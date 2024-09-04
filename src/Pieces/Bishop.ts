import Piece from "./Piece"

class Bishop extends Piece {

    icon: string

    constructor(team: string, position: Position) {
        super(team, position)
        this.icon = team === 'black' ? '♝' : '♗'
    }
}
export default Bishop