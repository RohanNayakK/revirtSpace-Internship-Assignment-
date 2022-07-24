//import dependencies
import React from 'react';
//StyleSheet
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

          <React.Suspense fallback={<h2 className={"loadFont"}>Loading...</h2>}>
              <SceneCanvas/>
          </React.Suspense>

          <Footer/>
      </>

  );
}

export default App;
