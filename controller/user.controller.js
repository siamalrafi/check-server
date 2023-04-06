const UserModel = require("../models/User")

exports.createAUser = async (req, res, next) => {
    try {
        const result = await UserModel.create()

        res.status(200).json({
            status: 'success',
            massage: "Data inserted Successfully!",
            data: result
        })
    }
    catch (error) {
        res.status(400).json({
            status: 'error',
            massage: "Data inserted Error",
            error: error.message
        })
    }
};