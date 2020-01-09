import React from "react";
import "./Home.css";
import Dice from './d20 dice.png'

function Home() {

    return (
        <div className='mainBody'>
            <h1 className='homeTitle'> Welcome to DnD Utils!</h1>
            <br></br>
            <p className='bodyText'>Here you can view a variety of databases, such as spells, or traits, withought the need
            to open a big old book to get the information you need!</p>
            <br></br>
            <p className='bodyText'>It also provides some counters for things such as a dice roller and HP pool for quick and
             easy manipulation of things you will likely use in a game of Dnd as a player.</p>
            <br></br>
            <img src={Dice} className='dicePicture' alt='dice'></img>
        </div>
    )
}

export default Home;