import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Login from "../pages/Login/Login";
import NotFound from "../pages/NotFound/NotFound";
import About from "../pages/About/About";

const routes = createBrowserRouter([
    {
        path:"/",
        element:<App/>
    },
    {
        path:"/login",
        element:<Login/>
    },
    {
        path:"/about",
        element:<About/>
    },
    {
        path:"*",
        element:<NotFound/>
    }
]);

export default routes
