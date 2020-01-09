import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom"
import "./SpellList.css";


function SpellList() {

  const [spells, setSpells] = useState([]);


  useEffect(() => {
    fetch("http://www.dnd5eapi.co/api/spells")
      .then(res => res.json())
      .then(spellData => setSpells(spellData.results))
  }, []);


  const renderSpells = spells.map( (spell, index) => {
    return (
      <Link to={`/spelllist/spell/${spell.name}/`} 
            className='singleSpell'
            key={spell.index}
            url={spell.url}
            >{spell.name}</Link> )}) 

  return (
    <div className='mainDisplay'>
      {renderSpells}
    </div>
  );
}

export default SpellList;
