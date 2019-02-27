import { Router, Request, Response }  from 'express';
import { NativeError } from 'mongoose';
import bcrypt from 'bcrypt';
import { User } from '../models/user.model';

const userRouter = Router();

userRouter.post( '/', ( req: Request, res: Response ) => {
    
    const pass = req.body.password ? bcrypt.hashSync( req.body.password, 10 ) : '';

    const usr = new User({
        name:     req.body.name,
        lastname: req.body.lastname,
        email:    req.body.email,
        username: req.body.username,
        password: pass
    });

    usr.save( ( err: NativeError, saved: any ) => {
        
        if( err ){
            return res.status(500).json({
                message: 'Ocurrió un error en la conexión',
                err
            })
        }

        if( !saved ){
            return res.status(400).json({
                message: 'Error al guardar la información, inténtalo nuevamente'
            })
        }

        res.status(200).json({
            success: true,
            message: 'El usuario fue creado correctamente'
        })
    });

});

export default userRouter;