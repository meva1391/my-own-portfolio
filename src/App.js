import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar';
import Header from './components/Header';
import About from './components/About';
import './App.css';
import Particles from 'react-particles-js';

function App() {
  return (
    <>
      <Particles 
        className="particles-canvas"
        params={{
          particles: {
            number: {
              value: 50,
              density: {
                enable: true,
                value_area: 900
              }
            },
            shape: {
              type: "circle", 
              stroke: {
                width: 3,
                color: "#fff"
              }
            }
          }
        }}
      />
      <Navbar />
      <Header />
      <About />
    </>
  );
}

export default App;
