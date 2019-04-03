import I18n from "react-native-i18n";
import vi from "./vi/vi.json";
import en from "./en/en.json";

I18n.fallbacks = true;

// English language is the main language for fall back:
I18n.translations = { en, vi };
// I18n.locale = 'en';
// const languageCode = I18n.locale.substr(0, 2);
export default I18n;

// // All other translations for the app goes to the respective language file:
// switch (languageCode) {
//     case 'vi':
//         I18n.translations.vi = vi;
//         break;
//     default:
//         I18n.translations.en = en;
//         break;
// }
// export default translate = {
//     t: (key, option) => {
//         const opt = option || { locale: Model.getLang() }
//         return key
//             ? I18n.t(key, opt)
//             : ''
//     },
//     tOri: (key) => {
//         return key
//             ? I18n.t(key)
//             : ''
//     },
//     tEn: (key) => {
//         return key
//             ? I18n.t(key)
//             : ''
//     }
// }
