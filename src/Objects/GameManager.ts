import Piece from "@/Pieces/Piece"


class GameManager {
    currentTurn: string
    isGameOver: boolean
    winner: string | null
    isClicked: boolean
    selectedPiece: Piece | null

    constructor() {
        this.currentTurn = 'white'
        this.isGameOver = false
        this.winner = null
        this.isClicked = false
        this.selectedPiece = null
    }

    toggleTurn() {
        this.currentTurn = this.currentTurn === 'white' ? 'black' : 'white'
    }

    selectPiece(piece: Piece) {
        this.isClicked = true
        this.selectedPiece = piece
    }

    movePiece(position: Position) {
        if (this.selectedPiece !== null && this.isClicked) {
            console.log("is not null!!")
            this.selectedPiece.position = position
        }

    }
}

export default GameManager