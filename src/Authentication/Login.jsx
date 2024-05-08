import React from 'react'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import { IoCloseOutline } from 'react-icons/io5';
import Cookies from 'js-cookie';
import axios from 'axios';
import toast, { Toaster } from "react-hot-toast";
import { useDispatch } from 'react-redux';
import { setJWT, setUserData } from '../slices/tokenSlice';
export default function Login({ toggleVisibility, forgotPASSWORD}) {
  const dispatch = useDispatch();
    let mySchema = Yup.object({
          identifier:Yup.string().email("email isn't valid").required('email is required'),
          password:Yup.string().required('password is required'),
      })
      let formik = useFormik({
        initialValues:{
          identifier:"",
          password:"",
        },
        validationSchema:mySchema,
        onSubmit:(values)=>{
          getData(values)
        }
      })
      async function getData(values){
        console.log(values)
       return axios.post("http://localhost:1337/api/auth/local/", values).then((data)=>{
        // console.log(data)
        const jwt = data.data.jwt
        const userData = data.data.user
        dispatch(setJWT(jwt));
       dispatch(setUserData(userData));
        // console.log(jwt)
        // console.log(data.data.user)
         Cookies.set('jwt', jwt)
         Cookies.set('user', JSON.stringify(userData))
        toast.success("مرحبا بك في عيادات مدينة ههيا")
        setTimeout(() => {
          toggleVisibility();
      }, 2000);
       }).catch((err)=>{
       console.log(err.response.data.error.message)
       toast.error(err.response.data.error.message);
       })
      }
  return (
    <>
    <section className='Auth position-fixed top-0 bottom-0 start-0 end-0'>
    <Toaster
        position="bottom-center"
        reverseOrder={false}
      />
    <div className="container d-flex align-items-center justify-content-center h-100">
      
            <div className="form_content">
                <h6  className=' position-relative'>تسجيل دخول <IoCloseOutline onClick={() => toggleVisibility()} className='close_Window position-absolute me-5 end-0 fs-4 top-50 translate-middle-y'/></h6>
                <form onSubmit={formik.handleSubmit}>
                <div className="mb-3">
                    <input type="email" placeholder='الجيميل' className="inputsForm" onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.identifier} name='identifier'/>
                    {formik.touched.identifier && formik.errors.identifier ? <p className='text-danger'>{formik.errors.identifier}</p>: ""}
                </div>

                <div className="mb-3">
                <input type="password" placeholder='كلمة السر' className="inputsForm" onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.password} name='password'/>
                {formik.touched.password && formik.errors.password ? <p className='text-danger'>{formik.errors.password}</p>: ""}
                </div>
                
               <div className=' d-flex flex-column align-items-center'>
               <button disabled={!(formik.isValid && formik.dirty)} type="submit" className="text-uppercase my-2">دخول</button>
                {/* <span className="text-uppercase forgot my-2" onClick={() => forgotPASSWORD()}>forgot password</span> */}
               </div>
                </form>
            </div>
       
     </div>
    </section>
    </>
  )
}
