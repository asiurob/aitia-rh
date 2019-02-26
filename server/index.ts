// Dependencias de entorno
import cors  from 'cors';
import bodyParser from 'body-parser';
import mongo from 'mongoose';

//Dependencias de código
import Server from './classes/server';
import appRouter from './routes/app-route';
import { database, mongoPort } from './global-config';


const server = Server.instance;

//Iniciar conexiób con MongoDB
mongo.connect( `mongodb://localhost:${mongoPort}/${database}`, ( err ) => {
    if( err ){ throw err; }
    console.log( `MongoDB is \x1b[32m%s\x1b[0m at port ${mongoPort}`, 'online' );
});

//Configuración Body parser
server.app.use( bodyParser.urlencoded({ extended: true }) );
server.app.use( bodyParser.json() );

// CORS
server.app.use( cors({ origin: true, credentials: true }) );

//Iniciar servidor
server.app.use('/', appRouter );
server.start( ()=> {
    console.log( `Server is \x1b[32m%s\x1b[0m at port ${ server.port }`, 'online' );
});