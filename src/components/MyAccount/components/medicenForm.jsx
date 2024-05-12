import React, { useEffect, useState } from 'react'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import axios from 'axios';
import toast, { Toaster } from "react-hot-toast";
import {useSelector } from 'react-redux';
export default function MedicenForm() {
  const [medicenData, setMedicenData] = useState([])
  const user = useSelector(state => state.auth.userData);
  const userId = user.username
    let mySchema = Yup.object({
        medicen:Yup.string().required('medicen is required').min(3,'min is 3 char').max(30, 'max is 30 char') ,
        time:Yup.string().required('time is required'),
    })
    let formik = useFormik({
      initialValues:{
        medicen:"",
        time:"",
      },
      validationSchema:mySchema,
      onSubmit:(values, { resetForm })=>{
        setData(values)
        resetForm()
      }
    })
    async function setData(values){
        const dataSend = {
          ...values,
          user_id: userId
        }
       return axios.post("http://localhost:1337/api/medicens-dates", { data: dataSend }, {
        headers: {
          "Content-Type": "application/json"
      }
       }).then( async (data)=>{
        await MedicenShow()
        toast.success("شفاك الله وعافاك")
       }).catch((err)=>{
       console.log(err)

       })
      }



      async function MedicenShow(){
        try {
            const allMedicens = await axios.get('http://localhost:1337/api/medicens-dates',{
            });
            
            if(allMedicens){
           setMedicenData(allMedicens.data)
            }
        } catch (err) {
            console.log(err);
        }
    }
    useEffect(() => {
        MedicenShow()
    }, [])
          
    const handleMedicenDelete =  async (id) => {
        try {
            const allMedicens = await axios.delete('http://localhost:1337/api/medicens-dates/' + id,{
            });
            
            if(allMedicens){
          //  setMedicenData(allMedicens.data)
          toast.success("تم حذف هذا الدواء")
           MedicenShow()
            }
        } catch (err) {
            console.log(err);
        }
    }
          


  return (
    <>
     <Toaster
        position="bottom-center"
        reverseOrder={false}
      />
      
         <form onSubmit={formik.handleSubmit} className="row mt-2 justify-content-center">
	  	            <div className="form-group col-md-6">
	  	            	<input className="form-control  mt-2" type="text" onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.medicen} name='medicen' placeholder="أكتب الدواء"/>
	  	                {formik.touched.medicen && formik.errors.medicen ? <p className='text-danger'>{formik.errors.medicen}</p>: ""}
                    </div>
					
					<div className="form-group col-md-6">
						<input className="form-control  mt-2" type="time"  onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.time} name='time'/>
                        {formik.touched.time && formik.errors.time ? <p className='text-danger'>{formik.errors.time}</p>: ""}
					</div>

                    <button disabled={!(formik.isValid && formik.dirty)} type="submit" className="btn  btn-primary mt-2 px-2 col-4 col-md-1">إضافة</button>
			</form>

      <div  className=' table_content'>
      <table className="table table-dark mt-3">
        <thead>
          <tr>
            <th scope="col">الدواء</th>
            <th scope="col">وقت تناوله</th>
            <th scope="col">حذف</th>
          </tr>
        </thead>
        <tbody>
          {medicenData?.data?.filter(item => item.attributes.user_id === user.username)?.map((data)=>
          <tr key={data.id}>
            <td>{data.attributes.medicen}</td>
            <td>{data.attributes.time}</td>
            <td><span className=' text-white fw-bold btn badge bg-danger' onClick={()=>handleMedicenDelete(data.id)}>حذف</span></td>
          </tr>
        
        )}
        </tbody>
      </table>
					</div>
            </>
            
  )
}
