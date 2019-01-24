import {html, LitElement, property} from 'lit-element';

class MyElement extends LitElement {
  @property({type: String}) myProp = 'stuff';
  render() {
    return html`
      <p>Hello Worlds</p>
      ${this.myProp}
    `;
  }
}

customElements.define('my-element', MyElement);
