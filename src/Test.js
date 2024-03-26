import React,{useState}from 'react';
import axios from 'axios';
 
function Test(){ 
const[forgotName,setforgotName]=useState("")
const[forgotenterpass,setforgotpass]=useState("")
const[forgotreenterpass,setreenterpassword]=useState("")
   
   const forgotname=(e)=>{
      setforgotName(e.target.value); 
  }
  const forenterpass=(e)=>{
   setforgotpass(e.target.value);
  }
  const forreenterpass=(e)=>{
   setreenterpassword(e.target.value);
  }
  const submit=()=>{
   const obj={
     name:forgotName,
     password:forgotenterpass,
     confirmPassword:forgotreenterpass
     
   }
    
   axios.post('http://localhost:8080/resetUser',obj)
        .then((res)=>{
            console.log(res.data);
        })
  }
    return( 
         <div className="forpass"> 
            
            <input className="email"placeholder="userName"onChange={(e)=>forgotname(e)}/><br/>
            <button className="verification">Check</button><br/> 
               <div>
               <input className="newpassword" placeholder="enter new password"onChange={(e)=>forenterpass(e)}/><br/>
               <input className="conpassword" placeholder="confirm password"onChange={(e)=>forreenterpass(e)}/> 
               </div>  
            
               <div>
                  
               </div>
            
            <button onClick={()=>submit()}>submit</button>
             
         </div>
  )};
  export default Test;