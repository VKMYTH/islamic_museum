import React from 'react';
import {Footer, Blog, Impacts, WhatComp, WhatInter, Header, Artifacts} from './containers';
import { Navbar } from './components';
import './App.css';
import timelineElements from "./timelineElements";

import {
    VerticalTimeline,
    VerticalTimelineElement,
} from "react-vertical-timeline-component";

import "react-vertical-timeline-component/style.min.css";
import WhatIslamic from "./containers/whatIslamic/WhatIslamic";
import WhatRomanGreek from "./containers/whatRomanGreek/WhatRomanGreek";
import WhatIndigenous from "./containers/whatIndigenous/WhatIndigenous";

const App = () => (
  <div className="App">
    <div className="gradient__bg">
      <Navbar />
      <Header />
    </div>
    <WhatIslamic />
    <WhatRomanGreek />
    <WhatIndigenous />
      <div id = "timeline">
          <VerticalTimeline>
              {timelineElements.map((element) => {
                  return (
                      <VerticalTimelineElement
                          contentStyle={{ background: 'rgba(173, 105, 13, 1)' }}
                          key={element.key}
                          dateClassName="date"
                      >
                          <h3 className="vertical-timeline-element-title" style = {{color: "orange"}}>
                              {element.title}
                          </h3>
                          <h5 className="vertical-timeline-element-subtitle" style = {{color: "orange"}}>
                              {element.date}
                          </h5>
                          <p id="description">{element.description}</p>
                      </VerticalTimelineElement>
                  );
              })}
          </VerticalTimeline>
      </div>
    <Artifacts/>
    <Footer />
  </div>
);

export default App;
