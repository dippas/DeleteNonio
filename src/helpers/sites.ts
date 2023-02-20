const globalmediaGroupUrls = [
  'dinheirovivo.pt',
  'tsf.pt',
  'ojogo.pt',
  'jn.pt',
  'dn.pt',
  'n-tv.pt',
  'evasoes.pt',
  'menshealth.pt',
  'womenshealth.pt',
  'noticiasmagazine.pt',
  'voltaaomundo.pt',
  'delas.pt'
];
const cofinaGroupURLs = [
  'record.pt',
  'cmjornal.pt',
  'cm-tv.pt',
  'jornaldenegocios.pt',
  'flash.pt',
  'vidas.pt',
  'maxima.pt',
  'sabado.pt',
  'empregosonline.pt',
  'classficadoscm.pt',
  'aquelamaquina.pt'
];
const renascencaGroupUrls = ['rr.sapo.pt', 'rfm.sapo.pt', 'megahits.sapo.pt', 'radiosim.sapo.pt'];

const nonioSites = [...cofinaGroupURLs, ...globalmediaGroupUrls, ...renascencaGroupUrls];

export const isNonioSite = nonioSites.some(site => location.href.includes(site));
