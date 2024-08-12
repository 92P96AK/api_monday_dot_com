import { IItem } from "@interfaces";
import { ItemModel } from "../models";

export class WebHookRepository {
  constructor() {}

  public async UpdateResult(payload: IItem) {
    try {
      return await ItemModel.findOneAndUpdate(
        { ItemId: payload.ItemId },
        payload,
        {
          upsert: true,
          new: true,
        },
      );
    } catch (error) {
      throw error;
    }
  }
}
