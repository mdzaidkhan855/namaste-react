
import ShimmerMenu from './Shimmer';
import { useParams } from 'react-router';
import useRestraurantMenu from '../utils/useRestraurantMenu';

const RestaurantMenu = () => {    
    const {resId} = useParams();

    // Custom hook to fetch the data.
    const resInfo = useRestraurantMenu(resId);  
    

    if(resInfo === null) return <ShimmerMenu/>

    const{name, cuisines,avgRating} = resInfo

    return (
    
        <div className="menu">
        
        <h1>{name}</h1>
            <h2>{cuisines}</h2>
            <ul>
                <li>{avgRating} stars</li>
                <li></li>
            </ul>
        </div>
    )
}

export default RestaurantMenu