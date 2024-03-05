import mongoose from "mongoose";
const ObjectId = mongoose.Schema.Types.ObjectId;

const todoSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    desc:{
      type: String,
      required: true,
    },
    isCompleted: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: {
    createdAt: 'created_at', // Use `created_at` to store the created date
    updatedAt: 'updated_at' // and `updated_at` to store the last updated date
  } }
);

export default mongoose.models.Todo || mongoose.model("Todo", todoSchema);
