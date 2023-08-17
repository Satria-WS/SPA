import { useState } from "react";
import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Users from "./user/pages/Users";
import NewPlaces from "./places/pages/NewPlaces";
import UserList from "./user/components/UserList";
import UserItem from "./user/components/UserItem"
//  <Route path="/" element={<Home />} />

function App() {
  return (
    <Router>
      <Routes >
        <Route path="/" element={<Users/>}  />
        <Route path="/places/new" element={<NewPlaces />} />
         <Route path="/user/UserList" element={<UserList/>}  />
        <Route path="*" element={<Navigate to="/"/>} />
      </Routes>
    </Router>
  );
}

export default App;
