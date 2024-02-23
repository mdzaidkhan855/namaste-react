import { useState } from "react";
import { useEffect } from "react";

const useRestraurantMenu = (resId)=>{

    const [resInfo, setResInfo] = useState([]);

    useEffect(()=>{
        fetchMenu();
    },[]);

    const fetchMenu = async ()=>{
        const data = await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=18.5204303&lng=73.8567437&restaurantId="+resId+"&catalog_qa=undefined&submitAction=ENTER");
        //console.log("JSON DATA IS:" + data);
        const json = await data.json();
        
        let info = json.data.cards[2].card.card.info;
       // let itemcategories = json.data.cards[4].groupedCard.cardGroupMap.REGULAR.cards[1].card.card.itemCards;
       // console.log(itemcategories[0].card.hideRestaurantDetails);
       // console.log("recommended size: "+ itemcategories.length);
        setResInfo(info);
        
    }

    return resInfo;
}

export const useCategoryCards = (resId)=>{

    const [categoyCards, setCategoyCards] = useState([]);

    useEffect(()=>{
        fetchMenu();
    },[]);

    const fetchMenu = async ()=>{
        const data = await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=18.5204303&lng=73.8567437&restaurantId="+resId+"&catalog_qa=undefined&submitAction=ENTER");
        //console.log("JSON DATA IS:" + data);
        const json = await data.json();
        
       // let info = json.data.cards[2].card.card.info;
        //let cards = json.data.cards[4].groupedCard.cardGroupMap.REGULAR.cards[1].card.card.itemCards;
        //console.log(itemcategories[0].card.hideRestaurantDetails);
       // console.log("recommended size: "+ itemcategories.length);
        let cards = json.data.cards[4].groupedCard.cardGroupMap.REGULAR.cards;
        
        setCategoyCards(cards);
        
    }

    return categoyCards;
}

export default useRestraurantMenu;