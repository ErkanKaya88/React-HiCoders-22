import "./App.css";
import Profile from "./components/Profile";
import Login from "./components/Login";
import Logout from "./components/Logout";
import { useAuth0 } from "@auth0/auth0-react";

function App() {
  const { isAuthenticated } = useAuth0();
  return (
    <div className="App bg-black d-flex justify-content-center align-items-center min-vh-100 ">
      {isAuthenticated ? (
        <div>
          <Profile /> <Logout />
        </div>
      ) : (
        <Login />
      )}
    </div>
  );
}

export default App;
