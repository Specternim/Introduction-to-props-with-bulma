import React from "react";
import "bulma/css/bulma.css";

import ProfileCard from "./components/ProfileCard";

import AlexaImg from "./images/alexa.png";
import CortanaImg from "./images/cortana.png";
import SiriImg from "./images/siri.png";

const App = () => {
  return (
    <>
      <section className="hero is-primary">
        <div className="hero-body">
          <p className="title">Personal Digital Assistants</p>
        </div>
      </section>

      <div className="container">
        <section className="section">
          <div className="columns">
            <div className="column is-4">
              {" "}
              <ProfileCard
                title="Alexa"
                handle="@takemetomoonjeff"
                image={AlexaImg}
                desc="A bluetooth speaker that needs WiFi to be functional... like seriously 🤷‍♂️"
              />
            </div>
            <div className="column is-4">
              <ProfileCard
                title="Cortana"
                handle="@inolongerexist"
                image={CortanaImg}
                desc="What were the devs thinking when they implemented it in Windows? 🫤"
              />
            </div>
            <div className="column is-4">
              <ProfileCard
                title="Siri"
                handle="@iameverywhere"
                image={SiriImg}
                desc="A windows-11 equivalent for 'Hey Google!'"
              />
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default App;
