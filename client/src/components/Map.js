//import dependencies
import {useFrame, useLoader, useThree} from "@react-three/fiber";
import {TextureLoader} from "three/src/loaders/TextureLoader";
import {useEffect, useRef} from "react";

//import texture assets
import floorTexture from "../assets/Reception_Beach_WorkSpace.png";

//import Components
import CharacterSprite from "./CharacterSprite";

//Plane Map Bounding Box Object
let MapPlaneBoundingBox={
    xMin:null,
    xMax:null,
    yMin:null,
    yMax:null
}

//Util function to compute bounding box
const computeBoundingBox =(points)=> {
    let vertexArray = [];
    for (let j=0; j<4; j++){
        for (let i=0; i<points.length; i++) vertexArray[i] = points[i];
        switch (j){
            case 0: MapPlaneBoundingBox.xMin = (Math.min(...vertexArray))+0.8
                break
            case 1: MapPlaneBoundingBox.xMax = (Math.max(...vertexArray))-0.8
                break
            case 2: MapPlaneBoundingBox.yMin = (Math.min(...vertexArray))+2
                break
            case 3: MapPlaneBoundingBox.yMax = (Math.max(...vertexArray))-2
                break
        }
    }

}


//Map Component (2D World)
const Map=()=>{
    //gl object for antialiasing
    const { gl } = useThree()

    //Map Mesh ref
    let mapRef=useRef()

    //Load texture
    const texture = useLoader(TextureLoader, floorTexture)
    //Increase sharpness of the texture
    texture.anisotropy = gl.capabilities.getMaxAnisotropy();

    //Initialise
    useEffect(()=>{
        console.log(mapRef.current.geometry)
        computeBoundingBox(mapRef.current.geometry.attributes.position.array)
    },[])


    return(
        //Map Plane Mesh
        <mesh ref={mapRef} position={[0,0,0]} >
            <planeGeometry attach="geometry" args={[20, 20]} />
            <meshStandardMaterial map={texture}  />
            <CharacterSprite mapPlaneBoundingBox={MapPlaneBoundingBox} />
        </mesh>

    )
}

export default Map