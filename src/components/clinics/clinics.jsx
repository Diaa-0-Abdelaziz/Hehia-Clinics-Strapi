import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAllClinics } from '../../slices/clinicSlice';
import { Link } from 'react-router-dom';

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
    <div className=' row'>
    {clinicData?.data?.map((clinic) => (
      <div key={clinic.id} className='col-lg-3 col-md-4 col-sm-6 p-3'> 
      <Link to={`./${clinic.attributes.clinicName}`}>
          <article className='position-relative'>
            <img src={baseURL + clinic.attributes.image.data.attributes.url} alt=""  className=' w-100'/>
            <h4 className="badge fs-5 position-absolute top-0 start-100">{clinic.attributes.clinicName}</h4>
          </article>
          </Link>
          </div>
        ))}
    </div>
    </div>
    </section>
    </>
  )
}
