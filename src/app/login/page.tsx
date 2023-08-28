"use client"

import Link from "next/link";
import react from "react";
//send the form one page to another 
import { useRouter } from "next/navigation";
import { Axios } from "axios";
export default function login(){
    const [user,setuser] = react.useState({
        passowrd: "",
        username:"",
    })
    const Onlogin = async () => {

    }
    return(
        <div>
            <h1>Login</h1>      
            <hr/>
            <label htmlFor="username">Username</label>
            <input
            type="text"
            id="username"
            value={user.username}
            onChange={(e) => setuser({...user, username: e.target.value})}
            placeholder="username"
            />
            <label htmlFor="password">Password</label>
            <input
            type="password"
            id="passsword"
            value={user.passowrd}
            onChange={(e) => setuser({...user, passowrd: e.target.value})}
            placeholder="*****"
            />
            <button onClick={Onlogin}>Login</button>
            <Link href="/signup">Sign Up</Link>
        
        </div>
    )
}