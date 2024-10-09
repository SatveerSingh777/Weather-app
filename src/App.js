
import './App.css';
import Navbar from './Components/Navbar';
import Weather from './Components/Weather';

function App() {
  
  return (
    <>
      <Navbar topic={"Weather App - Check weather in your city"}/>
      <Weather  />

    </>
  );
}

export default App;
