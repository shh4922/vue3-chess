import Piece from "./Piece"
class King extends Piece {
    icon: string

    constructor(team: string, position: Position, icon: string) {
        super(team, position)
        this.icon = team === 'black' ? '♚' : '♔'
    }






}
export default King