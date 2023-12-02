import { Link } from "react-router-dom"
import notFound from "../../assets/images/404-error-dribbble-800x600.gif"
const NotFound = () => {
  return (
    <div style={{textAlign:"center"}}>
        <img src={notFound} alt="" />
        <Link to="/">HOME</Link>
    </div>
  )
}

export default NotFound