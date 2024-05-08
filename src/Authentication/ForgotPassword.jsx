import React from 'react'
import { IoCloseOutline } from "react-icons/io5";
import { useFormik } from 'formik'
import * as Yup from 'yup'
import "./Register.css"
export default function ForgotPassword({toggleVisibility, writeCode}) {
    let mySchema = Yup.object({
          email:Yup.string().email("email isn't valid").required('email is required')
        })
  
      let initialValues ={email:""}
      let formik = useFormik({
        initialValues:initialValues,
        validationSchema:mySchema,
        onSubmit:(values)=>{
        getEmail(values)
        }
        
      })
 
       function getEmail(values){
         console.log(values)
      }
  return (
    <>


    
    <section className='Auth position-fixed top-0 bottom-0 start-0 end-0'>
    <div className="container d-flex align-items-center justify-content-center h-100">
      
            <div className="form_content">
                <h6 className=' position-relative'>Write Valid Email <IoCloseOutline onClick={() => toggleVisibility()} className='close_Window position-absolute me-5 end-0 fs-4 top-50 translate-middle-y'/></h6>
                <form onSubmit={formik.handleSubmit}>
          
                  <div className="mb-3">
                  <input type="email" className="inputsForm"  placeholder="Enter your email......."  value={formik.values.email || ''} name="email" onChange={formik.handleChange} onBlur={formik.handleBlur}/>
                  {formik.touched.email && formik.errors.email ? <p className='text-danger'>{formik.errors.email}</p>: ""}
                  </div>
                    <button type="submit" className="text-uppercase  my-2" disabled={!(formik.isValid && formik.dirty)} onClick={() => writeCode()}>Next</button>
                </form>
            </div>
       
     </div>
    </section>

    </>
  )
}
