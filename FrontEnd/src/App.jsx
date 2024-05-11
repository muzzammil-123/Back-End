import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css"; // Import CSS file for styling

export default function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios
      .get("/api/user")
      .then((response) => {
        setUsers(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div>
      <h1>Hello World!</h1>
      <div className="user-container">
        {users.map((user) => (
          <div key={user.id} className="user-card">
            <h2>{user.name}</h2>
            <p>Email: {user.email}</p>
            <p>Phone: {user.phone_number}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
