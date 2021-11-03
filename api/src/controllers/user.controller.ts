import mongoose from 'mongoose';
import { Request, Response, NextFunction } from 'express';
import User from '../models/user.model';


class UserCotroller{
    //@desc get all users
    //@route GET /api/v1/user/
    //@access Public

    static getUser = async (req: Request, res: Response, next: NextFunction) => {
        try{
            const userData = await User.find();
            res.status(200).json({status: "Success", data: userData});
        }catch(error: any){
            res.status(400).json({status: "Failed", msg: error.message});
        }
    }

    //@desc add new user
    //@route POST /api/v1/user/
    //@access Public

    static createNewUser = async (req: Request, res: Response, next: NextFunction) => {
        try{
            const user = await User.create(req.body);
            res.status(400).json({status: "Success", data: req.body});
        }catch(error: any){
            res.status(400).json({status: "Failed", msg: error.message});
        }
    }
}



export default UserCotroller;