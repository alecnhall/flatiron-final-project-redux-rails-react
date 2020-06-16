import React from "react";
import Nav from "./Nav";

const Profile = (props) => {
  return (
    <div>
      <Nav
        loggedInStatus={props.loggedInStatus}
        handleLogout={props.handleLogout}
      />
      <h1>Dashboard</h1>
      <h1>Status: {props.loggedInStatus}</h1>
    </div>
  );
};

export default Profile;
