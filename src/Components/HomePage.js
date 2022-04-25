import React, { Component } from 'react';
import EquipmentCards from './EquipmentsCard';
import Navigationbar from './Navigationbar';
import AboutHome from './Section/AboutHome';
import Hero from './Section/Hero';
import Cards from './VehicalHomeCards';
export default class HomePage extends Component {

  render() {
    return (
    
    <div>
      <Navigationbar/>
      <Hero />
      <AboutHome />
      <Cards />
      <br></br>
      <EquipmentCards />
    </div>

    );
  }

}

