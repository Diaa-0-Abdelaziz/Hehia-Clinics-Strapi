import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { getClinicsDetails } from '../../slices/clinicSlice'
import { FaWindowClose } from "react-icons/fa";
import { FaPhone } from "react-icons/fa6";
import { FaLocationDot } from "react-icons/fa6";
import { Triangle } from 'react-loader-spinner'
export default function ClinicsDetails() {
  const [selectedDoctor, setSelectedDoctor] = useState(null);
  const {name} = useParams()
  const {clinicDataDetails, isLoading} = useSelector((state) => state.clinics)
  const dispatch = useDispatch();
  useEffect(()=>{
    dispatch(getClinicsDetails(name))
  }, [dispatch, name])
  const response = clinicDataDetails?.data?.attributes?.doctorName?.data
  const handleCardClick = (doctor) => {
    setSelectedDoctor(doctor);
  };

  const handleCloseModal = () => {
    setSelectedDoctor(null);
  };
  return (
    <>
       {!isLoading? 
    <section className="mt-5 pt-3 vh-100">
        <div className="container mt-5">
        {response !== undefined && response.length > 0 ?
            <div className="row gy-4">
                {response?.map((doctor) => (
                   <div className="col-lg-3 col-md-4 col-sm-6" key={doctor.id}>
                   <div className="card text-center bg-dark text-white" onClick={() => handleCardClick(doctor)}>
                       <div className="card-header p-0">
                           <p className="fs-5 mt-3 fw-bold p-0"><span className="ms-2">دكتور/</span>{doctor.attributes.name}</p>
                       </div>
                     </div>
               </div>
                ))}
  
            </div>
            : 
            <div className=' vh-100 d-flex justify-content-center align-items-center'>
             <p className=' fs-2 p-2 rounded-2 bg-danger text-bg-danger'>Sorry!!!!! No Data To Show Here </p> 
            </div>
            }
        </div>
        
        {selectedDoctor && (
        <div className=" doctor-details  position-fixed top-0 start-0 bottom-0 end-0 d-flex justify-content-center align-items-center">
           <div className="card text-center bg-dark text-white">
                        <div className="card-header position-relative">
                            <p className="fs-5 fw-bold"><span className="ms-2">دكتور/</span>{selectedDoctor.attributes.name}</p>
                            <FaWindowClose onClick={handleCloseModal} className=' position-absolute end-0 top-0 m-2 fs-4'/>
                        </div>
                        <div className="card-body">
                         
                                <div>
                                  <p className="fs-6 fw-bold">{selectedDoctor.attributes.description}</p>
                                  {selectedDoctor.attributes.NoPhone? 
                                  <p className="text-danger fw-bold">{selectedDoctor.attributes.NoPhone}</p>
                                  :  <p className="text-danger fw-bold">للحجز والإستفسار يرجى الإتصال على </p>}
                                  {selectedDoctor.attributes.phone1? 
                                  <p className="fs-6 fw-bold"><span className="ms-2 fs-5"><FaPhone/></span><a className="text-decoration-none text-primary fs-4" href={`tel:+2${selectedDoctor.attributes.phone1}`}>{selectedDoctor.attributes.phone1}</a></p>
                                  : ''}
                                  {selectedDoctor.attributes.phone2? 
                                  <p className="fs-6 fw-bold"><span className="ms-2 fs-5"><FaPhone/></span><a className="text-decoration-none text-primary fs-4" href={`tel:+2${selectedDoctor.attributes.phone2}`}>{selectedDoctor.attributes.phone2}</a></p>
                                  : ''}
                                  <p className="fs-6 fw-bold"><span className="ms-2 fs-5"> <FaLocationDot/> </span> <a href={selectedDoctor.attributes.locationURL}>{selectedDoctor.attributes.location}</a></p>
                                
                                </div>
                             
                        </div>
                        <div className="card-footer text-info">
                        {selectedDoctor.attributes.date_Of_Work}
                        </div>
                      </div>
        </div>
      )}
    </section>
    : <div className=' vh-100 d-flex justify-content-center align-items-center'> 
     <Triangle
          visible={true}
          height="80"
          width="80"
          color="var(--main-color)"
          ariaLabel="triangle-loading"
          wrapperStyle={{}}
          wrapperClass=""/>
    </div> }
    </>
  )
}
