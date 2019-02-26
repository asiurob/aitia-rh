// Dependencias de entorno
import express from 'express';

//Dependencias de código
import { port } from '../global-config';

//Definimos una clase que controlará el servidor sobre el patrón singleton
export default class Server {

    private static _instance: Server;
    public app: express.Application;
    public port: number;

    //constructor privado para crear singleton
    private constructor() {
        this.app  = express();
        this.port = port;
    }

    //Iniciar el servidor
    start( callback: Function ) {
        this.app.listen( this.port, callback );
    }

    //Retornar la instancia que ya se creó
    public static get instance () {
        return this._instance || ( this._instance = new this() );
    }
}