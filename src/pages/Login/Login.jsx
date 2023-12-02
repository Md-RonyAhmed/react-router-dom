import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div>
      <h1>This is Login page</h1>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
      </ul>
    </div>
  );
};

export default Login;
