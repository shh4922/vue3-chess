import Piece from "./Piece"

class Pawn extends Piece {
    icon: string

    constructor(team: string, position: Position, icon: string) {
        super(team, position)
        this.icon = team === 'black' ? '♟' : '♙'
    }


}
export default Pawn