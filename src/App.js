import ProfileCard from './ProfileCard';
import AlexaImage from './images/alexa.png';
import CortImage from './images/cortana.png';
import SiriImage from './images/siri.png';

function App() {
  return (
    <div>
      <ProfileCard title="Omar" image={AlexaImage} />
      <ProfileCard title="Mariam" image={CortImage} />
      <ProfileCard title="Yosuf" image={SiriImage} />
    </div>
  );
}

export default App;
