// Dependencias de entorno
import cors  from 'cors';
import bodyParser from 'body-parser';
import mongo from 'mongoose';

// Dependencias de código
import Server from './classes/server';
import appRouter from './routes/app-route';
import { database, mongoPort } from './global-config';

// Rutas
import loginRouter from './routes/login.route';
import userRouter from './routes/user.route';
import authRouter from './routes/authtoken.route';
import sectionRouter from './routes/section.route';
import permissionRouter from './routes/permission.route';


const server = Server.instance;

// Iniciar conexiób con MongoDB
mongo.connect( `mongodb://localhost:${mongoPort}/${database}`, ( err ) => {
    if( err ){ throw err; }
    console.log( `MongoDB is \x1b[32m%s\x1b[0m at port ${mongoPort}`, 'online' );
});

// Configuración Body parser
server.app.use( bodyParser.urlencoded({ extended: true }) );
server.app.use( bodyParser.json() );

// CORS
server.app.use( cors({ origin: true, credentials: true }) );

// Rutas al servidor
server.app.use( '/login', loginRouter );
server.app.use( '/user', userRouter );
server.app.use( '/auth', authRouter );
server.app.use( '/section', sectionRouter );
server.app.use( '/permission', permissionRouter );

//Iniciar servidor
server.app.use('/', appRouter );
server.start( ()=> {
    console.log( `Server is \x1b[32m%s\x1b[0m at port ${ server.port }`, 'online' );
});