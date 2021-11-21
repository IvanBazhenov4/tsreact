import React from 'react'
import {useHistory} from 'react-router-dom';

export const AboutPage:React.FC=()=>{
    const history=useHistory()
 return(
     <>
     <h1>Info page</h1>
         <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi aperiam culpa debitis ipsam officiis perspiciatis porro quos ratione soluta ut.</p>
         <button className="btn" onClick={()=>history.push('/')}> Back in the gym</button>
     </>
 )
}