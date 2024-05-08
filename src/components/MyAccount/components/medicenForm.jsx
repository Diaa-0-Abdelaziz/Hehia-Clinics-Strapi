import React from 'react'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import axios from 'axios';
import toast, { Toaster } from "react-hot-toast";
import { useSelector } from 'react-redux';
export default function MedicenForm() {
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
      onSubmit:(values)=>{
        setData(values)
      }
    })
    async function setData(values){
        console.log(values)
        const dataSend = {
          ...values,
          user_id: userId
        }
       return axios.post("http://localhost:1337/api/medicens-dates", { data: dataSend }, {
        headers: {
          "Content-Type": "application/json"
      }
       }).then((data)=>{
        console.log(data)

        toast.success("ربنا يشفيك يارب")
      
       }).catch((err)=>{
       console.log(err)

       })
      }




      // async function getData(values){
      //   console.log(values)
      //  return axios("http://localhost:1337/api/medicens-dates", {
      //   headers: {
      //     "Content-Type": "application/json"
      // }
      //  }).then((data)=>{
      //   console.log(data)
      //  }).catch((err)=>{
      //  console.log(err)

      //  })
      // }



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
					
					<div className="form-group col-md-4">
						<input className="form-control  mt-2" type="time"  onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.time} name='time'/>
                        {formik.touched.time && formik.errors.time ? <p className='text-danger'>{formik.errors.time}</p>: ""}
					</div>

                    <button disabled={!(formik.isValid && formik.dirty)} type="submit" className="btn  btn-primary mt-2 px-2 col-4 col-md-1">إضافة</button>
			</form>

      <div  className=' table_content'>
                    
					</div>
            </>
            
  )
}
