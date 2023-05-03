import "./App.css";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from "./config";
import { useNavigate } from "react-router-dom";
function App() {
  const navigate = useNavigate();

  const provider = new GoogleAuthProvider();
  const SignInWithGoogle = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        // The signed-in user info.
        const user = result.user;

        localStorage.removeItem("auth");

        localStorage.setItem("auth", JSON.stringify(user));

        if (result && user) {
          navigate("/dashboard");
        }
      })
      .catch((error) => {
        console.log("Error has been detected");
      });
  };
  return (
    <>
      <button onClick={SignInWithGoogle}>SignIn with Google</button>
    </>
  );
}

export default App;
