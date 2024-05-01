import React from 'react'
import { Link as ScrollLink } from 'react-scroll';
export default function Main() {
  return (
    <header id="home" className="d-flex justify-content-center align-items-center position-relative min-vh-100">
    <div className=" text-center">
          <h1 className="fw-bolder">تم تطوير هذا الموقع لخدمة أهالى مركز ومدينة ههيا الكرام</h1>
          <p className="write-words fs-3 fw-bold mt-2 p-1"></p>
        </div>
        <ScrollLink to="main-caused" className="go-to-clinic-section position-absolute rounded-pill bottom-0 mb-4"  spy={true} smooth={true} offset={-58} duration={500}></ScrollLink>
</header>
  )
}
