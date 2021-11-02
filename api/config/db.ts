import mongoose from 'mongoose';

const connect = async () => {
    try{
        const conn = await mongoose.connect(process.env.MONGO_URI!);
        console.log("DB Connected!!!");
        return conn;
    }catch(error: any){
        process.exit(1);
    }
}

export default connect;