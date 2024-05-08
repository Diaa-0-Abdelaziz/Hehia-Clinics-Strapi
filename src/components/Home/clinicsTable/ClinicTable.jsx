import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAllClinics } from '../../../slices/clinicSlice';

export default function ClinicsTable() {
  const{clinicData} = useSelector((state)=> state.clinics)
  const dispatch = useDispatch();
  useEffect(()=>{
    dispatch(getAllClinics())
  }, [dispatch])
  return (
    <>
    <section className="pt-5">
    <div className="container">
    <h3>العيادات التي تم حصرها إلى الآن</h3>
    {clinicData?.data ? 
    <table className="table table-dark">
            <thead>
              <tr>
                <th scope="col">التخصص</th>
                <th scope="col">العدد</th>
              </tr>
            </thead>
            <tbody>
    {clinicData?.data?.map((clinic) => (
              <tr  key={clinic.id}>
                <td>{clinic.attributes.clinicName}</td>
                <td>{clinic?.attributes?.doctorName?.data.length}</td>
              </tr>
            ))}
            </tbody>
          </table>
          : 
          <div className='  d-flex justify-content-center align-items-center'>
           <p className=' fs-2 p-2 rounded-2 bg-danger text-bg-danger'>Sorry!!!!! No Data To Show Here </p> 
          </div>
          }
    </div>
 
    </section>
    </>
  )
}
