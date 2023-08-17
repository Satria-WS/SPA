import React from "react";
import "./UserItem.css";
const UserItem = ({ id, image, name, placeCount }) => {
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
