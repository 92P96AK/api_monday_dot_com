import supertest from "supertest";
import { Server } from "../src/api";

const server = new Server().getApp();

describe("Check Webhook", () => {
  describe("send event", () => {
    it("should return status code 200", async () => {
      await supertest(server)
        .post("/api/v1/webhook/update_column_value")
        .send({ challenge: "token" })
        .expect(200);
    });
  });
});
