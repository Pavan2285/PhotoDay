import React, {useState} from 'react'; 
import axios from 'axios';
function New(){
    const[id,setId]=useState("");
    const[userName,setuserName]=useState("");
    const[passWord,setPassword]=useState("");
    const[confirmPassword,setconfirmpassword]=useState("");
    // const[genders,setGender]=useState("");
    const[signage,setAge]=useState("");
     const[dob,setdob]=useState("");
     const ID=(e)=>{
        setId(e.target.value)
     }
    
    const signusername=(e)=>{ 
        setuserName(e.target.value);

    }

    const signupassword=(e)=>{
        setPassword(e.target.value); 
        console.log(e.target.value);
    }
    const signupConfirmPassword=(e)=>{ 
        setconfirmpassword(e.target.value);
    }
    // const gender=(e)=>{
    // setGender(e.target.value);
    // }
    const age=(e)=>{
        setAge(e.target.value);
    }
    const DOB=(e)=>{
        setdob(e.target.value)
    }
    const Signupbutton=()=>{ 
        const obj={
            id:id,
            name:userName,
            password:passWord,
            confirmPassword:confirmPassword,
            age:signage,
            dob:dob
        }
        axios.post('http://localhost:8080/signupUser',obj)
        .then((res)=>{
            console.log(res.data);
        })

    }
     
    return(
        <div className="signuppage">
            <input placeholder="Id.NO" onChange={(e)=>ID(e)}/>
            <input className="signname" type="text "name="userName" placeholder="userName" onChange={(e)=>signusername(e)}/> <br></br>
            <input className="signpass"type="password "placeholder="password" onChange={(e)=>signupassword(e)}/> <br></br>
            <input className="confirmpass"type="password "placeholder="confirmPassword" onChange={(e)=>signupConfirmPassword(e)}/> <br></br>
            {/* <input className="radios"type="radio" name="test"value="male" onChange={(e)=>gender(e)}/>Male
            <input type="radio" name="test"value="female"onChange={(e)=>gender(e)}/>female<br></br> */}
            <input className="ages"PlaceHolder="age"onChange={(e)=>age(e)}/><br></br>
            <input className="radios"PlaceHolder="DOB"onChange={(e)=>DOB(e)}/><br></br>
            <button className="signbutton"onClick={()=>Signupbutton()}>Signup</button> <br></br>
        </div>
    )
  };
  export default New;
