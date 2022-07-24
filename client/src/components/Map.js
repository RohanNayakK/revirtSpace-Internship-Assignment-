//import dependencies
import {useFrame, useLoader} from "@react-three/fiber";
import {TextureLoader} from "three/src/loaders/TextureLoader";
import {useRef} from "react";

//import texture assets
import floorTexture from "../assets/Reception_Beach_WorkSpace.png";

//import Components
import CharacterSprite from "./CharacterSprite";
import * as THREE from "three";



//Map Component (2D World)
const Map=()=>{
    let mapRef=useRef()

    //Load texture
    const texture = useLoader(TextureLoader, floorTexture)



    return(
        //Map Plane Mesh

        <mesh ref={mapRef} position={[0,0,0]} >
            <planeGeometry attach="geometry" args={[20, 20]} />
            <meshStandardMaterial map={texture}  />
            <CharacterSprite map={mapRef} />
        </mesh>

    )
}

export default Map