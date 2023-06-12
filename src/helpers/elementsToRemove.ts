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

export const elementsToRemove = () => {
  const observer = new MutationObserver(() =>
    elements.forEach(element => document.querySelector(element)?.remove())
  );

  observer.observe(document, { childList: true, subtree: true });
};
