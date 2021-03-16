import * as React from 'react';
import { MemoryRouter } from 'react-router';
import { Browser } from './lib/react';
import { App } from './example';

function renderApp(url) {
  return (
    <MemoryRouter initialEntries={[url]}>
      <App/>
    </MemoryRouter>
  );
}

export const browser = new Browser(renderApp);
afterEach(async () => {
  await browser.reset();
});
