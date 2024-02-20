import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockData";
import { useEffect, useState } from "react";
import resList from "../utils/mockData";
import Shimmer from "./Shimmer";


const Body = ()=>{
   const [listOfRestaurant,setListOfRestaurant] = useState([]);
   const [filteredRestaurant,setFilteredRestaurant] = useState([]);

   const[searchText,setSearchText] = useState("");

   
    
   useEffect(()=>{
        fetchData();
   },[] );

   const fetchData = async ()=>{
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.61610&lng=73.72860&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
        const json = await data.json();
        //console.log(json.data.cards[0].card.card.imageGridCards.info);
        //let info = json.data.cards[0].card.card.imageGridCards.info;
        let info = json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants;
       // info = {...info , star:5};
    //    info = info.map((res)=>{
    //             let randomstar = Math.random(5);
    //             res = {...res , star:randomstar, id:randomstar};
    //             console.log(res);
               
    //         })
        setListOfRestaurant(info);
        setFilteredRestaurant(info);
    }
   //console.log("body rendered");
//    if(list.length === 0){
//     return <Shimmer/>
//    }
    return listOfRestaurant.length === 0 ? <Shimmer/> : (
        <div className="body">
            
            <div className="filter">
                <div className="search">
                    <input type="text" className="search-box" value={searchText} 
                        onChange={(e)=>setSearchText(e.target.value)}
                    />
                    <button onClick={()=>{
                        
                        let filteredList = listOfRestaurant.filter((res) => 
                                    res.info.name.toLowerCase().includes(searchText.toLowerCase()));
                        setFilteredRestaurant(filteredList);

                    }}>Search</button>
                    
                </div>
                <button className="filter-btn" type="button" onClick={()=>{
                    
                    let filteredList = listOfRestaurant.filter((res) => res.star > 4);
                    
                    setListOfRestaurant(filteredList);
                    
                }}>Top rated restaurant</button>
            </div>
            <div className="res-container">
                {
                    filteredRestaurant.map((restaurant)=><RestaurantCard key={restaurant.info.id} resData={restaurant}/>)
                }               
                
            </div>
        </div>
    )
}

export default Body;