import React, { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { CgMenuGridR } from "react-icons/cg";
import { AiFillCloseSquare } from "react-icons/ai";
import Login from '../Authentication/Login';
import Register from '../Authentication/Register';
import { useSelector } from 'react-redux';
export default function Navbar() {
  const jwt = useSelector(state => state.auth.jwt);
 
  let location = useLocation()
  const [open, setOpen] = useState("link")
 
  const [register, setRegister] = useState(false)
  const [logIN, setLogIN] = useState(false)
  function openWindow(){
    setOpen("link toggle")
  }
  function closeWindow(){
    setOpen("link")
  }
  const signUp = () => {
    setRegister(true)
  };
  const login = () => {
    setLogIN(true)
  };

  let links =[
    {
      linkName:"الرئيسية",
      pathName: "/"
    },
    {
      linkName:"العيادات",
      pathName: "/Clinics"
    },
    {
      linkName:"معامل الأشعة",
      pathName: "/Radiology-Laboratorie"
    },
    {
      linkName:"معامل التحاليل الطبية",
      pathName: "/Medical-Analysis-Laboratory"
    },
    {
      linkName:"تواصل معنا",
      pathName: "/Contact-Us"
    },
   ]




  useEffect(() => {
    document.body.addEventListener('click', handleBodyClick);

    return () => {
      document.body.removeEventListener('click', handleBodyClick);
    };
  }, []);

  const handleBodyClick = (event) => {
    if (!event.target.closest('.menu')) {
      setOpen("link")
    }
  };
  return (
    <>
            <div className="navbar py-1 px-5">    
            <div className='icon'>
            <h4><Link className="brand fw-bolder" to="/">عيادات مدينة ههيا</Link></h4>
            </div>
            <div className="menu fs-3" onClick={openWindow}>
            <CgMenuGridR/>
            </div>
            <div className={open}>
            <span onClick={closeWindow} className=' close position-absolute end-0 m-2 fs-4 cursor'> <AiFillCloseSquare/></span>
            <ul className=' list-unstyled'>
            {links.map((link, index)=>
              <li key={index}>
              <Link className={location.pathname === link.pathName? 'active_link': ''} to={link.pathName}>{link.linkName}</Link>
              </li>
            )}
            </ul>
            <div className='carterth mt-3'>
            {
              jwt?
              <>
              <Link className=' mx-2 text-light border border-1 p-2 rounded-2 border-light text-decoration-none' to="/MyAccount">حسابي</Link>
              </>
            :
            <>
            <span className=' text-light border border-1 p-2 rounded-2 border-light' onClick={login}> تسجيل دخول</span>
            <span className='me-2 text-light border border-1 p-2 rounded-2 border-light' onClick={signUp}> إنشاء حساب</span>
            </>
          }
          </div>
            
            </div>
                
              
            </div>
            

   
    {logIN? <Login toggleVisibility={() => setLogIN(false)} /> : ''}
        {register? <Register toggleVisibility={() => setRegister(false)}/> :  ''}
       
    </>
  )
}
