import star from "../Logos/star-half.svg";
const RestaurantCard = (props) => {
  return (
    <div className="res-card">
      <div>
        <h3> {props.store.storeName}</h3>
        <div className="address-container">
          <p>{props.store.street}</p>
          <p>{props.store.city + "," + props.store.state}</p>
        </div>
        <div>
          <p style={{ color: "#ee6794", fontWeight: "bold" }}> Shop Hours</p>
          <div className="rating-container">
            <img src={star} alt="star" />
            <h4 style={{ paddingLeft: "5px", marginTop: "0px" }}>
              {props.store.avgRating}
            </h4>
          </div>
        </div>
      </div>
      <div className="btn-container">
        <button className="btn btn-primary">Order Now</button>
        <p>Get Directions</p>
        <p>Call</p>
      </div>
    </div>
  );
};
export default RestaurantCard;
