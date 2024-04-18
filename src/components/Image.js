import React from "react";

export default function(props){
    return(
        <>
        <div className="col-4 p-2">
            <img className="w-100" src={props.image}/>
        </div>
        </>
    )
}