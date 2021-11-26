import React, { Component } from "react";
import Venus1 from '../assets/venus/1.png';
import Venus2 from '../assets/venus/2.png';
import Venus3 from '../assets/venus/3.png';
import background from '../assets/Website/heartbackground.png';
import Character1 from '../assets/Website/character1.png';
import Character2 from '../assets/Website/character2.png';
import divide from '../assets/Website/divide.png';
import Forcharacter1 from '../assets/Website/forcharacter1.png';
import Forcharacter2 from '../assets/Website/forcharacter2.png';

export class VenusWork extends Component {
  render() {
    return (
      <div id="venus-work" className="text-center" style={{ 
        backgroundImage: `url(${background})` }}>
        <p className="each-title">Venus After Work</p>
        <p className="sub-each-title">Not all Venus are in uniform! 50% are off work and wearing their everyday attire</p>
        <div className="venus-work-container">
          <div><img src={Venus1} alt="venus" className="" /></div>
          <div><img src={Venus2} alt="venus" className="" /></div>
          <div><img src={Venus3} alt="venus" className="" /></div>
        </div>
        <div className="venus-content">
          <div className="characters">
            <img src={Character1} alt="Character1" className="character1" />
            <img src={divide} alt="divide" className="divide" />
            <img src={Character2} alt="Character2" className="character2" />
            <img src={Forcharacter1} alt="Forcharacter1" className="for-chara1" />
            <img src={Forcharacter2} alt="Forcharacter2" className="for-chara2" />
          </div>
          <div className="group-content">
            <div className="group-left">
              <p className="">Generates 1 $ TENDIE per day</p>
              <p>3333 Supply</p>
              <p className="">0.16 ETH</p>
            </div>
            <div className="group-right">
              <p>Generates 0.25 $TENDIE per day</p>
              <p className="">1667 Supply</p>
              <p>0.08 ETH</p>
              <p>More can be minted by Holding 2 Genesis Workers</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default VenusWork;
