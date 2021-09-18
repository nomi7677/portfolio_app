
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Particles from 'react-particles-js';
import NavBar from "./components/Navbar";
import Header from "./components/Header";
function App() {
  return (
    <>
    
   <NavBar />
   <Header />
   <Particles 
   className="particles-canvas"
    params={{
      particles: {
        number:{
          value:30,
          density:{
            enable:true,
            value_area: 900
          }
        },
        shape: {
          type: "star",
          stroke:{
            width:6,
            color:"#f9ab00"
          }
        }
      }
    }}
    />

    </>
  
  );
}

export default App;
