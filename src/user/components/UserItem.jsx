import React from "react";
import Avatar from "../../shared/components/UIEelement/Avatar";
import Card from "../../shared/components/UIEelement/Card";
import { Link } from "react-router-dom";
import "./UserItem.css";

const UserItem = ({ id, image, name, placeCount }) => {
  if (true) {
    return (
      <li className="user-item">
        <Card className="user-item__content">
          <Link to={`/${id}/places`}>
            <div className="user-item__image">
              <Avatar image={image} alt={name} />
            </div>
            <div className="user-item__info">
              <h2>{name}</h2>
              <h3>
                {placeCount} {placeCount === 1 ? "place" : "places"}
              </h3>
            </div>
          </Link>
        </Card>
      </li>
    );
  }

  return (
    <li>
      <div>{id}</div>
      <div>{image}</div>
      <div>{name}</div>
      <div>{placeCount}</div>
    </li>
  );
};
export default UserItem;
