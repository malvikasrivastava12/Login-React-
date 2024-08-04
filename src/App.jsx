import "./App.css";
import LoginPage from "./Components/LoginPage.jsx";

import {RouterProvider,  createBrowserRouter } from "react-router-dom";
import HomePage from "./homePage.jsx";

const router=createBrowserRouter([
  {path:"/",element:<LoginPage/>},
  {path:"/home",element:<HomePage/>}
]);
function App() {
  
  return (
    <>
<RouterProvider router={router}></RouterProvider>
    </>
  );
}

export default App;
