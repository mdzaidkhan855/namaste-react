import { useContext, useEffect, useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";

const Header = ()=>{
    let btnName = "Login";
    const [btn, setBtn] = useState("Login");

    const onlineStaus = useOnlineStatus();

    const {loggedInUser} = useContext(UserContext);
    //console.log("Logged In User: " + loggedInUser);

    // subscribing to the store using a selector
    const cartItems = useSelector((store) => store.cart.items);

    //console.log("Cart Items:" + JSON.stringify(cartItems));

    useEffect(()=>{
        console.log("Use Effect called in header");
    },[btn])

    
    return(
        <div className="flex justify-between bg-pink-100 shadow-lg">
            <div className="logo-container">
                <img className="w-56" src={LOGO_URL}/>
            </div>
            <div className="flex items-center">
                <ul className="flex p-4 m-4">
                    <li className="px-4">Online Status: {onlineStaus ? "🍏" : "😫 " }</li>
                    <li className="px-4"><Link to="/" >Home</Link></li>
                    <li className="px-4"><Link to="/about">About Us</Link></li>
                    <li className="px-4"><Link to="/contact">Contact Us</Link></li>
                    <li className="px-4"><Link to="/grocery">Grocery</Link></li>
                    <li className="px-4"><Link to="/cart">Cart - {cartItems.length}</Link></li>
                    <button className="login" onClick={
                        ()=> btn === "Login" ? setBtn("Logout") : setBtn("Login")}
                        
                        >{btn}
                    </button>
                    <li className="px-4">{loggedInUser}</li>
                </ul>
            </div>
        </div>
    )
}

export default Header;