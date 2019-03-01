import mongo from 'mongoose';
import validator from 'mongoose-unique-validator';

const Schema = new mongo.Schema({
    name:        { type: String, min: 3, max: 50, required:[true, 'El nombre es necesario'] },
    lastname:    { type: String, min: 3, max: 50, required:[true, 'El apellido es necesario'] },
    email:       { type: String, min: 5, max: 100, required:[true, 'El correo es necesario'], unique:true },
    username:    { type: String, min: 5, max: 20, required:[true, 'El usuario es necesario'], unique:true },
    password:    { type: String, min: 20, max:70, required:[true, 'La contraseña es necesaria' ] },
    status:      { type: String, default: 'active' },
    add_data:    {
        date:    { type: Date, default: Date.now },
        by:      { type: mongo.Schema.Types.ObjectId, ref: 'User' }
    },
    modify_data: [{
        _id:        false,
        date:       { type: Date, default: Date.now },
        by:         { type: mongo.Schema.Types.ObjectId, ref: 'User' },
        new_value:  { type: String },
        last_value: { type: String }
    }],
    login_data: [],
    permissions: [{
        _id:    false,
        module_name: { type: mongo.Schema.Types.ObjectId, ref: 'Section'  },
        crud:        { type: String, min: 1, max: 12 }
    }],
    all_permissions: { type: Boolean, default: false }
}, { collection: 'users' });

Schema.plugin( validator, { message: 'El {PATH} No es válido o es requerido' } );
export const User = mongo.model('User', Schema );
