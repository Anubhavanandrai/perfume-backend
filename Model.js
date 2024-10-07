import mongoose from "mongoose";

const Reviewschema = new mongoose.Schema({
  Username: {
    type: String,
    required: true,
  },
  Message: {
    type: String,
    required: true,
  },
  Email: {
    type: String,
    required: true,
  }
});

export const Review = mongoose.model("Review", Reviewschema);