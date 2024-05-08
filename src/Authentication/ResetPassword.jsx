import React from 'react'
import { IoCloseOutline } from "react-icons/io5";
import { useFormik } from 'formik'
import * as Yup from 'yup'
export default function ResetPassword({toggleVisibility, GoToLogin}) {
 
  let mySchema = Yup.object({
      password:Yup.string().required('password is required').matches(/^[A-Z][a-z0-9]{5,15}$/, 'password must start captial letter and least 6 char'),
      rePassword:Yup.string().required('password is required').oneOf([Yup.ref('password')], 'password not match'),
  })
  let formik = useFormik({
    initialValues:{
      password:"",
      rePassword:""
    },
    validationSchema:mySchema,
    onSubmit:(values)=>{
      getData(values)
    }
  })
  function getData(values){
    console.log(values)
  }
  return (
    <>
   <section className='Auth position-fixed top-0 bottom-0 start-0 end-0'>
    <div className="container d-flex align-items-center justify-content-center h-100">
      
            <div className="form_content">
                <h6 className=' position-relative'>Write New Password <IoCloseOutline onClick={() => toggleVisibility()} className='close_Window position-absolute me-5 end-0 fs-4 top-50 translate-middle-y'/></h6>
                <form onSubmit={formik.handleSubmit}>
                

                <div className="mb-3">
                <input type="password" placeholder='Password' className="inputsForm" onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.password} name='password'/>
                {formik.touched.password && formik.errors.password ? <p className='text-danger'>{formik.errors.password}</p>: ""}
                </div>

                <div className="mb-3">
                    <input type="password" placeholder=' RePassword' className="inputsForm" onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.rePassword} name='rePassword'/>
                    {formik.touched.rePassword && formik.errors.rePassword ? <p className='text-danger'>{formik.errors.rePassword}</p>: ""}
                </div>
            
                <button disabled={!(formik.isValid && formik.dirty)} type="submit" className="text-uppercase" onClick={() => GoToLogin()}>Continue to log in</button>
                </form>
            </div>
       
     </div>
    </section>
    </>
  )
}
