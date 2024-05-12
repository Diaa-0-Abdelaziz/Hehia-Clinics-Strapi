import React from 'react'

export default function PlaneWork() {
  return (
    <section className="plan my-5">
    <div className="container">
      <h3>خطة العمل</h3>
    <ol>
      <li className="fs-4">جمع المعلومات الخاصة بكل عيادة </li>
      <li className="fs-4">إضافة معامل الأشعة ومعامل التحاليل </li>
      <li className="fs-4">إضافة مراكز العمليات الجراحية إن وجدت </li>
      <li className="fs-4">إضافة مكاتب الصحة</li>
      <li className="fs-4">إذا تم تغير مكان عيادة أو معمل تحاليل أو أو تم قفلها تحت أى ظرف...فسوف يتم تحديث البيانات بأسرع وقت </li>
    </ol>
    </div>
  </section>
  )
}
