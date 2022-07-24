//import dependencies
import React, {useRef} from 'react'
import {Canvas} from '@react-three/fiber'


//import components ( Scene Objects )
import Map from "./Map";

//Scene component
const SceneCanvas=()=>{
    let sceneCanvas=useRef()

    return(
        <div className={"canvasParentContainer"}>

            {/*Canvas*/}
           <Canvas ref={sceneCanvas} camera={{position :[0,0,3]}} flat linear>
               {/*Light*/}
               <ambientLight />

               {/*Map (2D World)*/}
               <Map/>

           </Canvas>

        </div>

)
}

export default SceneCanvas;