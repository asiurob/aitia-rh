import mongo from 'mongoose';
import validator from 'mongoose-unique-validator';

const Schema = new mongo.Schema({
    name: { 
            type: String, min:3, max:30, 
            unique:[ true, 'El nombre de la sección debe ser única'], 
            required:[true, 'La sección debe tener un nombre']  
    },
    route: { 
        type: String, min:3, max: 50,
        unique:[ true, 'La ruta debe ser única'], 
        required:[true, 'La ruta del controlador es necesaria']  
    },
    status:   { type: String, default: 'active' },
    add_data: {
            date: { type: Date, default: Date.now },
            by:   { type: mongo.Schema.Types.ObjectId, ref: 'User' }
    },
    modify_data: [{
        _id:        false,
        date:       { type: Date, default: Date.now },
        by:         { type: mongo.Schema.Types.ObjectId, ref: 'User' },
        new_value:  { type: String },
        last_value: { type: String }
    }]
}, { collection: 'sections' });

Schema.plugin( validator, { message: 'El {PATH} está duplicado o es inválido' } );

export const Section = mongo.model( 'Section', Schema );