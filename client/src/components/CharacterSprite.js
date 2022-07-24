//import dependencies
import {useFrame, useLoader, useThree} from "@react-three/fiber";
import {useEffect, useRef} from "react";
import * as THREE from 'three'


//import textures asset
import avataarTexture from '../assets/avtaar1.png'
import {TextureLoader} from "three/src/loaders/TextureLoader";


//Sprite Character component
const CharacterSprite=({map})=>{
    //Camera
    const { camera  } = useThree()

    //Character Sprite Mesh ref
    let spriteMesh = useRef()

    //Load Sprite Texture
    const spriteTexture = useLoader(TextureLoader, avataarTexture)

    //Initialise
    useEffect(()=>{
        //Add keydown keyboard event to widnow on Mount
        window.addEventListener("keydown", onKeyDown, false);

        //Set Sprite length in X and Y
        spriteTexture.wrapS= spriteTexture.wrapT = THREE.RepeatWrapping
        spriteTexture.repeat.set(1/4,1/3)

        //Set Default Forward Sprite Offset
        spriteTexture.offset.x = 0;
        spriteTexture.offset.y = 0;
    },[])




    //Keydown Event Handler
    const onKeyDown = (event)=> {
        //Get keyCode of the key
        let keyCode = event.keyCode;

        //Action based on Keycode ( WASD Or ArrowKeys )
        //right motion
        if(keyCode===68 || keyCode===39){

            //Update Sprite Offset
            spriteTexture.offset.x +=1/4;
            spriteTexture.offset.y = 1/3;

            //Scale Mesh to flip to right
            spriteMesh.current.scale.x = -1

            //Update Sprite Plane Mesh Position
            spriteMesh.current.position.x+=0.1

            //Update Camera  Position
            camera.position.x+=0.1

        }
        //left motion
        else if(keyCode===65 || keyCode===37) {

            //Update Sprite Offset
            spriteTexture.offset.x +=1/4;
            spriteTexture.offset.y = 1/3;

            //Scale Mesh to flip to left
            spriteMesh.current.scale.x = 1

            //Update Sprite Plane Mesh Position
            spriteMesh.current.position.x-=0.1

            //Update Camera  Position
            camera.position.x-=0.1

        }
        //forward motion
        else if(keyCode===87 || keyCode===38) {

            //Update Sprite Offset
            spriteTexture.offset.x +=1/4;
            spriteTexture.offset.y = 1;

            //Update Sprite Plane Mesh Position
            spriteMesh.current.position.y+=0.1

            //Update Camera  Position
            camera.position.y+=0.1
        }
        //back motion
        else if(keyCode===83 || keyCode===40) {

            //Update Sprite Offset
            spriteTexture.offset.x +=1/4;
            spriteTexture.offset.y = -1/3;

            //Update Sprite Plane Mesh Position
            spriteMesh.current.position.y-=0.1

            //Update Camera  Position

            camera.position.y-=0.1
            console.log(camera)
        }

    }

    useFrame(()=>{
      let mapBounding =map.current.geometry.boundingSphere
        console.log(camera)

    })


    return(
        //Sprite Plane Mesh
        <mesh ref={spriteMesh} position={[0,0,0]} >
            <planeGeometry args={[1, 1]} />
            <meshStandardMaterial transparent={true}  map={spriteTexture}/>
        </mesh>
    )
}

export default CharacterSprite