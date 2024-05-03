import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import { CgMenuGridR } from "react-icons/cg";
export default function Navbar() {
  let location = useLocation()
  return (
    <>
  {/* <header id="home" className="d-flex justify-content-center align-items-center position-relative min-vh-100"> */}
            <div className="fixed-top content">
                <div className="container">
                    <nav className="navbar navbar-expand-lg">
                        <div className="container-fluid">
                          <h1><Link className="brand fw-bolder" to="/">عيادات مدينة ههيا</Link></h1>
                          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                           <CgMenuGridR/>
                          </button>
                          <div className="collapse  navbar-collapse" id="navbarSupportedContent">
                          <ul className="navbar-nav me-auto mb-2 mb-lg-0 fw-bolder">
                              <li className="nav-item">
                                <Link className={`mx-2 ${location.pathname === '/' ? 'active' : ''}`} to="/">الرئيسية</Link>
                              </li>
                              <li className="nav-item">
                                <Link className={`mx-2 ${location.pathname === '/Clinics' ? 'active' : ''}`} to="/Clinics">العيادات</Link>
                              </li>
                              <li className="nav-item">
                                <Link className={`mx-2 ${location.pathname === '/Radiology-Laboratorie' ? 'active' : ''}`} to="/Radiology-Laboratorie">معامل الأشعة</Link>
                              </li>
                              <li className="nav-item">
                                <Link className={`mx-2 ${location.pathname === '/Medical-Analysis-Laboratory' ? 'active' : ''}`} to="/Medical-Analysis-Laboratory">معامل التحاليل الطبية</Link>
                              </li>
                              <li className="nav-item">
                                <Link className={`mx-2 ${location.pathname === '/Contact-Us' ? 'active' : ''}`} to="/Contact-Us">تواصل معنا</Link>
                              </li>
                              <li className="nav-item">
                                <Link className={`mx-2 ${location.pathname === '/' ? 'active' : ''}`} to="">عنا</Link>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </nav>
                </div>
            </div>
            
            {/* <Link to="#main-caused" className="go-to-clinic-section position-absolute rounded-pill bottom-0 mb-4"></Link> */}
    {/* </header> */}
    </>
  )
}
