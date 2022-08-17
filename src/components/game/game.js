
import React, { useState } from 'react'
import { Box } from '../box/box'
import "./game.css"
// Array
const board = [[], [], []]
export function Game() {
    const [turn, setTurn] = useState("X")
    const [text, setText] = useState("")

    const changePlayer = (row, col) => {
        // Create array for status
        board[row][col] = turn
        // Player's turn
        setTurn(turn => turn === "X" ? "O" : "X")
        // checks the winner status
        const winner = checkWin()
        if (winner) {
            setText(`Congratulations ${winner}' s won.`)
            
        } else {
            checkTie()
        }
    }


    const checkTie = () => {
        // checks the tie status
        if (board[0][0] != null && board[0][1] != null && board[0][2] != null && board[1][0] != null && board[1][1] != null && board[1][2] != null && board[2][0] != null && board[2][1] != null && board[2][2] != null) {
            setText(`The game is tied`)
        }
    }

    // checks the winner status
    const checkWin = () => {
        // row check
        for (let i = 0; i < board.length; i++) {
            const row0 = board[0][i]
            const row1 = board[1][i]
            const row2 = board[2][i]
            if (row0 === row1 && row1 === row2) {
                return row0
            }
        }
        // col check
        for (let i = 0; i < board.length; i++) {
            const col = board[i]
            if (col[0] === col[1] && col[1] === col[2]) {
                return col[0]
            }
        }
        // diagnol check
        const x0 = board[0][0]
        const x1 = board[1][1]
        const x2 = board[2][2]

        if (x0 === x1 && x1 === x2 && x0) {
            return x0
        }

        const y0 = board[0][2]
        const y1 = board[1][1]
        const y2 = board[2][0]

        if (y0 === y1 && y1 === y2 && y0) {
            return y0
        }

    }

    const resetGame = () => {
        // It's reload when click Play Again Buton
        window.location.reload()
    }

    return (
        <div className="container">
           
            <div className="game">
            <h1 className='text'>{text}</h1>
                <h3 className='turn'>{turn}'s turn.</h3>
                <div className="row">
                    <Box row={0} col={0} player={turn} changePlayer={changePlayer} />
                    <Box row={0} col={1} player={turn} changePlayer={changePlayer} />
                    <Box row={0} col={2} player={turn} changePlayer={changePlayer} />
                </div>
                <div className="row">
                    <Box row={1} col={0} player={turn} changePlayer={changePlayer} />
                    <Box row={1} col={1} player={turn} changePlayer={changePlayer} />
                    <Box row={1} col={2} player={turn} changePlayer={changePlayer} />
                </div>
                <div className="row">
                    <Box row={2} col={0} player={turn} changePlayer={changePlayer} />
                    <Box row={2} col={1} player={turn} changePlayer={changePlayer} />
                    <Box row={2} col={2} player={turn} changePlayer={changePlayer} />
                </div>
                <button className='btn' onClick={resetGame}>Play Again!</button>
            </div>
        </div>
    )
}
