import React, { useEffect } from "react";
import Circle from "./Circle";
import '../Style.css'
import { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import { isWinner, isDraw, computermove } from "./winner";
import {playing,win,n,Player_1,Player_2,No_Player, draw,} from "./Constants";

const Board = () => {
    const [gameboard, setgameboard] = useState(Array(16).fill(No_Player));
    const [currentPlayer, setCurrentPlayer]= useState(Player_1);
    const [gamestate, setgamestate] = useState(playing);
    const [wining, setwinner]=useState(No_Player);

    useEffect(() => {
        initgame();
    },[]);

    const initgame = () => {
        console.log('initilising game');
        setgameboard(Array(16).fill(No_Player));
        setCurrentPlayer(Player_1);
        setgamestate(playing);
    }

    const suggestmove = () => {
        console.log("suggest move button clicked");
        circleClicked(computermove(gameboard));
    }
    const init = () => {
        const circles_arr=[];
        for(let i=0; i<n; i++){
            circles_arr.push(renderCircle(i));
        }
        return circles_arr;
    } 

    const circleClicked = (id) => {
        console.log("id : " +id);
        if(gameboard[id] !== No_Player) return;
        if(gamestate !== playing) return;
        if(isWinner(gameboard,id,currentPlayer)){
            setgamestate(win);
            setwinner(currentPlayer);
        }
        if(isDraw(gameboard,id,currentPlayer)){
            setgamestate(draw);
            setwinner(No_Player);
        }
        setgameboard(prev => {
            return prev.map((circle,pos) => {
                if(pos === id) return currentPlayer;
                return circle;
            })
        })

        setCurrentPlayer(currentPlayer === Player_1 ? Player_2 : Player_1);
        console.log(gameboard);
    }

    const renderCircle = id => {
        return <Circle key={id} id={id} className={`Player_${gameboard[id]}`} circleClicked={circleClicked} />
    }

    return (
    <>
    <Header gamestate={gamestate} wining={wining} player={currentPlayer}/>
    <div className="board">
        {init()}
    </div>
    <Footer onClickEvent={initgame} suggestmove={suggestmove}/>
    </>
)
}
export default Board; 