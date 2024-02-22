import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockData";
import { useEffect, useState } from "react";
import resList from "../utils/mockData";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";


const Body = ()=>{
   const [listOfRestaurant,setListOfRestaurant] = useState([]);
   const [filteredRestaurant,setFilteredRestaurant] = useState([]);

   const[searchText,setSearchText] = useState("");

   

   useEffect(()=>{
        console.log("Body USe Effect being called");
        fetchData();
   },[] );

   const fetchData = async ()=>{
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.61610&lng=73.72860&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
        const json = await data.json();
        
        let info = json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants;
       //  console.log(info);
        setListOfRestaurant(info);
        setFilteredRestaurant(info);
    }

    const onlineStaus = useOnlineStatus();
    if(onlineStaus === false) return <h1>Looks like you's offline.Please check your internet</h1>
 
    return listOfRestaurant.length === 0 ? <Shimmer/> : (
        <div className="body">
            
            <div className="filter">
                <div className="search m-4 p-4">
                    <input type="text" className="border border-solid" value={searchText} 
                        onChange={(e)=>setSearchText(e.target.value)}
                    />
                    <button onClick={()=>{
                        
                        let filteredList = listOfRestaurant.filter((res) => {
                                    //console.log(res);
                                    return res.info.name.toLowerCase().includes(searchText.toLowerCase())
                                });
                        setFilteredRestaurant(filteredList);

                    }}>Search</button>
                    
                </div>
                <button className="filter-btn" type="button" onClick={()=>{
                    //console.log("Rating: " + res.info.name);
                    let filteredList = listOfRestaurant.filter((res) => res.info.avgRating > 4);
                    
                    //setListOfRestaurant(filteredList);
                    setFilteredRestaurant(filteredList);
                    
                }}>Top rated restaurant</button>
            </div>
            <div className="res-container">
                {
                    filteredRestaurant.map((restaurant)=><Link key={restaurant.info.id} to={"/restaurants/" + restaurant.info.id}><RestaurantCard  resData={restaurant}/></Link>)
                }               
                
            </div>
        </div>
    )
}

export default Body;