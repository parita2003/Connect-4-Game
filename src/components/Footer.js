import React from "react";

const Footer = ({onClickEvent, suggestmove}) => {
    return (
        <div className="panel footer">
            <button onClick={onClickEvent}>New Game</button>
            <button onClick={ () => suggestmove()}>Suggest</button>
        </div>
    );
};

export default Footer;