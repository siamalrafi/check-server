// const Product = require("../models/Product");
const Tutor = require("../models/Tutor");
const { createTutorService, getTutorsService, updateTutorService, deleteTutorService, getTutorsCategoryService, getTutorByService } = require("../services/tutor.services");


// ----------------get all tutor------------
exports.getTutor = async (req, res, next) => {
    try {
        // const products = await Product.find({})
        const result = await getTutorsService();

        res.status(200).json({
            status: 'success',
            massage: "Data find Successfully",
            data: result
        })
    } catch (error) {
        res.status(400).send.json({
            status: 'error',
            massage: "product not found",
            error: error.message
        })
    }
};


// ----------------get Tutor by background ------------
exports.getTutorByCategory = async (req, res, next) => {
    try {
        const result = await getTutorsCategoryService(req.params.background)

        res.status(200).json({
            status: 'success',
            massage: "get Tutor by background find Successfully",
            data: result
        })
    } catch (error) {
        res.status(400).json({
            status: 'error',
            massage: "get Tutor by background Error",
            data: result
        })
    }
};


// ------------- get Tutor by id -------------------
exports.getTutorById = async (req, res, next) => {
    try {
        const result = await getTutorByService(req.params.id)

        res.status(200).json({
            status: 'success',
            massage: "get Tutor by id Successfully!",
            data: result
        })
    } catch (error) {
        res.status(400).json({
            status: 'error',
            massage: "get Tutor by id Error",
            data: error.massage
        })
    }
};



// create a new createTutor
exports.createTutor = async (req, res, next) => {
    try {
        // save or create a new Tutor
        const result = await createTutorService(req.body);

        res.status(200).json({
            status: 'success',
            massage: "Data inserted Successfully!",
            data: result
        })
    } catch (error) {
        res.status(400).json({
            status: 'error',
            massage: "Data inserted Error",
            error: error.message
        })
    }
};


// update a tutor -------------------
exports.updateTutor = async (req, res, next) => {
    try {
        const id = req.params.id;
        // update a new Tutor------
        const result = await updateTutorService(id, req.body);

        res.status(200).json({
            status: 'success',
            massage: "Tutor updated Successfully!",
            data: result
        })
    } catch (error) {
        res.status(400).json({
            status: 'error',
            massage: "Tutor updated Error",
            error: error.message
        })
    }
};

// delete a tutor -----------------
exports.deleteTutor = async (req, res, next) => {
    try {
        const id = req.params.id
        const result = await deleteTutorService(id)
        res.status(200).json({
            status: 'success',
            massage: "Tutor deleted Successfully!",
            data: result
        })
    }
    catch (error) {
        res.status(400).json({
            status: 'error',
            massage: "Tutor updated Error",
            error: error.message
        })
    }
};

