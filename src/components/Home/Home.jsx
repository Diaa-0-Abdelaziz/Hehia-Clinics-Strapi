import React from 'react'
import Main from './main/main'
import Cause from './main_cause/Cause'
import Clinics from './clinics/clinics'
import ClinicsTable from './clinicsTable/ClinicTable'
import DoctorCaursel from './doctorCaursel/DoctorCaursel'
import PlaneWork from './planeWork/PlaneWork'
import OurVision from './OurVision/OurVision'

export default function Home() {
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
