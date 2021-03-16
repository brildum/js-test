import * as ReactDOM from 'react-dom';

export class Browser {
  constructor(renderApp) {
    this._renderApp = renderApp;
    this._root = null;
  }

  async load(url) {
    this._root = document.createElement('div');
    document.body.appendChild(this._root);
    ReactDOM.render(this._renderApp(url), this._root);
  }

  async reset() {
    document.body.removeChild(this._root);
    this._root = null;
  }

  async querySelector(selector, callback) {
    return new DOMNode(this._root.querySelector(selector));
  }
}

class DOMNode {
  constructor(node) {
    this._node = node;
  }

  text() {
    return this._node.textContent;
  }

  class() {
    return this._node.attr.class;
  }
}
