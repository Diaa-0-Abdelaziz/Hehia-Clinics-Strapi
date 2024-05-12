import React from 'react'
import { Navigate } from 'react-router-dom'
import Cookies from 'js-cookie';
export default function ProtectedPath(props) {
 if(Cookies.get('jwt')){
  return props.children
 }else{
  return <Navigate to={"/"}/>
 }
}
