import React, { useState } from 'react'
import "./box.css"

export function Box(props) {
    const [cell, setCell] = useState("")
    const toggleText = () =>{
        if(cell === ""){
            setCell(props.player)
        props.changePlayer(props.row,props.col)
     
        } else {
          // if same box is clicked twice 
            alert("It's not empty")
        }
    }


  return (
    <div className="box" onClick={toggleText}>{cell}</div>
  )
}
