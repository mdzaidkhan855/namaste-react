const RestaurantCard = (props)=>{
    const {resData} = props;
    //console.log(resData);
    const {action,accessibility,cuisine,star,delivery} = resData;
    //let randomstar = Math.random(5);
    return (
        <div className="res-card">
            <img 
                className="res-logo"
                alt="res-logo" 
                src="https://media.istockphoto.com/id/1530955921/photo/overhead-shot-of-a-vibrant-colorful-bowl-filled-with-a-variety-of-fresh-raw-vegetables.webp?s=170667a&w=0&k=20&c=k0B7fWD7dkCCIX5TGIfumkBfxL-PmGAKtsn7TpP1w98="></img>
            <h3>{accessibility.altText}</h3>
            <h4>{action.text}</h4>
            <h4>{star} stars</h4>
            <h4>{delivery} minutes</h4>
        </div>
    )
}

export default RestaurantCard;