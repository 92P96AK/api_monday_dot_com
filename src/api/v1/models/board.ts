import mongoose from "mongoose";
const ObjectId = mongoose.Schema.ObjectId;
const GroupSchema = new mongoose.Schema({
    ItemId: ObjectId,
    ItemName: String,
    Numbers: Number,
    Result: Number,
  },{
        collection: "Boards",
        timestamps: { createdAt: "created_at", updatedAt: "updated_at" },
        toObject: { virtuals: true },
        toJSON: { virtuals: true },
  });
  


module.exports = mongoose.model("Boards", GroupSchema);
