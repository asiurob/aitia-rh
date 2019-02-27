import jwt from 'jsonwebtoken';
import { seed } from '../global-config';
import { Response } from 'express';

export const authToken = ( req: any, res: Response, next: Function ) => {

    const token = req.params.token;
    if( token === 'X' ) {
        return res.status( 401 ).json({
            message: 'No fue enviado el token'
        });
    }

    jwt.verify( token, seed, ( error: any, decoded: any ) => {
        if( error ){
            return res.status( 401 ).json({
                message: 'La sesión ha finalizado o es inválida',
                error
            });
        }
        req.user = decoded;
        next();
    });
}


