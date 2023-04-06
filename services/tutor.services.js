const Tutor = require("../models/Tutor");


// get Tutor services --------------
exports.getTutorsService = async () => {
    const results = await Tutor.find({});
    return results;
};


// get Tutor by background --------------
exports.getTutorsCategoryService = async (category) => {
    const result = await Tutor.find({ background: category });
    return result;
};


// get Tutor by id ----------------------
exports.getTutorByService = async (id) => {
    const result = await Tutor.findOne({ _id: id });
    return result;
};


// create tutor service ------------------
exports.createTutorService = async (data) => {
    const result = await Tutor.create(data);
    return result;
};

// update tutor service-------------------
exports.updateTutorService = async (tutorId, data) => {
    const result = await Tutor.updateOne({ _id: tutorId }, { $set: data }, { runValidators: true });
    return result;
};

// delete tutor service ---------------
exports.deleteTutorService = async (id) => {
    const result = await Tutor.deleteOne({ _id: id })
    return result
};

