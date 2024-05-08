import React from 'react'
import { IoCloseOutline } from "react-icons/io5";
import { useFormik } from 'formik'
import * as Yup from 'yup'
import "./Register.css"
import axios from 'axios';
import Cookies from 'js-cookie';
import toast, { Toaster } from "react-hot-toast";
export default function Register({ toggleVisibility }) {
    
    let mySchema = Yup.object({
          username:Yup.string().required('name is required').min(3,'min is 3 char').max(30, 'max is 30 char') ,
          email:Yup.string().email("email isn't valid").required('email is required'),
          phone:Yup.string().required('Phone number is required'),
          password:Yup.string().required('password is required'),
          rePassword:Yup.string().required('password is required').oneOf([Yup.ref('password')], 'password not match'),
      })
      let formik = useFormik({
        initialValues:{
          username: "",
          email:"",
          phone:"",
          password:"",
          rePassword:""
        },
        validationSchema:mySchema,
        onSubmit:(values)=>{
          getData(values)
        }
      })
      async function getData(values){
        console.log(values)
       return axios.post("http://localhost:1337/api/auth/local/register", values).then((data)=>{
        console.log(data.data.user)
        const jwt = data.data.jwt
        Cookies.set('jwt', jwt)
        toast.success("تم إنشاء الحساب بنجاح")
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
    {/* {isVisible && ( */}

    
    <section className='Auth position-fixed top-0 bottom-0 start-0 end-0'>
          <Toaster
        position="bottom-center"
        reverseOrder={false}
      />
    <div className="container d-flex align-items-center justify-content-center h-100">
      
            <div className="form_content">
                <h6 className=' position-relative'>إنشاء حساب <IoCloseOutline onClick={() => toggleVisibility()} className='close_Window position-absolute me-5 end-0 fs-4 top-50 translate-middle-y'/></h6>
                <form onSubmit={formik.handleSubmit}>
                <div className="mb-3">
                    <input type="text" placeholder='الإسم' className="inputsForm" onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.username} name='username'/>
                    {formik.touched.username && formik.errors.username ? <p className='text-danger'>{formik.errors.username}</p>: ""}
                </div>
                <div className="mb-3">
                    <input type="email" placeholder='الجيميل' className="inputsForm" onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.email} name='email'/>
                    {formik.touched.email && formik.errors.email ? <p className='text-danger'>{formik.errors.email}</p>: ""}
                </div>
                <div className="mb-3">
                    <input type=' tel' placeholder='رقم الموبايل' className="inputsForm" onChange={ formik.handleChange} onBlur={formik.handleBlur} value={formik.values.phone} name='phone'/>
                    {formik.touched.phone && formik.errors.phone ? <p className='text-danger'>{formik.errors.phone}</p>: ""}
                </div>

                <div className="mb-3">
                <input type="password" placeholder='كلمة السر' className="inputsForm" onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.password} name='password'/>
                {formik.touched.password && formik.errors.password ? <p className='text-danger'>{formik.errors.password}</p>: ""}
                </div>

                <div className="mb-3">
                    <input type="password" placeholder=' أعد إدخال كلمة السر' className="inputsForm" onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.rePassword} name='rePassword'/>
                    {formik.touched.rePassword && formik.errors.rePassword ? <p className='text-danger'>{formik.errors.rePassword}</p>: ""}
                </div>
                
                <button disabled={!(formik.isValid && formik.dirty)} type="submit" className="text-uppercase">تسجيل</button>
                </form>
            </div>
       
     </div>
    </section>
    {/* )} */}
    </>
  )
}
