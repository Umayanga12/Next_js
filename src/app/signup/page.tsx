"use client"

import Link from "next/link";
import react from "react";
//send the form one page to another 
import { useRouter } from "next/navigation";
import { Axios } from "axios";
export default function signup(){
    const [user,setuser] = react.useState({
        email : "",
        passowrd: "",
        username:"",
    })
    const Onsignup = async () => {

    }
    return(
        <div>
            <h1>Sign Up</h1>      
            <hr/>
            <label htmlFor="username">Username</label>
            <input
            type="text"
            id="username"
            value={user.username}
            onChange={(e) => setuser({...user, username: e.target.value})}
            placeholder="username"
            />
            <label htmlFor="email">Email</label>
            <input
            type="email"
            id="email"
            value={user.passowrd}
            onChange={(e) => setuser({...user, email: e.target.value})}
            placeholder="email"
            />
            <label htmlFor="password">Password</label>
            <input
            type="password"
            id="passsword"
            value={user.passowrd}
            onChange={(e) => setuser({...user, passowrd: e.target.value})}
            placeholder="*****"
            />
            <button onClick={Onsignup}>Sign Up</button>
            <Link href="/login">Login</Link>
        
        </div>
    )
}