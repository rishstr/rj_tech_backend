const ImageCarousel = require("../models/imageCarouselModel");
const catchAsyncErrors = require("../middleware/catchAsyncErrors");


// create --Admin
exports.createImageCarousel = catchAsyncErrors(async (req, res, next) => {
    
  
    const image = await ImageCarousel.create(req.body);
  
    res.status(201).json({
      success: true,
      image,
    });
  });
// get all Images

exports.getImageCarousel = catchAsyncErrors(async (req, res, next) => {

    const image = await ImageCarousel.find();
  
    res.status(200).json({
      success: true,
      image,
    });
  });
  