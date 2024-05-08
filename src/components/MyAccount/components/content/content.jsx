import React from 'react'
import { FaUserCircle } from "react-icons/fa";
import "./content.css"
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Cookies from 'js-cookie';
import { setJWT, setUserData } from '../../../../slices/tokenSlice';
import MedicenForm from '../medicenForm';
export default function Content() {
  const dispatch = useDispatch();
  let navigate = useNavigate()
  // const jwt = useSelector(state => state.auth.jwt);
  const user = useSelector(state => state.auth.userData);

  console.log(user)


  function deleteJWTFromCookies() {
    // مسح JWT من الكوكيز
    Cookies.remove('jwt');
    Cookies.remove('user');
  
    // تحديث حالة Redux لتعبر عن عدم المصادقة
    dispatch(setJWT('')); // تحديث JWT إلى قيمة فارغة
    dispatch(setUserData({})); // مسح بيانات المستخدم
    navigate("/")
  }
  return (
    <>
    <section className='content mt-5'>
       <div className="container">
        <div className="row">
            <div className="col-lg-4">
            <ul className="list-group">
                <li className="list-group-item  d-flex flex-column align-items-center">
                    <i><FaUserCircle/></i>
                    <p>{user.username}</p>
                </li>
             
                <li className="list-group-item text-center pt-3">
                    <p className=' badge bg-primary fs-5' onClick={deleteJWTFromCookies}>تسجيل خروج</p>
                </li>
            </ul>
            </div>
            <div className="col-lg-8 tableAccount">
            <ul className="nav nav-pills p-0" id="pills-tab" role="tablist">
              <li className="" id="pills-home-tab" data-bs-toggle="pill" data-bs-target="#pills-home"  role="tab" aria-controls="pills-home" aria-selected="true">
                <span className="" >البيانات الشخصية</span>
              </li>
           
              <li className="border-end border-5  border-white  " id="pills-contact-tab" data-bs-toggle="pill" data-bs-target="#pills-contact"  role="tab" aria-controls="pills-contact" aria-selected="false">
                <span className=" " >الأدوية</span>
              </li>
             
          </ul>
<div className="tab-content" id="pills-tabContent">
  <div className="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab">
    
  <ul className="list-group p-0 w-100">
                <li className="list-group-item  d-flex flex-row align-items-center justify-content-between">
                <div className="mb-3 w-100">
                    <label htmlFor="exampleInputPassword1" className="form-label fs-6">الإسم</label>
                    <input type="text" className="form-control bg-white border-0" value={user.username} id="exampleInputPassword1" disabled readOnly/>
                </div>
                <p className='m-0 fs-6 mt-3 ms-5'>EDIT</p>
                </li>
                <li className="list-group-item d-flex flex-row align-items-center justify-content-between">
                <div className="mb-3 w-100">
                    <label htmlFor="exampleInputPassword1" className="form-label fs-6">الجيميل</label>
                    <input type="email" className="form-control bg-white w-100 border-0" value={user.email} id="exampleInputPassword1" disabled readOnly/>
                </div>
                <p className='m-0 fs-6 mt-3 ms-5'>EDIT</p>
                </li>
                <li className="list-group-item d-flex flex-row align-items-center justify-content-between">
                <div className="mb-3 w-100">
                    <label htmlFor="exampleInputPassword1" className="form-label fs-6">رقم الهاتف</label>
                    <input type="text" className="form-control bg-white border-0" value={user.phone} id="exampleInputPassword1" disabled readOnly/>
                </div>
                <p className='m-0 fs-6 mt-3 ms-5'>EDIT</p>
                </li>
            </ul>

  </div>

  <div className="tab-pane fade p-1" id="pills-contact" role="tabpanel" aria-labelledby="pills-contact-tab">

  <div className=" my-5">
  <MedicenForm/>
  </div>
  </div>
</div>
        </div>
        </div>
       </div>
    </section>
    </>
  )
}
