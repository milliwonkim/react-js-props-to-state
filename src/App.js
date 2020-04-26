import React, { useState } from "react";
import Profile from './Profile';
import "./styles.css";

export default function App() {

  const [state, setState] = useState({
    name: "Param",
    email: "param@gmail.com"
  });

  const handleChange = () => {
    setState({
      name: "Vennila",
      email: "vennila@gmail.com"
    });
  };

  return (
    <div className="App">
      <Profile {...state} />
      <button onClick={handleChange}>Change Profile</button>
    </div>
  );
}
