import { Console } from "console";
import { connect } from "http2";
import mongoose, { Connection, connection } from "mongoose";
//in every api calling connection need to have database connection 
//how is capble to connect with the database
export async function conncet() {
    try {
        mongoose.connect(process.env.MONGO_URL!);
        //grab the connection
        const Connection = mongoose.connection;
        //event listing 

        //listiong for the successfull connection
        connection.on('connected', () => {
            console.log("Successfully connected to the database");
        })

        //listing for the errors of the connection 
        connection.on('error', (error: Error) => {
            console.log("Something went worng please check the connection !!");
            process.exit();
        })
    } catch (error) {
        console.log("Something went worng !!");
        console.log(error);
    }
}