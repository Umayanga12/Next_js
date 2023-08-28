//import db connection
import { conncet } from "@/app/dbConfig/dbConfig";
//import user mnodel
import {userModel} from "@/model/userModel";
//grab request and responce
import { NextRequest,NextResponse } from "next/server";
//incrypting the password 
import bcrypt from "bcryptjs";

conncet()

export async function POST(request: NextRequest) {
    try {
        const resbody = await request.json()
        const {username, email, password} = resbody;

        console.log(resbody);

        //check if the user already exist or not
        const oldemail = await userModel.findOne({email})
        const oldusername = await userModel.findOne({username})

        if(oldemail || oldusername){
            return NextResponse.json({error: "User already exist"},
            {status: 400})
        }

        //hashing the password
        const salt = await bcrypt.genSalt(10)
        const hash = await bcrypt.hash
        (password, salt)

        //creating the new user
        const addnewuser = new userModel({
            username,
            email,
            password: hash
        })

        //saving the new user's detail at the database 
        const saveuser = await addnewuser.save()
        console.log(saveuser)

        //return the success massage 
        return NextResponse.json({
            massage: "User created successfully",
            success : true,
            saveuser
        })

    } catch (error : any) {
        return NextResponse.json({error: error.meessage},
        {status: 500})
    }
}