import React from "react";
import "./css/PlaceList.css";
import Card from "../../shared/components/UIEelement/Card";
import PlaceItem from "./PlaceItem";

const PlaceList = ({ items }) => {
  if (items.length === 0) {
    return (
      <>
        <div className="place-list center">
          <h2>No place found. Maybe create one ?</h2>
        </div>
        <div className="place-list center">
          <button> Share place</button>
        </div>
      </>
    );
  }

  return (
    <ul className="place-list">
      {items.map((place) => (
        <PlaceItem
          key={place.id}
          id={place.id}
          image={place.imageUrl}
          title={place.title}
          description={place.description}
          address={place.address}
          creatorId={place.creator}
          coordinates={place.location}
        />
      ))}
    </ul>
  );
};
export default PlaceList;
