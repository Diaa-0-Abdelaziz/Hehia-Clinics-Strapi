import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAllMedicalLabs } from '../../slices/MedicalSclice';
import { FaWindowClose } from "react-icons/fa";
import { FaPhone } from "react-icons/fa6";
import { FaLocationDot } from "react-icons/fa6";
import { Triangle } from 'react-loader-spinner'
export default function MedicalAnalysisLaboratory() {
    const [selectedMedical, setSelectedMedical] = useState(null);
  const {MedicalLabData, isLoading} = useSelector((state) => state.medicalLab)
  const dispatch = useDispatch();
  useEffect(()=>{
    dispatch(getAllMedicalLabs())
  }, [dispatch])
  const handleCardClick = (lab) => {
    setSelectedMedical(lab);
  };

  const handleCloseModal = () => {
    setSelectedMedical(null);
  };
    return (
        <section className="mt-5 pt-3 vh-100">
        <div className="container mt-5">
            <div className="row gy-4">
                {!isLoading ? MedicalLabData?.data?.map((lab) => (
                   <div className="col-lg-3 col-md-4 col-sm-6" key={lab.id}>
                   <div className="card text-center bg-dark text-white" onClick={() => handleCardClick(lab)}>
                       <div className="card-header p-0">
                           <p className="fs-5 mt-3 fw-bold p-0">{lab.attributes.LabName}</p>
                       </div>
                     </div>
               </div>
                )):
                <div className=' vh-100 d-flex justify-content-center align-items-center'> 
                <Triangle
                    visible={true}
                    height="80"
                    width="80"
                    color="var(--main-color)"
                    ariaLabel="triangle-loading"
                    wrapperStyle={{}}
                    wrapperClass=""/>
                </div> 
                }
  
            </div>
        </div>

        {selectedMedical && (
        <div className="lab-details  position-fixed top-0 start-0 bottom-0 end-0 d-flex justify-content-center align-items-center">
           <div className="card text-center bg-dark text-white">
                        <div className="card-header position-relative">
                            <p className="fs-5 fw-bold">{selectedMedical.attributes.LabName}</p>
                            <FaWindowClose onClick={handleCloseModal} className=' position-absolute end-0 top-0 m-2 fs-4'/>
                        </div>
                        <div className="card-body">
                        <p className="fs-5 fw-bold"><span className="ms-2">دكتور/</span>{selectedMedical.attributes.doctorName}</p>
                                <div>
                                  <p className="fs-6 fw-bold">{selectedMedical.attributes.description}</p>


                                    <p className="text-danger fw-bold">للإستفسار يرجى الإتصال على </p>
                                  {selectedMedical.attributes.phone1? 
                                  <p className="fs-6 fw-bold"><span className="ms-2 fs-5"><FaPhone/></span><a className="text-decoration-none text-primary fs-4" href={`tel:+2${selectedMedical.attributes.phone1}`}>{selectedMedical.attributes.phone1}</a></p>
                                  : ''}
                                  {selectedMedical.attributes.phone2? 
                                  <p className="fs-6 fw-bold"><span className="ms-2 fs-5"><FaPhone/></span><a className="text-decoration-none text-primary fs-4" href={`tel:+2${selectedMedical.attributes.phone2}`}>{selectedMedical.attributes.phone2}</a></p>
                                  : ''}
                                  <p className="fs-6 fw-bold"><span className="ms-2 fs-5"> <FaLocationDot/> </span> <a href={selectedMedical.attributes.locationURL}>{selectedMedical.attributes.location}</a></p>
                                
                                </div>
                             
                        </div>
                        <div className="card-footer text-info">
                        {selectedMedical.attributes.date_Of_Work}
                        </div>
                      </div>
        </div>
      )}
    </section>
  )
}
