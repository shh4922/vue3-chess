import Piece from "./Piece"
class Rook extends Piece {

    icon: string

    constructor(team: string, position: Position) {
        super(team, position)
        this.icon = team === 'black' ? '♜' : '♖'
    }



}
export default Rook