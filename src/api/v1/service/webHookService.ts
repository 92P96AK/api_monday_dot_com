import { WebHookRepository } from "../repository";
export class WebHookService {
  private webHookRepository: WebHookRepository;

  constructor() {
    this.webHookRepository = new WebHookRepository();
  }

  public async updateColumnValue() {
    return await this.webHookRepository.updateColumnValue();
  }
}
