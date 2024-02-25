import RestaurantCard,{withPromotedLeb} from "./RestaurantCard";
import resList from "../utils/mockData";
import { useEffect, useState, useContext } from "react";
import resList from "../utils/mockData";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";


const Body = ()=>{
   const [listOfRestaurant,setListOfRestaurant] = useState([]);
   const [filteredRestaurant,setFilteredRestaurant] = useState([]);

   const[searchText,setSearchText] = useState("");

   const RestaurantCardWithPromoted = withPromotedLeb(RestaurantCard);

   useEffect(()=>{
        console.log("Body USe Effect being called");
        fetchData();
   },[] );

   const fetchData = async ()=>{
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.61610&lng=73.72860&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
        const json = await data.json();
        
        let info = json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants;
         console.log(info);
        setListOfRestaurant(info);
        setFilteredRestaurant(info);
    }

    const onlineStaus = useOnlineStatus();
    if(onlineStaus === false) return <h1>Looks like you's offline.Please check your internet</h1>

    const {loggedInUser,setUserName} = useContext(UserContext);
 
    return listOfRestaurant.length === 0 ? <Shimmer/> : (
        <div className="body">
            
            <div className="filter flex">
                <div className="search m-4 p-4">
                    <input type="text" className="border border-solid border-black border-b-4" value={searchText} 
                        onChange={(e)=>setSearchText(e.target.value)}
                    />
                    <button 
                        className="px-4 py-2 bg-green-100 m-4 rounded-lg"
                      onClick={()=>{
                        
                        let filteredList = listOfRestaurant.filter((res) => {
                                    //console.log(res);
                                    return res.info.name.toLowerCase().includes(searchText.toLowerCase())
                                });
                        setFilteredRestaurant(filteredList);

                    }}>Search</button>
                    
                </div>
                <div className="m-4 p-4 flex items-center">
                    <button className="px-4 py-2 bg-gray-100 rounded-lg" type="button" onClick={()=>{
                        //console.log("Rating: " + res.info.name);
                        let filteredList = listOfRestaurant.filter((res) => res.info.avgRating > 4);
                        
                        //setListOfRestaurant(filteredList);
                        setFilteredRestaurant(filteredList);
                        
                    }}>Top rated restaurant</button>
                </div> 
                <div className="m-4 p-4 flex items-center ">
                    <label className="m-2">User Name: </label>
                    <input className="border border-solid border-black border-b-4"
                    value={loggedInUser}
                     type="text" onChange={(e)=>setUserName(e.target.value)}/>
                </div>
                
            </div>
            <div className="flex flex-wrap justify-center">
                {
                    filteredRestaurant.map((restaurant)=>
                        (                        
                            <Link 
                                key={restaurant.info.id} 
                                to={"/restaurants/" + restaurant.info.id}
                            >   
                                {                                    
                                    restaurant.info.avgRating > 4? 
                                        (<RestaurantCardWithPromoted resData={restaurant}/>
                                        ):
                                        (<RestaurantCard  resData={restaurant}/>
                                        )
                                }                                
                            </Link>
                        )
                    )
                }               
                
            </div>
        </div>
    )
}

export default Body;