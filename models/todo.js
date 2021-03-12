const mongoose = require("mongoose");

const todoSchema = new mongoose.Schema(
  {
    taskName: {
      type: String,
      required: true
    },
    taskDescription: {
      type: String,
      required: true
    },
    creator: {
      type: String,
      required: true
    },
    duration: {
        day: { type: String},
        hours: { type: String },
        min: { type: String },
        sec: { type: String },
        month: { type: String },
        dayOfWeek: { type: String },
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Todo", todoSchema);