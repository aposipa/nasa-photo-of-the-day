import React from "react";


const PhotoCard = (props) => {
    return (
        <div>
            <img src={props.image} alt="space photo" ></img>
            <h2>Photo Title: {props.title}</h2>
            <p>Explanation: {props.explanation}</p>
            <p>Date: {props.date}</p>
        </div>
    );
};
export default PhotoCard;