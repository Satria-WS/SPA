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
import MainNavigation from "./shared/components/Navigation/MainNavigation";
//  <Route path="/" element={<Home />} />

function App() {
  return (
    <Router>
      <MainNavigation />
      <main>
      <Routes >
        <Route path="/" element={<Users/>}  />
        <Route path="/places/new" element={<NewPlaces />} />
        <Route path="/user/new" element={<Users />} />
        {/* <Route path="/Navigation/new" element={<MainNavigation/>}  /> */}
        <Route path="*" element={<Navigate to="/"/>} />
        </Routes>
        </main>
    </Router>
  );
}

export default App;
