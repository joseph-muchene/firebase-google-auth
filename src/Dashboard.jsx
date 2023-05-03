import { useState } from "react";

function Dashboard() {
  const signedInUser = JSON.parse(localStorage.getItem("auth"));

  const [currentUser, setCurrentUser] = useState(signedInUser);

  return (
    <div>
      <h1>{currentUser?.displayName}</h1>
      <img src={currentUser?.photoURL} alt="" />
    </div>
  );
}

export default Dashboard;
