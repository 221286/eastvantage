import React, { useEffect, useState} from 'react'
import fetchurls from './Functions/fetch'
import { DETAILS_URL } from './Constants/constants'
import toggle from './Functions/Toggle';

const Body = () => {
  const [change,setchange]=useState(true);
  
    useEffect (()=>{
      fetchurls(DETAILS_URL)
      .then((response)=>{
        localStorage.setItem("details",JSON.stringify(response.results[0]))});
      
    },[][change]);
    
    const data=JSON.parse(localStorage.getItem('details'));
    const {email,name:{title,first,last},picture:{large}}=data;
    
    
    
  return (
    <div>
      <h3>Name: {title +" "+first+" "+last}</h3>
      <h3>Email: {email}</h3>
      <button onClick={()=>{toggle(change,setchange)}}>Refresh</button>
      
    </div>
  )
}

export default Body
