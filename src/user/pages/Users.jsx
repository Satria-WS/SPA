import UserList from "../components/UserList";

const Users = () => {
  const dragonImage = "https://www.shutterstock.com/shutterstock/photos/2265889903/display_1500/stock-vector-hand-drawn-engraving-pen-and-ink-dragon-head-vintage-vector-illustration-2265889903.jpg";
  const USERS = [
    { id: "1", name: "dragon", image: dragonImage || "dragonImage", places: "mars" },
    // { id: "1", name: "rabbit", image: "rabbitImage", places: "Jupiter" },
    // { id: "1", name: "Ant", image: "AntImage", places: "Moon" },
  ];
  return <UserList item={USERS} />;
};
export default Users;
