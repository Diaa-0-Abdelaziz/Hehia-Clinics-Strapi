import React from 'react'

export default function PlaneWork() {
  return (
    <section className="plan my-5">
    <div className="container">
      <h3>خطة العمل</h3>
    <ol>
      <li className="fs-4">جمع المعلومات الخاصة بكل عيادة <i className="fa-solid fa-check text-primary"></i></li>
      <li className="fs-4">إضافة معامل الأشعة ومعامل التحاليل <i className="fa-solid fa-xmark text-danger"></i></li>
      <li className="fs-4">إضافة مراكز العمليات الجراحية إن وجدت <i className="fa-solid fa-xmark text-danger"></i></li>
      <li className="fs-4">إضافة مكاتب الصحة <i className="fa-solid fa-xmark text-danger"></i></li>
      <li className="fs-4">إذا تم تغير مكان عيادة أو معمل تحاليل أو أو تم قفلها تحت أى ظرف...فسوف يتم تحديث البيانات بأسرع وقت <i className="fa-solid fa-xmark text-danger"></i></li>
      <li className="fs-4">إذا كنت قد سجلت الجيميل الخاص بك فى الموقع فسوف يتم إرسال كافة التحديثات بشكل فورى. <button className="text-decoration-none btn btn-primary" data-bs-toggle="modal" data-bs-target="#registration">إضغط هنا لتسجيل الجيميل </button> <i className="fa-solid fa-xmark text-danger"></i></li>
    </ol>
    </div>
    <div className="modal fade" id="registration" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
      <div className="modal-dialog modal-lg modal-dialog-centered">
        <div className="modal-content">
          <div className="modal-header">
            <button type="button" className="btn-close ms-0" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div className="modal-body">
           <input className="form-control" type="email" name="email" id="email" placeholder="أكتب الجيميل الخاص بك هنا"/>
        </div>
        <div className="modal-footer">
          <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">إلغاء</button>
          <button type="button" className="btn btn-primary">تسجيل</button>
        </div>
      </div>
    </div>
    </div>
  </section>
  )
}
