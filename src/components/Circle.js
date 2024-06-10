import React from "react";
import '../Style.css'
import { useState } from "react";



const Circle = ({id,children, circleClicked, className}) => {
    
    return (
        <div className={`circle ${className}`} onClick={() => circleClicked(id)}>
            {children}
        </div>
    )
}
export default Circle;