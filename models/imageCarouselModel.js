const mongoose = require("mongoose");

const imageCarouselSchema = new mongoose.Schema({

      url: {
        type: String,
        required: true,
      },
    
  
});

module.exports = mongoose.model("ImageCarousel", imageCarouselSchema);
