import {Router} from 'express';
import UserCotroller from '../controllers/user.controller';


const router = Router();

router.route('/')
    .get(UserCotroller.getUser)
    .post(UserCotroller.createNewUser);


export default router;