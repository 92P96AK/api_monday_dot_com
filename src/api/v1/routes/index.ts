import { Router } from "express";
import { WebHookRoutes } from "./webHookRoutes";
export class Routes {
  public router: Router;
  public webHookRoutes: WebHookRoutes;
  constructor() {
    console.log('i am being called')
    this.router = Router({ mergeParams: true });
    this.webHookRoutes = new WebHookRoutes();
    this.setRoutes();
  }

  public setRoutes() {
    this.router.use("/webhook", this.webHookRoutes.webHookRoute);
  }
}
