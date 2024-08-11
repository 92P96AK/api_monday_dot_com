import { WebHookRepository } from "../repository";
import { IItem } from "../../../interfaces";
export class WebHookService {
  private webHookRepository: WebHookRepository;

  constructor() {
    this.webHookRepository = new WebHookRepository();
  }

  public async UpdateResult(payload: IItem) {
    return await this.webHookRepository.UpdateResult(payload);
  }
}
