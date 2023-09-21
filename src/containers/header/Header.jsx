import React from 'react';
import ai from '../../assets/ai.png';
import './header.css';

const Header = () => (
  <div className="gpt3__header section__padding" id="home">
    <div className="gpt3__header-content">
      <h1 className="gradient__text">CHS Museum of Art: Ran by Vaibhav and Hayden (CHS Associates) </h1>
      <p>This website is dedicated to a preview of the CHS Museum of Art. At the CHS Museum, located in Frisco, Texas, we take pride in preserving every aspect of society through the Islamic Exhibit, Indigenous Exhibit (Coming Soon), and Roman/Greek Exhibit (Coming Soon). Look through the Islamic descrpitoin of the Islamic Exhibit, a timeline of the CHS Museum of Art, the art gallery, and further articles on Islamic Art. </p>

      <div className="gpt3__header-content__input">
        <button type="button">Get Started Below</button>
      </div>
    </div>

    <div className="gpt3__header-image">
      <img src={ai} />
    </div>
  </div>
);

export default Header;
