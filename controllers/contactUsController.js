const ErrorHandler = require("../utils/errorHandler");
const catchAsyncErrors = require("../middleware/catchAsyncErrors");
const ContactUs = require("../models/contactUs") 




exports.registerQuerry = catchAsyncErrors(async (req, res, next) => {
    const { name, email, phoneNo,city, querries } = req.body;
  
    const querry = await ContactUs.create({
      name,
      email,
      phoneNo,
      city,
      querries,
    });


  res.status(201).json({
    success: true,
    querry,
  });

  });


// get all Images

exports.getAllQuerries = catchAsyncErrors(async (req, res, next) => {

    const querry = await ContactUs.find();
  
    res.status(200).json({
      success: true,
      querry,
    });
  });
  
  exports.getQuerryDetails = catchAsyncErrors(async (req, res, next) => {
    const querry = await ContactUs.findById(req.params.id);
  
    if (!querry) {
      return res.status(500).json({
        success: false,
        message: "Querry not found",
      });
    }
  
    res.status(200).json({
      success: true,
      querry,
    });
  });