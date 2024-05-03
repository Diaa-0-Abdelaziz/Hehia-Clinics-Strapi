import { RouterProvider, createBrowserRouter } from 'react-router-dom'

import './App.css';
import Home from "./components/Home/Home";
import Layout from './Layout/Layout';
import Clinics from './components/clinics/clinics';
import ClinicsDetails from './components/clinicsDetails/clinicsDetails';
import MedicalAnalysisLaboratory from './components/medical-analysis-laboratory/medical-analysis-laboratory';
import RadiologyLaboratorie from './components/radiology-laboratorie/RadiologyLaboratorie';
import ContactUs from './components/contactUs/contactUs';
function App() {
  let routes =  createBrowserRouter([
    {
      path:"",
      element:<Layout/>,
      children:[
        {index:true, element:<Home/>},
        {path:'clinics', element:<Clinics/>},
        {path:'Medical-Analysis-Laboratory', element:<MedicalAnalysisLaboratory/>},
        {path:'Radiology-Laboratorie', element:<RadiologyLaboratorie/>},
        {path:'Contact-Us', element:<ContactUs/>},
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
