import React, {lazy, Suspense } from 'react'
// import Loading from '../../Loading';
const Content= lazy(() => import('./components/content/content'));

export default function MyAccount() {
  return (
   <>
  <Suspense fallback={"loading"}> <Content/></Suspense>
   </>
  )
}
