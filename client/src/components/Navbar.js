import logoImage from "../assets/logo.png";

const Navbar=()=>{
    return(
        <nav className={"navBar"}>
            <a className={"logoNameContainer"} href={"/"}>
                <img className={"logoImage"} src={logoImage} alt={"revirt.spaces "}/>
                <p className="appName">revirt.space</p>
            </a>
            <div className={"navOptionsContainer"}>
                <ul >

                        <li>
                            <a target={"_blank"} href={"https://github.com/RohanNayakK/revirtSpace-Internship-Assignment-"}>
                            <button className={"btn"}>
                                Code
                            </button>
                            </a>
                        </li>

                </ul>
            </div>

        </nav>
    )
}

export default Navbar