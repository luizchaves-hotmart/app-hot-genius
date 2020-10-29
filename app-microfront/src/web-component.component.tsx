import React from 'react';
import ReactDOM from 'react-dom';
import singleSpaHtml from 'single-spa-html';

class WebComponent extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    ReactDOM.render(
      <button className="hot-button hot-button--primary">Web Component with Shadow DOM</button>,
      this.shadowRoot
    );
  }
}

customElements.define('web-component', WebComponent);

const lifecycles = singleSpaHtml({
  template: '<web-component></web-component>'
});

export const bootstrap = lifecycles.bootstrap;
export const mount = lifecycles.mount;
export const unmount = lifecycles.unmount;
