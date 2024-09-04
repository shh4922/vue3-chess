import Piece from "./Piece"
class Queen extends Piece {

    icon: string

    constructor(team: string, position: Position) {
        super(team, position)
        this.icon = team === 'black' ? '♛' : '♕'
    }
    move() {
        console.log(`im ${this.team} team, and icon is ${this.icon} i will move`)
    }

}
export default Queen