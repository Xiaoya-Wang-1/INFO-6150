import '../styles/welcome.css';
import '../styles/global.css';
import welcomeImage from '../assets/welcome-image.jpg';

function WelcomePage() {
  return (
    <main className="welcome-container">
      <div className="welcome-content">
        <h1>Welcome To All About Cat Web!</h1>
        <img src={welcomeImage} alt="Welcome Cat" className="welcome-image" />
      </div>
    </main>
  );
}

export default WelcomePage;
