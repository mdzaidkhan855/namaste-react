import React from 'react';
import ReactDOM from 'react-dom/client';

const Header = ()=>{
    return(
        <div className="header">
            <div className="logo-container">
                <img className="logo" src="https://www.logodesign.net/logo/smoking-burger-with-lettuce-3624ld.png"/>
            </div>
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
                    <li>Cart</li>
                </ul>
            </div>
        </div>
    )
}

const resList = [
    {
        "id":"123456",
        "imgSrc":"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/5a148e63e9c54942e37627da1aa156be" ,
        "resName":"Meghna Foods" ,
        "cuisine":"Wow! Momos, Tibetan" ,
        "star":"4.4" ,
        "delivery":"38"
    },
    {
        "id":"876962",
        "imgSrc":"https://media.istockphoto.com/id/1530955921/photo/overhead-shot-of-a-vibrant-colorful-bowl-filled-with-a-variety-of-fresh-raw-vegetables.webp?s=170667a&w=0&k=20&c=k0B7fWD7dkCCIX5TGIfumkBfxL-PmGAKtsn7TpP1w98=" ,
        "resName":"KFC" ,
        "cuisine":"Burger" ,
        "star":"4.5" ,
        "delivery":"50"
    }
]
const RestaurantCard = (props)=>{
    const {resData} = props;
    const {imgSrc,resName,cuisine,star,delivery} = resData;
    return (
        <div className="res-card">
            <img 
                className="res-logo"
                alt="res-logo" 
                src={imgSrc}></img>
            <h3>{resName}</h3>
            <h4>{cuisine}</h4>
            <h4>{star} stars</h4>
            <h4>{delivery} minutes</h4>
        </div>
    )
}
const Body = ()=>{
    return (
        <div className="body">
            <div className="search">
                Search
            </div>
            <div className="res-container">
                {
                    resList.map((restaurant)=><RestaurantCard key={restaurant.id} resData={restaurant}/>)
                }               
                
            </div>
        </div>
    )
}
const AppLayout = ()=>{
    return(
        <div className="app">
            <Header/>
            <Body/>
        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout/>);
