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
        <div className="res-card">
            <img 
                className="res-logo"
                alt="res-logo" 
                src={imageRoot + cloudinaryImageId}></img>
            <h3>{name}</h3>
            <h4>{cuisines.join(", ")}</h4>
            <h4>{avgRating} stars</h4>
            <h4>{costForTwo}</h4>
            <h4>{sla.deliveryTime} minutes</h4>
        </div>
    )
}

export default RestaurantCard;