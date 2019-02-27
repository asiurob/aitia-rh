import { Router, Response, Request } from 'express';
import { authToken } from '../middlewares/auth';

const authRouter = Router();

authRouter.get('/:token', [authToken], ( req: Request, res: Response ) => {

    res.status( 200 ).json({
        message: 'Sesión correcta'
    });

});

export default authRouter;