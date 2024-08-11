import { Router } from "express";
import { WebHookController } from "../controller";
import { Validate } from "@utils";
import { webHookBody } from "../validation";

export class WebHookRoutes {
  public webHookRoute: Router;
  public webHookController: WebHookController;

  constructor() {
    this.webHookRoute = Router({ mergeParams: true });
    this.webHookController = new WebHookController();
    this.setRoutes();
  }

  public setRoutes() {
    this.webHookRoute.post(
      "/update_column_value",
      Validate(webHookBody),
      this.webHookController.updateColumnValue.bind(this.webHookController)
    );
  }
}
