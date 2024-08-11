import { model, Schema } from "mongoose";
import { IItem } from "../../../interfaces";

const IteamSchema = new Schema<IItem>(
  {
    ItemId: { type: Number, required: true },
    BoardId: { type: Number, required: true },
    ItemName: { type: String, required: true },
    Numbers: { type: Number, required: true },
    Result: { type: Number, required: true },
  },
  {
    collection: "Items",
    timestamps: { createdAt: "created_at", updatedAt: "updated_at" },
    toObject: { virtuals: true },
    toJSON: { virtuals: true },
  }
);

export const ItemModel = model("Items", IteamSchema);
