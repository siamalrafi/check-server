const mongoose = require('mongoose');

const tutorSchema = new mongoose.Schema({
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
    },
    background: {
        type: String,
        required: true,
        enum: {
            values: ["Science", "Humanities ", "Commerce"],
            massage: "background can't be others."
        }
    },
    phone: {
        type: Number,
        required: true,
        unique: [true, "Please provide a unique phone number."],
    },
    location: {
        type: String,
        required: true,
        trim: true, // without spaces
    },
    experience: {
        type: Number,
        required: true,
    },
    role: {
        type: String,
        required: true,
        enum: {
            values: ["Teacher", "Student", "Admin"],
            massage: "role can't be others."
        }
    },
    image: {
        type: String,
        unique: true,
        required: true,
    }
}, {
    timestamps: true,
});



// do something after inserting data into database
/* tutorSchema.pre("save", function (next) {
    console.log("after  Tutor inserted");
    next();
});
 */

// if need to do something
/* tutorSchema.methods.logger = function () {
    console.log(`Data is ${this.name}`);
} */



const Tutor = mongoose.model('Tutor', tutorSchema)

// export  Tutor
module.exports = Tutor;
