export default function Card({image,star,review,country,name,price,openspots}) {
    let badgeValue;
    if(openspots==0)
    {
        badgeValue="SOLD OUT";
    }
    else if(country.toLowerCase()=='online')
    {
        badgeValue="ONLINE";
    }
    return (
        <div className="card">
        {badgeValue && <div className="badge">{badgeValue}</div>}
        <img src={image} className="player" alt="test"/>
        
        <div className="star">
        <img src="./images/star.png"/>
        <div className="rating">{star}</div>
        <div className="country">
        ({review})-{country}
        </div>
        </div>
        <div className="playername">
        {name}
        </div> 
        <div className="price-section">
        <div className="price">From {price}$</div>
        <div className="person"> / person</div>
        
        </div>
        </div>
    )
}