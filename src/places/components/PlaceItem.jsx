import React , {useState} from "react";
import Card from "../../shared/components/UIEelement/Card";
import Button from "../../shared/components/FormElements/Button";
import "./css/PlaceItem.css";

const PlaceItem = ({
  id,
  title,
  image,
  description,
  address,
  creatorId,
  coordinates,
}) => {
  const [showMap, setShowMap] = useState(false);
  
  const openMapHandler = () => setShowMap(true);
  const closeMapHandler = () => setShowMap(true);
  
  return (
    <li className="place-item">
      <Card>
        <div className="place-item__image">
          <img src={image} alt={title} />
        </div>
        <div className="place-item__info">
          <h2>{title}</h2>
          <h3>{address}</h3>
          <p>{description}</p>
        </div>
        <div className="place-item__actions">
          <Button inverse>VIEW ON MAP</Button>
          <Button to={`/places/${id}`}>EDIT</Button>
          <Button danger>DELETE</Button>
        </div>
      </Card>
    </li>
  );
};
export default PlaceItem;
