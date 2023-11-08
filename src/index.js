import dotenv from 'dotenv'
import connectDB from "./db/index.db.js";
dotenv.config()




connectDB()
.then(()=>{
    application.listen(process.env.PORT || 8000,()=>{
        console.log(` Server is running at port : ${process.env.PORT}`);
    })
})
.catch((err)=>{
    console.log("MONGO db connection failed !!!" ,err);
})