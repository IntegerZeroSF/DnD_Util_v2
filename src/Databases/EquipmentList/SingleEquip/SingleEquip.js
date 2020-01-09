import React from 'react'
import { useEffect, useState } from 'react'
import './SingleEquip.css'

function SingleEquip(props) {

    const [equip, setEquip] = useState([]);
    var inputFetch = props.match.params.equipName
    var ouputFetch = inputFetch.toLowerCase().replace(' ' , '-' ).replace(' ' , '-' ).replace(' ' , '-' ).replace(' ' , '-' )

    useEffect(() => {
        fetch(`http://www.dnd5eapi.co/api/equipment/${ouputFetch}`)
        .then(res => res.json())
        .then(equipData => {
            setEquip(equipData)
        })
    }, []);

    return (
        <div className='body'>
            {equip ?
                <div className='card'>
                    <h1 className='cardTitle'>{equip.name}</h1>

                    <p className='cardDescrip'>{equip.desc}</p>
                        <div className='variTools'>
                            <span className='spellLvl'>Equipment Catagory: {equip.equipment_category}</span>
                            <span className='spellLvl'>Gear Catagory: {equip.gear_category}</span>
                        </div>
                    <div className='cardFooter'></div>
                </div>
            : <div>Now Loading</div> }
        </div>
    )
}

    export default SingleEquip;