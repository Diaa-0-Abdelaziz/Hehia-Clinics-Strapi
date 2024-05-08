import { RouterProvider, createBrowserRouter } from 'react-router-dom'

import './App.css';
import Home from "./components/Home/Home";
import Layout from './Layout/Layout';
import Clinics from './components/clinics/clinics';
import ClinicsDetails from './components/clinicsDetails/clinicsDetails';
import MedicalAnalysisLaboratory from './components/medical-analysis-laboratory/medical-analysis-laboratory';
import RadiologyLaboratorie from './components/radiology-laboratorie/RadiologyLaboratorie';
import ContactUs from './components/contactUs/contactUs';
import { useDispatch } from 'react-redux';
import { setJWT, setUserData } from './slices/tokenSlice';
import Cookies from 'js-cookie';
import { useEffect } from 'react';
import MyAccount from './components/MyAccount/MyAccount';
function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    const jwt = Cookies.get('jwt');
    if (jwt) {
      dispatch(setJWT(jwt));
    }

    const userDataString = Cookies.get('user');
    if (userDataString) {
      try {
        const userData = JSON.parse(userDataString);
        dispatch(setUserData(userData));
      } catch (error) {
        console.error('Error parsing user data:', error);
      }
    }
  }, [dispatch]);
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
        {path:'MyAccount', element:<MyAccount/>},
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
