import React from 'react'
import { Link } from 'react-router-dom'
import { CgMenuGridR } from "react-icons/cg";
export default function Navbar() {
 
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
                          <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0 fw-bolder">
                              <li className="nav-item">
                                <Link className="nav-link" to="/">الرئيسية</Link>
                              </li>
                              <li className="nav-item">
                                <Link className="nav-link" to="/Clinics">العيادات</Link>
                              </li>
                              <li className="nav-item">
                                <Link className="nav-link" to="#">معامل الأشعة</Link>
                              </li>
                              <li className="nav-item">
                                <Link className="nav-link" to="#">معامل التحاليل الطبية</Link>
                              </li>
                              <li className="nav-item">
                                <Link className="nav-link" to="#contact">تواصل معنا</Link>
                              </li>
                              <li className="nav-item">
                                <Link className="nav-link" to="">عنا</Link>
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
