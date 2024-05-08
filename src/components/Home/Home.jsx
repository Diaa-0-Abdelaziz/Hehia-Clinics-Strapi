import React from 'react'
import Main from './main/main'
import Cause from './main_cause/Cause'
import Clinics from './clinics/clinics'
import ClinicsTable from './clinicsTable/ClinicTable'
import DoctorCaursel from './doctorCaursel/DoctorCaursel'
import PlaneWork from './planeWork/PlaneWork'
import OurVision from './OurVision/OurVision'
// import Cookies from 'js-cookie';
// import { jwtDecode } from "jwt-decode";
export default function Home() {
  // const jwt = Cookies.get('jwt')
  // console.log(jwt)
  
  // const storedJwt = Cookies.get('jwt');
  // const storedUserData = JSON.parse(Cookies.get('user'));
  
//   console.log(storedJwt); // يطبع الـ JWT المحفوظ في الـ cookies
//   console.log(storedUserData); // يطبع بيانات المستخدم المحفوظة في الـ cookies
//   const {id} = jwtDecode(storedJwt)
//   console.log(id)

// if(id === storedUserData.id){
//   console.log(true)
// }


  return (
   <>
   <Main/>
   <Cause/>
   <Clinics/>
   <ClinicsTable/>
   <DoctorCaursel/>
   <PlaneWork/>
   <OurVision/>
   </>
  )
}
