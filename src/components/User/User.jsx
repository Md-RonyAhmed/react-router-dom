import { Link } from "react-router-dom";

/* eslint-disable react/prop-types */
const User = ({ user }) => {
  const { id, name, email } = user;
  return (
    <div style={{ border: "1px solid white", padding: "20px" }}>
      <h2>{id}</h2>
      <h3>{name}</h3>
      <p>{email}</p>
      <Link to={`/users/${id}`}>
        <button>User Details</button>
      </Link>
    </div>
  );
};

export default User;
