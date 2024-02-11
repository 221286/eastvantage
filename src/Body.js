import React, { useEffect, useState} from 'react'
import fetchurls from './Functions/fetch'
import { DETAILS_URL } from './Constants/constants';
//Toggle function for refreshment to pull out new data
import toggle from './Functions/Toggle';

const Body = () => {
  const [change,setchange]=useState(true);
  
    useEffect (()=>{
      //Used axis with async await instead of fetch
      fetchurls(DETAILS_URL)
      .then((response)=>{
        //Stored to local storage in the JSON string form
        localStorage.setItem("details",JSON.stringify(response.results[0]))});
      
    },
    //Passed two dependency array one to call useEffect when the component mounts.
    //Second to fetch information each the the state variable changes
    [][change]);
    
    const data=JSON.parse(localStorage.getItem('details'));
    //Providing check for destructure and proper deployement
    if(!data){
      return
    }
    const {email,name:{title,first,last},picture:{large}}=data;
    
    
    
  return (
    <div id='Container'>
      <img alt="Profile pic" src={large} className='profile_image'/>
      <h3>Name: {title +" "+first+" "+last}</h3>
      <h3>Email: {email}</h3>
      <button onClick={()=>{toggle(change,setchange)}}>Refresh</button>
      
    </div>
  )
}

export default Body
