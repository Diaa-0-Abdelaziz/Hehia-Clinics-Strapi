import { RouterProvider, createBrowserRouter } from 'react-router-dom'

import './App.css';
import Home from "./components/Home/Home";
import Layout from './Layout/Layout';
import Clinics from './components/clinics/clinics';
import ClinicsDetails from './components/clinicsDetails/clinicsDetails';
function App() {
  let routes =  createBrowserRouter([
    {
      path:"",
      element:<Layout/>,
      children:[
        {index:true, element:<Home/>},
        {path:'clinics', element:<Clinics/>},
        {path:'clinics/:name', element:<ClinicsDetails/>},
        // {path:'*', element:<Notfound/>}
      ]
    }
  ])
  return (
    <div className="App">
   <RouterProvider router={routes}></RouterProvider>
    </div>
  );
}

export default App;
