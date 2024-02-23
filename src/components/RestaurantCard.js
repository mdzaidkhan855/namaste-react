const RestaurantCard = (props)=>{
    const {resData} = props;
    //console.log(resData);
   // const {action,accessibility,cuisine,star,delivery,imageId} = resData;
    //let randomstar = Math.random(5);
    const {
        cloudinaryImageId,
        name,
        avgRating,
        cuisines,
        costForTwo,
        sla
    }= resData.info; 
    const imageRoot = "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/";
    return (
        <div className="m-4 p-4 w-[250px] bg-gray-100 rounded-lg hover:bg-gray-400">
            <img 
                className="rounded-lg"
                alt="res-logo" 
                src={imageRoot + cloudinaryImageId}></img>
            <h3 className="font-bold py-2 text-lg">{name}</h3>
            <h4 className="">{cuisines.join(", ")}</h4>
            <h4>{avgRating} stars</h4>
            <h4>{costForTwo}</h4>
            <h4>{sla.deliveryTime} minutes</h4>
        </div>
    )
}

// Create higher order card, which takes Restaurant card and return higher Res card

export const withPromotedLeb = (RestaurantCard)=>{
    return (props)=>{
        return (
            <div>
                <label className="absolute bg-black text-white m-2 p-2 rounded">Promoted</label>
                <RestaurantCard {...props}/>
            </div>
        )
    }
}

export default RestaurantCard;