import React from "react";
import ReactDOM from "react-dom/client";
import NavBar from "./NavBar.jsx";
import Hero from "./Hero.jsx";
import Card from "./Card.jsx";
import cardData from "./Item.jsx";
export default function App(){
return(
<div>
<NavBar/>
<Hero />
<div className="card-container">
{
cardData.map((data,index)=>(
    <Card   image={cardData[index].image} 
        star={cardData[index].rating.star }
        country={cardData[index].country} 
        review={cardData[index].rating.review} 
        name={cardData[index].name} 
        price={cardData[index].price} 
        openspots={cardData[index].openspots}
        />
))}
</div>
</div>)
}
