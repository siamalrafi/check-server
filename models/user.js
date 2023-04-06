const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Please provide a name."],
        trim: true, // without spaces
        minLenght: [3, "Name must be at least 3 characters."],
        maxLenght: [20, "Name is too long."],
    },
    email: {
        type: String,
        required: [true, "Please provide a email address."],
        trim: true, // without spaces
        unique: [true, "Please provide a unique email address."],
        validate: {
            validator: () => {
                Promise.resolve(false)
            },
            message: 'Email validation failed'
        }
    },
    image: {
        type: String,
        required: true,
        unique: [true, "Your image must be an unique"]
    },
    phone: {
        type: Number,
        required: true,
        unique: [true, "Please provide a unique phone number."],
    },
    role: {
        type: String,
        required: true,
        enum: {
            values: ["Teacher", "Student", "Admin"],
            massage: "role can't be others."
        }
    },
    location: {
        type: String,
        required: true,
        trim: true, // without spaces
    }
});

const UserModel = mongoose.model('UserModel', userSchema)

module.exports = UserModel;