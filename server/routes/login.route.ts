import { Router, Request, Response }  from 'express';
import { NativeError } from 'mongoose';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

import { User } from '../models/user.model';
import { seed } from '../global-config';
const loginRouter = Router();

loginRouter.post('/', ( req: Request, res: Response )=> {
    
    const user = req.body.user,
          pass = req.body.pass;
    
    if( !user || !pass  ){
        return res.status(400).json({
            message: 'El usuario y/o contraseña son necesarios'
        });
    }

    const filters = { $or: [ { username: user }, { email: user } ] };
    User.findOne( filters, '_id name lastname username password status' )
    .exec( ( err: NativeError, data: any ) => {

        if( err ) {
            return res.status(500).json({
                message: 'Ocurrió un error en la conexión',
                err
            });
        }

        if( !data ) {
            return res.status(401).json({
                message: 'El usuario no existe en la base de datos'
            });
        }
        if( data.status === 'inactive' ) {
            return res.status(401).json({
                message: 'No tienes acceso a la plataforma, repórtalo con el administrador'
            });
        }

        if( !bcrypt.compareSync( pass, data.password ) ) {
            return res.status(401).json({
                message: 'La contraseña es incorrecta'
            });
        }
        
        data.password = null;
        data.status   = null;
        const token = jwt.sign({ user: data }, seed, { expiresIn: 21600 });
        const update = { $push: { login_data: new Date() } };
        
        User.findByIdAndUpdate( data._id, update, () => {
            res.status(200).json({
                message: 'Identificado correctamente',
                data, token
            });
        }); 
    });
});

export default loginRouter;
