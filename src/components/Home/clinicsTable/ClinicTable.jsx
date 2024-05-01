import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAllClinics } from '../../../slices/clinicSlice';

export default function ClinicsTable() {
  const{clinicData, isLoading, errors} = useSelector((state)=> state.clinics)
  const dispatch = useDispatch();
  useEffect(()=>{
    dispatch(getAllClinics())
  }, [dispatch])
  return (
    <>
    <section className="pt-5">
    <div className="container">
    <h3>العيادات التي تم حصرها إلى الآن</h3>
    <table className="table table-dark">
            <thead>
              <tr>
                <th scope="col">التخصص</th>
                <th scope="col">العدد</th>
              </tr>
            </thead>
            <tbody>
    {clinicData?.data?.map((clinic) => (
        // console.log(clinic?.attributes?.doctorName?.data.length)
              <tr  key={clinic.id}>
                <td>{clinic.attributes.clinicName}</td>
                <td>{clinic?.attributes?.doctorName?.data.length}</td>
              </tr>
            ))}
            </tbody>
          </table>
    </div>
 
    </section>
    </>
  )
}
