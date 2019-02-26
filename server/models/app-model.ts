import mongo from 'mongoose';
import validator from 'mongoose-unique-validator';

const TestSchema = new mongo.Schema({
    test: { type: String, required: true, unique: true, max: 20, min: 10 }
}, { collection: 'test' });

TestSchema.plugin( validator, { message: 'The {PATH} is required or not valid' } );

const Test = mongo.model('test', TestSchema );
export default Test;