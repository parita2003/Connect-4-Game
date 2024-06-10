import React from "react";
import { playing,No_Player } from "./Constants";

export const isWinner = (gameboard, currentindex, palyer) => {
    
    let board=[...gameboard];
    board[currentindex]=palyer;
    
    const conditions=[
        [0,1,2,3],
        [4,5,6,7],
        [8,9,10,11],
        [12,13,14,15],
        [0,4,8,12],
        [1,5,9,13],
        [2,6,10,14],
        [3,7,11,15],
        [0,5,10,15],
        [3,6,9,12],
    ];  

    for(let i=0;i<conditions.length; i++){
        const[c1,c2,c3,c4] = conditions[i];

        if(board[c1] > 0 && 
            board[c1] === board[c2] &&
            board[c2] === board[c3] &&
            board[c3] === board[c4]
        ){
            return true;
        }
    }
    
    return false;
}

export const isDraw = (gameboard, currentindex, player) =>{
    let board=[...gameboard];
    board[currentindex]=player;

    let count=board.reduce((n,x) => n+(x===0),0); 
    console.log(`count ${count}`);
    return count === 0;
}

export const computermove = (gameboard) => {
    console.log("suggest move button implemented");
    let validmove = [];
    for(let i=0; i<gameboard.length; i++){
        if(gameboard[i]===No_Player){
            validmove.push(i);
        }
    }
    console.log("gameboard : ",gameboard);
    let rndmove= Math.floor(Math.random() * validmove.length);
    return validmove[rndmove];
}