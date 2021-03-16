import { browser } from '@integ-tests';

test('loads the home page', async () => {
  await browser.load('/');
  const node = await browser.querySelector('[data-test-target="component"]');
  expect(await node.text()).toEqual('Home');
});

test('loads the other page', async () => {
  await browser.load('/page');
  const node = await browser.querySelector('[data-test-target="component"]');
  expect(await node.text()).toEqual('Page');
});
