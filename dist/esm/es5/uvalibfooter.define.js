
// uvalibfooter: Custom Elements Define Library, ES Module/es5 Target

import { defineCustomElement } from './uvalibfooter.core.js';
import { COMPONENTS } from './uvalibfooter.components.js';

export function defineCustomElements(win, opts) {
  return defineCustomElement(win, COMPONENTS, opts);
}
