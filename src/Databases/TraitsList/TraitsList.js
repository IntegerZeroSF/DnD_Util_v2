import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom"
import "./TraitsList.css";


function TraitsList() {

  const [traits, setTraits] = useState([]);


  useEffect(() => {
    fetch("http://www.dnd5eapi.co/api/traits")
      .then(res => res.json())
      .then(traitsData => setTraits(traitsData.results))
  }, []);

  const renderTraits = traits.map( (trait, index) => {
    return (
      <Link to={`/traitslist/trait/${trait.name}/`}  
            className='singleFeature' 
            key={trait.index}
            url={trait.url}
            >{trait.name}</Link> )}) 


  return (
    <div className='mainDisplay'>
      {renderTraits}
    </div>
  );
}

export default TraitsList;
