import React from "react";
import "./UserList.css";
import UserItem from "./UserItem";

const dummerUserItem = [
  { id: "1", name: "dragon", image: "dragonImage", places: "mars" },
  { id: "1", name: "rabbit", image: "rabbitImage", places: "Jupiter" },
  { id: "1", name: "Ant", image: "AntImage", places: "Moon" },
];

const UserList = ({ item }) => {
  if (item.length === 0) {
  // if (false) {
    return (
      <div className="center">
        <h2>No users Tangina mo</h2>
      </div>
    );
  }

  return (
    <ul className="users-list">
      {item.map((user, id) => (
        <UserItem
          key={id}
          id={id}
          image={user.image}
          name={user.name}
          placeCount={user.places}
        />
      ))}
    </ul>
  );
};
export default UserList;
