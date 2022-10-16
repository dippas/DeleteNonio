import { enableScrollbar } from '../../helpers/enableScrollBar';
import { removeCookies } from '../../helpers/removeCookies';
import { elementsToRemove } from '../../helpers/elementsToRemove';
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
              elementsToRemove();
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
