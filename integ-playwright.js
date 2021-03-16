import { Browser } from './lib/playwright';

export const browser = new Browser('http://localhost:9000');
afterAll(async () => {
  await browser.close();
});
afterEach(async () => {
  await browser.reset();
});
