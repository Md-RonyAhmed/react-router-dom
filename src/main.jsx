import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { RouterProvider } from "react-router-dom";
import routes from "./routes/routes.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={routes}>
      <App />
    </RouterProvider>
  </React.StrictMode>
);

/**------------------------------
 * step-1: create a vite project
 * step-2: yarn add react-router-dom
 * step-3: create pages,routes, components folder and file
 * step-4: go to routes file and create a hook createBrowserRouter([
 * {
 *  path: the url router path,
 *  element: the element to show in the UI, it can be any jsx element or components
 * },
 * {
 * }
 * ])
 * step-5: go to main.jsx and wrap the home or app component with RouterProvider and pass a props caller router={routes}
 * ------------------------------
 */
