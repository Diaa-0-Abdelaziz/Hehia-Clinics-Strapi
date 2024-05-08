import React, { useEffect } from 'react'
import photo from "../../../images/doctor.jpg"
import { useDispatch, useSelector } from 'react-redux'
import { getAllDoctors } from '../../../slices/doctorSlice';
export default function DoctorCaursel() {
   const{doctorData} = useSelector((state)=> state.doctors)
   const dispatch = useDispatch();
   useEffect(()=>{
    dispatch(getAllDoctors())
   }, [dispatch])
   return (
    <section className="doctors py-5">
      <div className="container">
        <h3>الأطباء الموجودون فى الموقع</h3>
        <div id="carouselExampleControls" className="carousel slide w-100 text-center my-5" data-bs-ride="carousel">
  <div className="carousel-inner">
    {doctorData?.data?.map((doctor, index)=>(
      <div key={index} className={`carousel-item ${index === 0 ? 'active' : ''}`}>
        {doctor && (
          <>
            <img src={photo} className="d-block m-auto rounded-circle my-3" alt="..."/>
            <h5 className="fs-3">د/ {doctor.attributes.name} </h5>
            <p className="fs-5 fw-bold">تخصص {doctor.attributes.clinicName.data.attributes.clinicName}  </p>
          </>
        )}
      </div>
    ))}
  </div>
</div>
      </div>
    </section>
  )
}
