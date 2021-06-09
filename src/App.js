import './App.css';
import Tile from "./component/Tile";
import fruit from "./assets/fruit.jpg";
import FruitForm from "./component/FruitForm";
import React from "react";
import FruitProducts from "./component/FruitProducts";

function App() {
    return (
        <>
            <Tile titlearea="Fruit Bezorgservice"/>
            <Tile titlearea="Bestel Fruit Online"/>
            <Tile  img={fruit} imgDescription={fruit} />
            <Tile titlearea="Eet gezond Eet Fruit"/>
            <FruitProducts/>
            <Tile titlearea="Eet gezond Eet Fruit"/>
            <Tile  img={fruit} imgDescription={fruit}/>
            <Tile titlearea="Fruitmand Bestelformulier"/>
            <FruitForm/>
            <Tile titlearea="Eet gezond Eet Fruit"/>
            <Tile titlearea="Eet gezond Bestel Fruit"/>
            <Tile  img={fruit} imgDescription={fruit}/>
        </>
);
}

export default App;
