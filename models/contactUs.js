const mongoose = require("mongoose");
const validator = require("validator");

const contactUsSchema = new mongoose.Schema({

    name: {
        type: String,
        required: [true, "Please enter your name"],
        maxLength: [30, "Length cannot exceed 30 characters"],
      },
      email: {
        type: String,
        required: [true, "Please enter your email address"],
        validate: [validator.isEmail, "Please enter a valid email"],
      },
      phoneNo: {
        type: Number,
        required: true,
      },
      city: {
        type: String,
        required: [true, "Please enter your city"],
      },
      querries: {
        type: String,
        required: true,
      },

  
});

module.exports = mongoose.model("ContactUs", contactUsSchema);
