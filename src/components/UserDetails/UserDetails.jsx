/* eslint-disable no-unused-vars */
import { useLoaderData } from "react-router-dom"

const UserDetails = () => {
const {id,name, email,phone}= useLoaderData();
  return (
    <div style={{ border: "1px solid white", padding: "20px" }}>
      <h2>{id}</h2>
      <h3>{name}</h3>
      <p>{email}</p>
      <small>{phone}</small>
    </div>
  )
}

export default UserDetails