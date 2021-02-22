import { Vue } from 'vue-property-decorator';
import Cookies from 'js-cookie';
import VueI18n from 'vue-i18n';
import { AppModule } from '../store/modules/app';

Vue.use(VueI18n)

import enLocale from './en';
import cnLocale from './zh';

const messages = {
  en: {
    ...enLocale
  },
  zh: {
    ...cnLocale
  }
}
//console.log(AppModule.language)
const i18n = new VueI18n({
  locale: Cookies.get('language') || AppModule.language,
  messages
});
export default i18n
