import { removeElement } from './removeElement';

const elements = [
  '#imp-content-gate-root',
  '#nonio-basiclogin',
  'wrapperContentGatingNonio',
  '[id^="layer_gatting"]',
  'iframe[src^="/content"]',
  '.nonioBox',
  '.warning-nonio-overlay',
  '.tp-modal',
  '.tp-backdrop',
  '.tp-iframe-wrapper',
  '.brand_expresso'
];

export const elementsToRemove = () => elements.map((element: string) => removeElement(element));
