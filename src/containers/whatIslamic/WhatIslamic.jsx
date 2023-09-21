import React from 'react';
import Feature from '../../components/feature/Feature';
import './whatIslamic.css';

const WhatIslamic = () => (
  <div className="gpt3__whatgpt3 section__margin" id="wcomp">
    <div className="gpt3__whatgpt3-feature">
      <Feature title="What is the Islamic Exhibit?" text="The Islamic exhibit offers a circular journey through the cultural and artistic artifacts of Islamic civilization. It showcases a lots of artifacts, from illuminated Qur'anic manuscripts to intricate astrolabes, inviting visitors to explore the rich history of the Islamic world."/>
    </div>
    <div className="gpt3__whatgpt3-heading">
      <h1 className="gradient__text">The Islamic Exhibit</h1>
    </div>
    <div className="gpt3__whatgpt3-container">
      <Feature title="Historical" text="Visitors can delve into the historical context of Islamic civilization, finding its evolution from the early Islamic period to the peak of its influence during the Islamic Age. The exhibit shows key historical events, such as the spread of Islam and the development of trade networks, providing insight into the shaping of Islamic culture." />
      <Feature title="Artistic" text="The exhibit also celebrates the exquisite craftsmanship of the Islamic world. Visitors can view the intricately designed ceramic pottery, luster-painted calligraphy, and the geometric patterns of the architecture. These artifacts exemplify the aesthetics and functionality of Islamic art." />
      <Feature title="Cultural" text="A focus on Islamic culture allows visitors to explore the traditions, languages, and customs that have been habits the Islamic world. Through artifacts like the Manumission document and Tahrir certificate, the exhibit highlights cultural values such as justice and freedom within Islamic societies, shedding light on the social side of these civilizations." />
    </div>
  </div>
);

export default WhatIslamic;
