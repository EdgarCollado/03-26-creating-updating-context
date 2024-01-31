import React, { useState, useContext } from "react";
import UserContext from "../UserContext";
import UserProvider from "./UserProvider";

const UserProfile = () => {
    const { user } = useContext(UserContext);
    return (
        <div>
            <h1>User Profile</h1>
            <h2>Name: {user.name}</h2>
            <h2>Age: {user.age}</h2>
        </div>
    );
}

export default UserProfile;