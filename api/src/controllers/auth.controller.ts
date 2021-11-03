import { Request, Response, NextFunction } from 'express';
import User from "../models/user.model";

class AuthController{

    //@desc Check if the user is Authenticated
    //@route /api/v1/auth/
    //@access private
    
    static isAuthenticated = async (req: Request, res: Response, next: NextFunction) => {
        try{
            const isUserAuthenticated = await User.find();
            res.status(200).json({status: "Success"});
        }catch(error: any){
            res.status(400).json({status: "failed", message: "Not authenticated"})
        }
    }

    //@desc Create New User
    //@route /api/v1/auth/
    //@access public

    static registerUser =  async (req: Request, res: Response, next: NextFunction) => {
        try{
            const createUser = await User.create(req.body);
            res.status(200).json({status: "Success"});
        }catch(error: any){
            res.status(400).json({status: "failed", message: "Not authenticated"})
        }
    }
}


export default AuthController;