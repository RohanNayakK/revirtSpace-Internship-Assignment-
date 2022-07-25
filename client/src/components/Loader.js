import logoImage from "../assets/logo.png";

const Loader=()=>{
    return(
        <div className={"loaderContainer"}>
            <img className={"loaderLogoImage"} src={logoImage} alt={"revirt.spaces"}/>
            <h2 className={"loadFont"}>Loading...</h2>
        </div>

    )
}
export default Loader