import React, {useState, useEffect} from "react";
import axios from "axios";
import PhotoCard from "./PhotoCard";

export default function PhotoData() {

const [photos, setPhotos] = useState([]);
useEffect(() =>{
    axios.get("https://api.nasa.gov/planetary/apod?api_key=4AXZTFtWMHQc9cdfo1a7Yd8vFE9R1STbFKLxaKS4")
    .then(response => {
        console.log("this is api call log:", response.data.hdurl)
        setPhotos([response.data]);
    })
    .catch (error => {
        console.log("this is api call error:", error)
});
}, [])
console.log(photos)
return(
    <div>
        {photos.map(photo =>{
         return(
            <PhotoCard
            title = {photo.title}
            image = {photo.hdurl}
            explanation = {photo.explanation}
            date = {photo.date}/>
         );
        })}
        
    </div>
);
}