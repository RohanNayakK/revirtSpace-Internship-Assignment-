//import dependencies
import './App.css';

//import components
import Navbar from "./components/Navbar";
import SceneCanvas from "./components/SceneCanvas";
import Footer from "./components/Footer";

//App component
function App() {

    //UI components
  return (
      <>
          <Navbar/>
          <SceneCanvas/>
          <Footer/>
      </>

  );
}

export default App;
