const mongoose = require('mongoose');
const PetSchema = new mongoose.Schema({
    name: { 
        type: String,
        require: [true, 'Must enter name of pet'],
        minlength : [3, 'Pet name must be at least 3 characters'],

    },
    type: { 
        type: String,
        require: [true, 'Must enter name of pet'],
        minlength : [3, 'Pet name must be at least 3 characters'] 
    },
    description: { 
        type: String,
        require: [true, 'Must enter name of pet'],
        minlength : [3, 'Pet name must be at least 3 characters']
    },
    skill1: { type: String },
    skill2: { type: String },
    skill3: { type: String },

}, { timestamps: true });
module.exports.Pet = mongoose.model('Pet', PetSchema);
