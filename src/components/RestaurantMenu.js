import React, { useEffect, useState } from 'react'

import ShimmerMenu from './Shimmer';
import { useParams } from 'react-router';


const RestaurantMenu = () => {

    const [menu, setMenu] = useState([]);
    const {resId} = useParams();

    useEffect(()=>{
        fetchMenu();
    },[]);
  
    const fetchMenu = async ()=>{
        const data = await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=18.5204303&lng=73.8567437&restaurantId="+resId+"&catalog_qa=undefined&submitAction=ENTER");
        const json = await data.json();
        console.log("JSON DATA IS:" + json);
        let info = json.data.cards[2].card.card.info;
        console.log("INFO DATA IS" + info.name);
        setMenu(info);
        //let info = json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants;
        //setListOfRestaurant(info);
        //setFilteredRestaurant(info);
    }

    if(menu === null) return <ShimmerMenu/>

    return (
    
        <div className="menu">
        
        <h1>{menu.name}</h1>
            <h2>{menu.cuisines}</h2>
            <ul>
                <li>{menu.avgRating} stars</li>
                <li></li>
            </ul>
        </div>
    )
}

export default RestaurantMenu