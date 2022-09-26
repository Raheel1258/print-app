import i18n from 'i18next';
import {initReactI18next} from 'react-i18next';
import {en} from './en';
import {chi} from './chi';

import * as RNLocalize from "react-native-localize";

const deviceLanguage = RNLocalize.getLocales();

//languageTag: 'zh-Hans-US' 
//languageCode: "zh"



  const resources = {
    en,
    chi,
  };
  
  i18n.use(initReactI18next).init(
    {
    resources,
    lng: (deviceLanguage[0].languageCode == 'zh') ? 'chi' : 'en' ,
  
    interpolation: {
      escapeValue: false,
    },
  });
  
  export default i18n;



