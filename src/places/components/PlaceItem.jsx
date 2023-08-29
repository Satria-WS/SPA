import React, { useState, useEffect } from "react";
import Card from "../../shared/components/UIEelement/Card";
import Button from "../../shared/components/FormElements/Button";
import Modal from "../../shared/components/UIEelement/Modal";
import Map from "../../shared/components/UIEelement/Map";
import LazyLoad from "react-lazyload";

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
  //useState
  const [showMap, setShowMap] = useState(false);
  const [mapLoaded, setMapLoaded] = useState(false);

  //function handler
  const openMapHandler = () => setShowMap(true);
  const closeMapHandler = (event) => (
    event?.preventDefault?.(), setShowMap(false)
  );

  // const closeMapHandler = (event) => (event.preventDefault(), setShowMap(false));
  // const closeMapHandler = (event) => {
  //   event.preventDefault();
  //   setShowMap(false);
  // }

  // console.log("mapLoaded?", mapLoaded);

  return (
    <React.Fragment>
      <Modal
        show={showMap}
        onCancel={closeMapHandler}
        header={address}
        contentClass="place-item__modal-content"
        footerClass="place-item__modal-actions"
        footer={<Button onClick={closeMapHandler}>Close</Button>}
      >
        {/* render map */}
        <div className="map-container">
          {/* <Map center={coordinates} zoom={16}/> */}
          <LazyLoad
            height={200}
            offset={100}
            style={{ width: "100%", height: "100%" }}
          >
            {mapLoaded ? (
              <h2>Loading Map...</h2>
            ) : (
              <div style={{ width: "100%", height: "100%" }}>
                <iframe
                  title="map"
                  width="100%"
                  height="100%"
                  frameBorder="0"
                  scrolling="no"
                  marginHeight="0"
                  marginWidth="0"
                  src={
                    "https://maps.google.com/maps?q=" +
                    coordinates.lat.toString() +
                    "," +
                    coordinates.lng.toString() +
                    "&t=&z=15&ie=UTF8&iwloc=&output=embed"
                  }
                  loading="lazy"
                  onLoad={() => {
                    console.log("Map iframe loaded!");
                    console.log("mapLoaded?", mapLoaded);
                    setMapLoaded(false);
                  }}
                ></iframe>
                <script
                  type="text/javascript"
                  src="https://embedmaps.com/google-maps-authorization/script.js?id=5a33be79e53caf0a07dfec499abf84b7b481f165"
                ></script>
              </div>
            )}
          </LazyLoad>
        </div>
      </Modal>
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
            <Button inverse onClick={openMapHandler}>
              VIEW ON MAP
            </Button>
            <Button to={`/places/${id}`}>EDIT</Button>
            <Button danger>DELETE</Button>
          </div>
        </Card>
      </li>
    </React.Fragment>
  );
};
export default PlaceItem;
