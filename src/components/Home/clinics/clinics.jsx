import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAllClinics } from '../../../slices/clinicSlice';

export default function Clinics() {
  const{clinicData, isLoading, errors} = useSelector((state)=> state.clinics)
  const dispatch = useDispatch();
  useEffect(()=>{
    dispatch(getAllClinics())
  }, [dispatch])
  
  const baseURL = "http://localhost:1337"
  return (
    <>
    <section className="existing_specializations pt-5">
    <div className="container">
    <h2>التخصصات الموجودة</h2>
    {clinicData?.data ? 
    <div className=' row'>
    {clinicData?.data?.map((clinic) => (
      <div key={clinic.id} className='col-md-3 col-sm-4 p-3'> 
          <article className='position-relative'>
            <img src={baseURL + clinic.attributes.image.data.attributes.url} alt=""  className=' w-100'/>
            <h4 className="badge fs-5 position-absolute top-0 start-100">{clinic.attributes.clinicName}</h4>
          </article>
          </div>
        ))}
    </div>
    : 
    <div className=' vh-100 d-flex justify-content-center align-items-center'>
     <p className=' fs-2 p-2 rounded-2 bg-danger text-bg-danger'>Sorry!!!!! No Data To Show Here </p> 
    </div>
    }
    </div>
    </section>
    </>
  )
}
