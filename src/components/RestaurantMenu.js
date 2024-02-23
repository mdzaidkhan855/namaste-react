
import ShimmerMenu from './Shimmer';
import { useParams } from 'react-router';
import useRestraurantMenu from '../utils/useRestraurantMenu';
import { useCategoryCards } from '../utils/useRestraurantMenu';
import RestaurantCategory from './RestaurantCategory';
import { useState } from 'react';

const RestaurantMenu = () => {    

    const [showIndex, setShowIndex] = useState(0);
    const {resId} = useParams();

    // Custom hook to fetch the data.
    const resInfo = useRestraurantMenu(resId);  
    
    const categoyCards = useCategoryCards(resId);

    console.log("Category Cards Length: " + categoyCards);
    const categories = categoyCards.filter(c=> c.card.card?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory")

    console.log("Category Cards: " + categories);

    if(resInfo === null) return <ShimmerMenu/>

    
    const{name, cuisines,avgRating,costForTwoMessage} = resInfo

   // console.log("Restaurant Menu :" + resInfo);

    return (
    
        <div className="text-center">
        
            <h1 className="font-bold my-6 text-2xl">{name}</h1>
            <p className="font-bold  text-lg">
                {cuisines === undefined ? '': cuisines.join(", ")} - {costForTwoMessage}
            </p>
            {/** catehory accordian */}
            {categories.map((category,index) =>
            (
                <RestaurantCategory
                    key={category?.card?.card.title}
                    data={category?.card?.card} 
                    showItems={index === showIndex ? true:false}
                    setShowIndex={()=>setShowIndex(index)}
                    />
            )
            )}
        </div>
    )
}

export default RestaurantMenu