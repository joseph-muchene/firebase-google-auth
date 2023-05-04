import { useState } from "react";
import Navbar from "./components/Navbar";
import Articles from "./components/Articles";

function Dashboard() {
  const signedInUser = JSON.parse(localStorage.getItem("auth"));

  const [currentUser, setCurrentUser] = useState(signedInUser);

  return (
    <div>
      {/* <h1>{currentUser?.displayName}</h1>
      <img src={currentUser?.photoURL} alt="" /> */}

      <Navbar />
      <div className="container">
        <h1 className="mx-4 p-4">Welcome {currentUser.displayName}</h1>
      </div>
      <Articles />
    </div>
  );
}

export default Dashboard;
