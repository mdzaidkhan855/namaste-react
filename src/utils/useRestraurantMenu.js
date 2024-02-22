import { useState } from "react";
import { useEffect } from "react";

const useRestraurantMenu = (resId)=>{

    const [resInfo, setResInfo] = useState([]);

    useEffect(()=>{
        fetchMenu();
    },[]);

    const fetchMenu = async ()=>{
        const data = await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=18.5204303&lng=73.8567437&restaurantId="+resId+"&catalog_qa=undefined&submitAction=ENTER");
        const json = await data.json();
        console.log("JSON DATA IS:" + json);
        let info = json.data.cards[2].card.card.info;
        console.log("INFO DATA IS" + info.name);
        setResInfo(info);
        
    }

    return resInfo;
}

export default useRestraurantMenu;