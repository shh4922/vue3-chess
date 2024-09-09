class GameManager {
    currentTurn: string
    isGameOver: boolean
    winner: string | null

    constructor() {
        this.currentTurn = 'white'
        this.isGameOver = false
        this.winner = null
    }

    toggleTurn() {
        this.currentTurn = this.currentTurn === 'white' ? 'black' : 'white'
    }
}

export default GameManager