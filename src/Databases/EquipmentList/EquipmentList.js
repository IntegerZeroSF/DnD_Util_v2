import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom"
import "./EquipmentList.css";


function EquipmentList() {

  const [equips, setEquips] = useState([]);


  useEffect(() => {
    fetch("http://www.dnd5eapi.co/api/equipment")
      .then(res => res.json())
      .then(equipsData => setEquips(equipsData.results))
  }, []);

  const renderEquips = equips.map( (equip, index) => {
    return (
      <Link to={`/equipmentlist/equip/${equip.name}/`}  
            className='singleEquipment' 
            key={equip.index}
            url={equip.url}
            >{equip.name}</Link> )}) 


  return (
    <div className='mainDisplay'>
      {renderEquips}
    </div>
  );
}

export default EquipmentList;