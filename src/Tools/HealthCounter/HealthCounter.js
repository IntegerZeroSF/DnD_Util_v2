import React from 'react';
import { useState } from 'react'
import './HealthCounter.css'



function HealthCounter() {

    const [health, setHealth] = useState(0)

    const handleIncrement = () => {
        setHealth(prevState => prevState + 1)
    }
    const handleIncrement10 = () => {
        setHealth(prevState => prevState + 10)
    }
    const handleDecrement = () => {
        setHealth(prevState => prevState - 1)
    }
    const handleDecrement10 = () => {
        setHealth(prevState => prevState - 10)
    }

    return (
        <div className='hpBody'>
            <div className='hpModule'>
                <div className='hpDiv'>
                    <h1 className='hpTitle'>Current Health</h1> 
                    <h1 className='hpCounter'>{health}</h1>
                </div>
                <div className='buttonsDiv'>
                    <button className='hpButtons' onClick={handleIncrement10}>+ 10</button>
                    <button className='hpButtons' onClick={handleIncrement}>+ 1</button>
                    <button className='hpButtons' onClick={handleDecrement}>- 1</button>
                    <button className='hpButtons' onClick={handleDecrement10}>- 10</button>
                </div>
            </div>
        </div>
    )

}

export default HealthCounter;