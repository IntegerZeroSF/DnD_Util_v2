import React from 'react';
import { useState } from 'react'
import './DiceRoller.css'



function DiceRoller() {

    const [dice, setDice] = useState(0)

    const rollD4 = () => {
        setDice(prevState => 0)
        setDice(prevState => prevState + Math.floor(Math.random() * 4 + 1))
    }
    const rollD6 = () => {
        setDice(prevState => 0)
        setDice(prevState => prevState + Math.floor(Math.random() * 6 + 1))
    }
    const rollD8 = () => {
        setDice(prevState => 0)
        setDice(prevState => prevState + Math.floor(Math.random() * 8 + 1))
    }
    const rollD10 = () => {
        setDice(prevState => 0)
        setDice(prevState => prevState + Math.floor(Math.random() * 10 + 1))
    }
    const rollD12 = () => {
        setDice(prevState => 0)
        setDice(prevState => prevState + Math.floor(Math.random() * 12 + 1))
    }
    const rollD20 = () => {
        setDice(prevState => 0)
        setDice(prevState => prevState + Math.floor(Math.random() * 20 + 1))
        // if(dice === 1) {setDice('1... oof nat 1')}
        // if(dice === 20) {setDice('20... nice!')}
    }


    return (
        <div className='diceBody'>
            <div className='diceModule'>
                <div className='diceNumDiv'>
                    <h1 className='diceTitle'>Dice Roller!</h1>
                    <h1 className='diceNum'>{dice}</h1>
                </div>
                <div className='buttonsDiv'>
                    <button className='rollDice' onClick={rollD4}>Roll D4</button>
                    <button className='rollDice' onClick={rollD6}>Roll D6</button>
                    <button className='rollDice' onClick={rollD8}>Roll D8</button>
                    <button className='rollDice' onClick={rollD10}>Roll D10</button>
                    <button className='rollDice' onClick={rollD12}>Roll D12</button>
                    <button className='rollDice' onClick={rollD20}>Roll D20</button>
                </div>
            </div>
        </div>
    )

}

export default DiceRoller;