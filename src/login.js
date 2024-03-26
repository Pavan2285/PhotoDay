import React,{useState} from 'react';
import axios from 'axios';
// import { useNavigate } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
 

//  const options=[
//     {value:"india",lable:"India"},
//     {value:"indonesia",lable:"Indonesia"},
//     {value:"pakisthan",lable:"Pakisthan"},
//     {value:"dubai",lkable:"Dubai"},
// ];
function Login(name){
    console.log(name) ; 
    const navigate = useNavigate(); 
    const[userName,setuserName]=useState("");
    const[password,setPassword]=useState("");  
     const loginuserName=(e)=>{
        setuserName(e.target.value); 
    }
    const Password=(e)=>{
        setPassword(e.target.value); 
    } 
    const login=()=>{
        const obj={
            name:userName,
            password:password,
        }
        axios.post('http://localhost:8080/loginUser',obj)
        .then((response)=> {
            alert(response.data);
            if(response.data) {
            navigate('/dashboard') 
            }
        })
    }
    const SignUP=()=>{
        // setStatus=("SignUP");
        navigate('/new')
    }
     
    const ForgotPassword=()=>{
        navigate('/test')

    }

     
    return( 
        
        <div className="loguser"> 
              
            <input   className="logusername" type="text"placeholder="UserName"onChange={(e)=>loginuserName(e)}/><br></br>
            
            <input className="logpass" type="text"placeholder="Password"onChange={(e)=>Password(e)}/><br></br>
            <button  className="login" onClick={()=>login()}>LOGIN</button>
            <button className="sign" onClick={()=>SignUP()}>SIGNUP</button>
                 
            <button className="forgot" onClick={()=>ForgotPassword()}>Forgot-Password</button>
            <image src= "https://th.bing.com/th/id/OIP.1NkeEsn7HeZdoJXsfeo-BwHaEo?rs=1&pid=ImgDetMain">
            </image>     


             
        </div>
        )  
  };
  export default Login;
