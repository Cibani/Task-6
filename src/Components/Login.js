import React, {useState} from "react"
import axios from "axios"
import {useNAvigate, Link} from "react-router-dom"

function Login(){

    const history= useNAvigate();
    const [email,setEmail]=useState('')
    const [password,setPasswordl]=useState('')

    async function submit(e) {
        e.preventDefault();
        try  await axios.post("http://localhost:8001/",{
            email,password
        })
        .then (res=>{
            if(res.data==="exist"){
                history("/home",{state:{id:email}})}
                else if(res.data==="notexist"){
                    alter("User have not sign up")
                }
            
        })
        
        return(
            <div className="login">
                <h1>Login</h1>
                <form action="POST">
                    <input type="email" onChange={(e)=>{setEmail(e.target.value)}} placeholder="Email" />
                    <input type="password" onChange={(e)=>{setPassword(e.target.value)}} placeholder="Password" />
                    <input type="submit" onClick={submit} />
                </form>
                <br />
            </div>
        )
    
}}