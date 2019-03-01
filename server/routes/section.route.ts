import { Router, Request, Response }  from 'express';
import { NativeError } from 'mongoose';
import { authToken } from '../middlewares/auth';
import { Section } from '../models/section.model';
import { error500, error400 } from '../global-config';


const sectionRouter = Router();

sectionRouter.get( '/:id?', (req:any|Request, res: Response) => { 
    
    const params = req.params.id ? { _id : req.params.id } : {};
    
    Section.find( params, '_id name route' ).sort('name')
    .exec( ( err: NativeError, data: any ) => {
        
        if( err ){
            return res.status( 500 ).json({
                message: error500,
                err
            });
        }
        res.status( 200 ).json({ data });
    });
});


sectionRouter.post('/', [authToken], (req:any|Request, res: Response) => {
    
    const section = new Section({
        name: req.body.name,
        route: req.body.route,
        add_data: {
            date: Date.now(),
            by: req.token_data.user.id
        }
    });

    section.save( ( err: NativeError, saved: Document | any  ) => {
        
        if( err ){
            return res.status( 500 ).json({
                message: error500,
                err
            });
        }

        if( !saved ){
            return res.status( 400 ).json({
                message: error400
            });
        }
        
        res.status(200).json({
            message: `Se insertó correctamente la sección ${saved.name} ( ${ saved._id } )`
        });
    });
});

export default sectionRouter;