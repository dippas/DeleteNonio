import { enableScrollbar } from '../../helpers/enableScrollBar';
import { removeCookies } from '../../helpers/removeCookies';
import { removeElement } from '../../helpers/removeEement';
import { cofinaGroupURLs, globalmediaGroupUrls, renascencaGroupUrls } from '../../helpers/sites';

const DeleteNonio = () => {
  const sites = [...cofinaGroupURLs, ...globalmediaGroupUrls, ...renascencaGroupUrls];
  let ticking = false;

  return (
    <>
      {sites.map((site: string) => {
        if (window.location.href.includes(site)) {
          if (!ticking) {
            window.requestAnimationFrame(() => {
              removeCookies();
              enableScrollbar();
              removeElement('#imp-content-gate-root');
              removeElement('#nonio-basiclogin');
              removeElement('#wrapperContentGatingNonio');
              removeElement('#contentGateLoginDiv');
              removeElement('[id^="layer_gatting"]');
              removeElement('iframe[src^="/content"]');
              removeElement('.nonioBox');
              removeElement('.warning-nonio-overlay');
              removeElement('.tp-modal');
              removeElement('.tp-backdrop');
              removeElement('.tp-iframe-wrapper');
              removeElement('.brand__expresso');
              removeElement('.highlighted');
              ticking = false;
            });
          }
          ticking = true;
        }
      })}
    </>
  );
};
export default DeleteNonio;
