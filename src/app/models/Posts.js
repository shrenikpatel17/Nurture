import mongoose, { Document, model, Model, Schema } from "mongoose";

const PostSchema = new mongoose.Schema(
  {
    recipeAffiliation: {
      type: String,
    },
    userAffiliation: {
      type: String,
      default: "",    
    },
    comments: {
      type: Array,
      default: [],
    },
  },
  { timestamps: true }
);

export const Post = mongoose.models.Post || model("Post", PostSchema);
export default Post;
