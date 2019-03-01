import { Router, Request, Response }  from 'express';
import { NativeError } from 'mongoose';
import { User } from '../models/user.model';
import { authToken } from '../middlewares/auth';
import { error500, error400 } from '../global-config';


const permissionRouter = Router();



permissionRouter.get( '/', [authToken], ( req: Request|any, res: Response ) => {
    
    const populate_section = {
        path: 'permissions.module_name',
        select: 'name route'
    };
    User.findById( req.token_data.user.id, 'permissions' ).populate( populate_section )
    .exec( ( error: NativeError, data: any ) => {
        
        if( error ){
            return res.status(500).json({
                message: error500
            });
        }

        if( !data ){
            return res.status(400).json({
                message: error400
            });
        }

        res.status( 200 ).json({
            data
        });
    });
});

export default permissionRouter;