import mongoose  from 'mongoose';
import { DB_NAME }  from '../constants.js';



const connectDB= async()=>{
    
    try {
        let connectdataabase= await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
        console.log(`\n MondoDB connected !! DB HOST: ${connectdataabase.connection.host}`);
    } catch (error) {
        console.error("connection Failed",error);
        process.exit(1)
    }
}

export default connectDB;
