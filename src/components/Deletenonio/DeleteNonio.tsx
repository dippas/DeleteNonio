import { enableScrollbar } from '../../helpers/enableScrollBar';
import { removeCookies } from '../../helpers/removeCookies';
import { elementsToRemove } from '../../helpers/elementsToRemove';
import { isNonioSite } from '../../helpers/sites';

const DeleteNonio = () => {
  if (isNonioSite) {
    removeCookies();
    enableScrollbar();
    elementsToRemove();
  }

  return null;
};

export default DeleteNonio;
