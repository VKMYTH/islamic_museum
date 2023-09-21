import React from 'react';
import Feature from '../../components/feature/Feature';
import './whatInter.css';

const WhatInter = () => (
  <div className="gpt3__whatgpt3 section__margin" id="winter">
    <div className="gpt3__whatgpt3-feature">
      <Feature title="What is Communication?" text="Communication refers to the exchange of information, ideas, and messages between individuals or groups. Over the past century, communication technology has undergone significant advancements, from the invention of the telephone to the rise of social media platforms. These technologies have transformed the way we connect with each other, enabled new forms of collaboration and community building, and had far-reaching impacts on society and culture." />
    </div>
    <div className="gpt3__whatgpt3-heading">
      <h1 className="gradient__text">The possibilities are beyond your imagination</h1>
      <p><a href="src/components/navbar#blog">Explore the Library</a></p>
    </div>
    <div className="gpt3__whatgpt3-container">
      <Feature title="Instant Messaging" text="Real-time communication between two or more people over the internet, using software applications such as WhatsApp, Facebook Messenger, or Slack. This technology allows for fast and efficient communication, regardless of location or time zone." />
      <Feature title="Video Conferencing" text="Real-time audio and video communication between two or more people over the internet, using software applications such as Zoom, Skype, or Google Meet. This technology allows for virtual meetings and collaboration, reducing the need for in-person meetings and travel." />
      <Feature title="Social Media" text="Online platforms that allow users to create and share content, connect with other users, and engage in virtual communities. This technology has transformed the way people communicate, enabling widespread sharing of information, ideas, and opinions, as well as providing new avenues for advertising, marketing, and e-commerce." />
    </div>
  </div>
);

export default WhatInter;
