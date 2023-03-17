import "bulma/css/bulma.css";
import ProfileCard from "./ProfileCard";
import AlexaImage from "./images/alexa.png";
import CortImage from "./images/cortana.png";
import SiriImage from "./images/siri.png";

function App() {
  return (
    <div className="container">
      <h2 className="py-3 px-6 my-6 has-background-primary has-text-primary-light is-size-2">
        Welcome to PDS
      </h2>
      <div className="columns">
        <div className="column">
          <ProfileCard
            title="Omar"
            handle="@Ackkked"
            image={AlexaImage}
            description="Creative writer with a passion for storytelling and a vivid imagination."
          />
        </div>
        <div className="column">
          <ProfileCard
            title="Mariam"
            handle="@Ioetdwse"
            image={CortImage}
            description="Results-driven marketer with experience in strategy, analytics, and campaign execution."
          />
        </div>
        <div className="column">
          <ProfileCard
            title="Yosuf"
            handle="@Mrwsyarw"
            image={SiriImage}
            description="Dedicated educator committed to fostering a love of learning in students."
          />
        </div>
      </div>
    </div>
  );
}

export default App;
