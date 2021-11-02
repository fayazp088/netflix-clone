import mongoose from 'mongoose';

const connect = async () => {
    try{
        const conn = await mongoose.connect()
    }catch(error: any){
        process.exit(1);
    }
}