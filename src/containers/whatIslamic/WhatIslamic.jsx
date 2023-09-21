import React from 'react';
import Feature from '../../components/feature/Feature';
import './whatComp.css';

const WhatComp = () => (
  <div className="gpt3__whatgpt3 section__margin" id="wcomp">
    <div className="gpt3__whatgpt3-feature">
      <Feature title="What is Transportation?" text="Transportation refers to the movement of people, goods, and services from one location to another using various modes of transportation such as cars, trains, airplanes, and ships. Over the past century, transportation technology has transformed the way we travel and expanded our ability to explore the world. Advancements in transportation have also had significant impacts on industries, economies, and the environment." />
    </div>
    <div className="gpt3__whatgpt3-heading">
      <h1 className="gradient__text">The possibilities are beyond your imagination</h1>
      <p><a href="src/components/navbar#blog">Explore the Library</a></p>
    </div>
    <div className="gpt3__whatgpt3-container">
      <Feature title="Autonomous Vehicles" text="The use of self-driving cars, trucks, and other vehicles, which use sensors and artificial intelligence to navigate roads and highways without human intervention. This technology has the potential to improve road safety, reduce traffic congestion, and enhance mobility for people with disabilities or limited access to public transportation." />
      <Feature title="Electric Vehicles" text="Vehicles that run on electricity rather than fossil fuels, using batteries and electric motors to power the vehicle. This technology has the potential to reduce carbon emissions and air pollution, as well as lower the cost of vehicle operation and maintenance." />
      <Feature title="Hyperloop" text="A proposed high-speed transportation system that uses pods or capsules to travel through vacuum-sealed tubes, reaching speeds of up to 700 miles per hour. This technology has the potential to revolutionize long-distance transportation, reducing travel times and increasing accessibility to remote regions." />
    </div>
  </div>
);

export default WhatComp;
