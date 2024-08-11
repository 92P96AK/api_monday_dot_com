import { Request, Response } from "express";
import { WebHookService } from "../service";
import { IItem, IQueryConstructorPayload } from "@interfaces";
import { GraphQlQueryConstructor } from "@utils";
import { API, Log } from "@helper";
export class WebHookController {
  private webHookService: WebHookService;

  constructor() {
    this.webHookService = new WebHookService();
  }

  async updateColumnValue(req: Request, res: Response) {
    try {
      const { challenge, event } = req.body;
      if (challenge) {
        res.status(200).send({ challenge });
        return;
      }
      if (event) {
        const { value, columnId, boardId, pulseId } = event;
        if (columnId === "numbers") {
          const ItemId = parseInt(pulseId);
          const BoardId = parseInt(boardId);
          const Numbers = value.value;
          const ItemName = "numbers_1";
          const Result = value.value * 5;

          const payload: IItem = {
            ItemId,
            BoardId,
            ItemName,
            Numbers,
            Result,
          };

          await this.webHookService.UpdateResult(payload);
          const variables: IQueryConstructorPayload = {
            queryType: "CHANGE_COLS_VALUE",
            payload: {
              ITEM_ID: ItemId,
              BOARD_ID: BoardId,
              COL_ID: ItemName,
              COL_VALUE: Result,
            },
          };
          const query = GraphQlQueryConstructor(variables);
          await API.post("", {
            query,
          });
        }
      }
      res.apiSuccess({
        message: "Success",
      });
    } catch (error) {
      Log.error({ message: "error", error });
      res.apiFail({
        message: "Failed",
        error,
      });
    }
  }
}
