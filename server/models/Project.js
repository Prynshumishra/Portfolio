import mongoose from "mongoose";

const projectSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    trim: true,
    maxlength: 120,
  },
  category: {
    type: String,
    enum: ["client", "personal"],
    default: "personal",
  },
  image: {
    type: String,
    trim: true,
    default: "",
    maxlength: 500,
  },
  desc: {
    type: String,
    required: true,
    trim: true,
    maxlength: 1000,
  },
  tech: {
    type: [String],
    default: [],
  },
  github: {
    type: String,
    trim: true,
    default: "",
    maxlength: 500,
  },
  demo: {
    type: String,
    trim: true,
    default: "",
    maxlength: 500,
  },
  order: {
    type: Number,
    default: 0,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

export const Project = mongoose.model("Project", projectSchema);
