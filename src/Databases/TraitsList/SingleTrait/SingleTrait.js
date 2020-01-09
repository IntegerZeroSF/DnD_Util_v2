import React from 'react'
import { useEffect, useState } from 'react'
import './SingleTrait.css'

function SingleTrait(props) {

    const [trait, setTrait] = useState([]);
    var inputFetch = props.match.params.traitName
    var ouputFetch = inputFetch.toLowerCase().replace(' ' , '-' ).replace(' ' , '-' ).replace(' ' , '-' ).replace(' ' , '-' )

        useEffect(() => {
        fetch(`http://www.dnd5eapi.co/api/traits/${ouputFetch}`)
        .then(res => res.json())
        .then(traitData => {
            setTrait(traitData)
        })
    }, []);


    return(
        <div className='body'>
            {trait ?
                <div className='card'>
                    <h1 className='cardTitle'>{trait.name}</h1>

                    <p className='cardDescrip'>{trait.desc}</p>
                        <div className='variTools'>

                        </div>
                    <div className='cardFooter'></div>
                </div>
            : <div>Now Loading</div> }
        </div>
    )
}

export default SingleTrait;