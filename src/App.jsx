import { Link } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";

function App() {
  return (
    <>
    <NavBar/>
      <h1>React Router Dom</h1>
      <h2>This is Home page</h2>
      <Link to={"/login"}>
        <button>Login</button>
      </Link>
      <Link to={"/about"}>
        <button>About</button>
      </Link>
    </>
  );
}

export default App;
