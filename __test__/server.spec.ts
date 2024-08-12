import supertest from 'supertest';
import { Server } from '../src/api';

const server = new Server().getApp()

describe('health', () => {
  describe('get health', () => {
    it('should return status code 200', async () => {
      await supertest(server).get('/health').expect(200);
    });
  });
});
