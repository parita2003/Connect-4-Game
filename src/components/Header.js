import React from "react";
import {draw, playing,win} from "./Constants";

const Header = ({gamestate, wining, player}) => {
    const renderLabel = () => {
        switch(gamestate){
            case playing:
                return <div>Player {player} Turn</div>
            case win :
                return <div>Player {wining} Wins</div>
            case draw:
                return <div>Its a Draw !</div>
            default:
                return null;
        }
    }
    return (
        <div className="panel header">
            <div className="header-text">{renderLabel()}</div>
        </div>
    );
};

export default Header;