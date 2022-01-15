import { Locale } from '@common/Locale';

export const Locales: { [key: string]: Locale } = {
  English: {
    code: 'en',
    name: 'English',
    flag: 'us.svg',
  },
  Vietnamese: {
    code: 'vi',
    name: 'Việt Nam',
    flag: 'vn.svg',
  },
  Japanese: {
    code: 'ja',
    name: '日本',
    flag: 'jp.svg',
  },
};

export const LocaleDefault = Locales.English;
export const LocaleQueryKey = 'lang';
