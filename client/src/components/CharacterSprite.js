//import dependencies
import {useFrame, useLoader, useThree} from "@react-three/fiber";
import {useEffect, useRef} from "react";
import * as THREE from 'three'


//import textures asset
import avataarTexture from '../assets/avtaar1.png'
import {TextureLoader} from "three/src/loaders/TextureLoader";


//Sprite Character component
const CharacterSprite=({mapPlaneBoundingBox})=>{
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



    //Setter function to set/update Sprite position
    let setCharacterSpritePosition=(xOffsetValue,yOffsetValue,meshOffsetDirection)=>{

        //Update Sprite Texture Offset
        spriteTexture.offset.x  += xOffsetValue;
        spriteTexture.offset.y   = yOffsetValue;


        //Update Sprite Plane Mesh Position
        switch (meshOffsetDirection){
            case "+x":
                //Scale Mesh to flip to right
                spriteMesh.current.scale.x = -1

                if(spriteMesh.current.position.x <= mapPlaneBoundingBox.xMax){
                    //Update SpriteMesh postion
                    spriteMesh.current.position.x+=0.1

                    //Check camera Bound vs Plane Map Bound
                    if(camera.position.x <(mapPlaneBoundingBox.xMax*0.50)){
                        //Update Camera  Position
                        camera.position.x+=0.1
                    }
                }

                break;

            case "-x":
                //Scale Mesh to flip to left
                spriteMesh.current.scale.x = 1

                if(spriteMesh.current.position.x >= mapPlaneBoundingBox.xMin){
                    //Update SpriteMesh postion
                    spriteMesh.current.position.x-=0.1

                    //Check Camera Bound vs Plane Map Bound
                    if(camera.position.x >(mapPlaneBoundingBox.xMin*0.50)){
                        //Update Camera  Position
                        camera.position.x-=0.1
                    }

                }

                break;

            case "+y":
                if(spriteMesh.current.position.y <= mapPlaneBoundingBox.yMax){
                    //Update SpriteMesh postion
                    spriteMesh.current.position.y+=0.1

                    //Update Camera  Position
                    camera.position.y+=0.1
                }


                break;

            case "-y":
                if(spriteMesh.current.position.y >= mapPlaneBoundingBox.yMin){
                    //Update SpriteMesh postion
                    spriteMesh.current.position.y-=0.1

                    //Update Camera  Position
                    camera.position.y-=0.1
                    break;
                }

            default:console.warn("Invalid")
                break

        }
    }


    //Keydown Event Handler
    const onKeyDown = (event)=> {
        //Get keyCode of the key
        let keyCode = event.keyCode;

        //Action based on Keycode ( WASD Or ArrowKeys )
        //right motion
        if(keyCode===68 || keyCode===39){

            //Set Position Function Call
            setCharacterSpritePosition(1/4,1/3,"+x")

        }
        //left motion
        else if(keyCode===65 || keyCode===37) {

            //Set Position Function Call
            setCharacterSpritePosition(1/4,1/3,"-x")

        }
        //forward motion
        else if(keyCode===87 || keyCode===38) {

            //Set Position Function Call
            setCharacterSpritePosition(1/4,1,"+y")

        }
        //back motion
        else if(keyCode===83 || keyCode===40) {

            //Set Position Function Call
            setCharacterSpritePosition(1/4,-1/3,"-y")

        }

    }


    return(
        //Sprite Plane Mesh

        <mesh ref={spriteMesh} position={[0,0,0]} >

            <planeGeometry args={[1, 1]} />
            <meshStandardMaterial transparent={true} map={spriteTexture}/>
        </mesh>
    )
}

export default CharacterSprite