import RestaurantCard from "./RestaurantCard";
import { stores } from "../utils/constants";
const Body = () => {
  return (
    <div>
      <div className="search"> Search</div>
      <div className="res-container">
        {stores.map((store) => (
          <RestaurantCard key={store.id} store={store} />
        ))}
      </div>
    </div>
  );
};
export default Body;
