import React from 'react';
import './App.css'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet'
import Dice from './OtherPages/Home/d20 dice.png'


import Home from './OtherPages/Home/Home.js'
import About from  './OtherPages/About/About.js'

import SpellList from './Databases/SpellList/SpellList.js'
import TraitsList from './Databases/TraitsList/TraitsList.js'
import EquipmentList from './Databases/EquipmentList/EquipmentList.js'
import DiceRoller from './Tools/DiceRoller/DiceRoller.js'
import HealthCounter from './Tools/HealthCounter/HealthCounter.js'


import SingleSpell from './Databases/SpellList/SingleSpell/SingleSpell.js'
import SingleTrait from './Databases/TraitsList/SingleTrait/SingleTrait.js'
import SingleEquip from './Databases/EquipmentList/SingleEquip/SingleEquip.js'

//http://dnd5eapi.co/api/


function App() {

  return (
    <Router>
    <Helmet>
      <title>DnD-Utils</title>
    </Helmet>
    
    <div className="fullApp">
 
      <nav className='header'>
        <ul>
          <li><Link to='/home' className='appTitle'>DnD Utils</Link></li>
          <li className="dropdown">
            <a className="dropbtn">Databases</a>
            <div className="dropdown-content">
              <Link to='/spelllist'>Spells</Link>
              <Link to='/traitslist'>Traits</Link>
              <Link to='/equipmentlist'>Equipment</Link>
            </div>
          </li>
          <li className="dropdown">
            <a className="dropbtn">Tools</a>
            <div className="dropdown-content">
              <Link to='/diceroller'>Dice Roller</Link>
              <Link to='/healthcounter'>Health Counter</Link>
            </div>
          </li>
          <li><Link to="/about">About</Link></li>
        </ul>
      </nav>
      
      
      <div className='secondHeader'>
      </div>
      <div className='mainBody'>
        <Switch>
          __________________        
          <Route path='/home'exact = {true} component={Home} />
          __________________
          <Route path='/spelllist' exact = {true} component={SpellList} /> 
          <Route path='/traitslist' exact = {true} component={TraitsList} />
          <Route path='/equipmentlist' exact = {true} component={EquipmentList} />

          __________________
          <Route path='/diceroller' exact = {true} component={DiceRoller} />
          <Route path='/healthcounter' exact = {true} component={HealthCounter} />
          __________________
          <Route path='/about' exact = {true} component={About} />
          __________________
          <Route path='/spelllist/spell/:spellName/' 
                 component={SingleSpell}
          />
          <Route path='/traitslist/trait/:traitName/'
                 component={SingleTrait}
          />
          <Route path='/equipmentlist/equip/:equipName/'
                 component={SingleEquip}
          />          
          __________________
          <Home />
        </Switch>
      </div>
      <div className='footer' />

    </div>
    </Router>
  );
}

export default App;
