import { useEffect, useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Header = ()=>{
    let btnName = "Login";
    const [btn, setBtn] = useState("Login");

    const onlineStaus = useOnlineStatus();

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
                    <li>Online Status: {onlineStaus ? "🍏" : "😫 " }</li>
                    <li><Link to="/" >Home</Link></li>
                    <li><Link to="/about">About Us</Link></li>
                    <li><Link to="/contact">Contact Us</Link></li>
                    <li><Link to="/grocery">Grocery</Link></li>
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