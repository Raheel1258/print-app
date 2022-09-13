import i18n from 'i18next';
import {initReactI18next} from 'react-i18next';
import {en} from './en';
import {chi} from './chi';


  const resources = {
    en,
    chi,
  };
  
  i18n.use(initReactI18next).init(
    {
    resources,
    lng: 'chi',
  
    interpolation: {
      escapeValue: false,
    },
  });
  
  export default i18n;



