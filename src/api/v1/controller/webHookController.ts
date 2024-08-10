import { Request, Response } from "express";
import { WebHookService } from "../service";
import { IQueryConstructorPayload } from "../../../interfaces";
import { GraphQlQueryConstructor } from "../../../utils";
import { API, Log } from "../../../helper";

export class WebHookController {
  private webHookService: WebHookService;

  constructor() {
    this.webHookService = new WebHookService();
  }

  async updateColumnValue(req: Request, res: Response) {
    try {
      const { challenge, event } = req.body;
      if (challenge) {
        // Respond with the challenge key to verify the webhook
        res.status(200).send({ challenge });
        return;
      }

      // Process other data in the webhook payload
      if (event) {
        const { value, columnId, boardId, pulseId } = event;
        if (columnId === "numbers") {
          const payload: IQueryConstructorPayload = {
            queryType: "CHANGE_COLS_VALUE",
            payload: {
              ITEM_ID: pulseId,
              BOARD_ID: boardId,
              COL_ID: "numbers_1",
              COL_VALUE: value.value * 5,
            },
          };
          const query = GraphQlQueryConstructor(payload);
          console.log({query})
          return await API.post('', {query });

        }
        res.apiSuccess({
          message: "Success",
        });
      }
    } catch (error) {
      Log.error({message:"error",error})
      res.apiFail({
        message: "Failed",
        error,
      });
    }
  }
}
