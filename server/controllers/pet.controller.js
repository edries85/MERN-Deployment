const { Pet } = require('../models/pet.model');
module.exports.index = (request, response) => {
    response.json({
        message: "Hello World"
    });
}
    // The method below is new
module.exports.createPet = (request, response) => {
    const { name, type, description, skill1, skill2, skill3} = request.body;
    Pet.create({
        name, 
        type, 
        description, 
        skill1, 
        skill2, 
        skill3
    })
        .then(pet => response.json(pet))
        .catch(err => response.json(err));
}

module.exports.getAllPets = (req, res) => {
    Pet.find().sort({type:1}).exec()
    // sort the pets by type
        .then(pet => res.json(pet))
        .catch(err => res.json(err))
}

module.exports.getPet = (req, res) => {
    Pet.findOne({_id: req.params.id})
        .then(pet => res.json(pet))
        .catch(err => res.json(err))
}

module.exports.adoptPet = (req, res) => {
    Pet.findByIdAndDelete({_id: req.params.id})
        .then(deleteConfirmation => res.json(deleteConfirmation))
        .catch(err => res.json(err))
}

module.exports.updatePet = (req, res) => {
    Pet.findOneAndUpdate({_id: req.params.id}, req.body, {runValidators : true})
        .then(updatePet => res.json(this.updatePet))
        .catch(err => res.json(err))
}


