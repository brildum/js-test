import { chromium } from 'playwright';

export class Browser {
  constructor(url) {
    this._url = url;
    this._browser = null;
    this._page = null;
  }

  async load(path) {
    if (this._browser === null) {
      this._browser = await chromium.launch();
    }
    this._page = await this._browser.newPage();
    await this._page.goto(this._url + path);
  }

  async reset() {
    if (this._page) {
      await this._page.close();
      this._page = null;
    }
  }

  async close() {
    await this.reset();
    if (this._browser) {
      await this._browser.close();
      this._browser = null;
    }
  }

  querySelector(selector) {
    return new DOMSelector(this._page, selector);
  }
}

class DOMSelector {
  constructor(page, selector) {
    this._page = page;
    this._selector = selector;
  }

  text() {
    return this._page.$eval(this._selector, (node) => node.textContent);
  }

  class() {
    return this._page.$eval(this._selector, (node) => node.attr.class);
  }
}
