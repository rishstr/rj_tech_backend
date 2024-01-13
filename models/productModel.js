const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "please enter product name"],
  },
  description0: {
    type: String,
    
  },
  description1: {
    type: String,
    
  },
  description2: {
    type: String,
    
  },
  description3: {
    type: String,
    
  },
  description4: {
    type: String,
    
  },
  description5: {
    type: String,
    
  },
  description6: {
    type: String,
    
  },
  description7: {
    type: String,
    
  },
  description8: {
    type: String,
    
  },
  description9: {
    type: String,
    
  },
  price: {
    type: "number",
    required: [true, "please enter price"],
  },
  mrp: {
    type: "number",
    required: [true, "please enter price"],
  },
  ratings: {
    type: Number,
    default: 0,
  },
  category: {
    type: String,
    default: 0,
  },

  image: [
    {
      public_id: {
        type: String,
        required: true,
      },
      url: {
        type: String,
        required: true,
      },
    },
  ],

  stock: {
    type: String,
    required: [true, "Please enter the number of products in stock"],
    maxLength: [4, "Stock cannot exceed 4 characters"],
    default: 10,
  },

  numOfReviews: {
    type: Number,
    default: 0,
  },

  reviews: [
    {
      user: {
        type: mongoose.Schema.ObjectId,
        ref: "User",
        required: true,
      },
      name: {
        type: String,
        required: true,
      },
      rating: {
        type: Number,
        required: true,
      },
      comment: {
        type: String,
        required: true,
      },
    },
  ],

  user: {
    type: mongoose.Schema.ObjectId,
    ref: "User",
    required: true,
  },

  CreatedAt: {
    type: String,
    default: Date.now,
  },
});

module.exports = mongoose.model("Product", productSchema);
