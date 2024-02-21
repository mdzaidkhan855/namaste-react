import { useEffect, useState } from "react";
import { LOGO_URL } from "../utils/constants";

const Header = ()=>{
    let btnName = "Login";
    const [btn, setBtn] = useState("Login");

    useEffect(()=>{
        console.log("Use Effect called in header");
    },[btn])

    
    return(
        <div className="header">
            <div className="logo-container">
                <img className="logo" src={LOGO_URL}/>
            </div>
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
                    <li>Cart</li>
                    <button className="login" onClick={
                        ()=> btn === "Login" ? setBtn("Logout") : setBtn("Login")}
                        
                        >{btn}
                    </button>
                </ul>
            </div>
        </div>
    )
}

export default Header;