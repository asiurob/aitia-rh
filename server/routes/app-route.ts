import { Router, Request, Response }  from 'express';
import Test from '../models/app-model';

const appRouter = Router();

appRouter.get('/', ( req: Request, res: Response )=> {

    Test.findOne({}, 'message').sort('message')
    .exec( (err: any, data: any) => {

        if( err ){
            return res.status(500).json({
                message: 'Error getting data',
                endpoint: 'Endpoint is OK',
                err
            });
        }
    const mess = `Database is OK: ${ data._id }`;
     res.status(200).json({ 
         db: mess, 
         endpoint: 'Endpoint is OK' 
        });    
    });
});

export default appRouter;
