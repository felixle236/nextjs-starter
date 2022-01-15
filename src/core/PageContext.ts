import { Locale } from '@common/Locale';
import { createContext, Dispatch, SetStateAction, useContext } from 'react';

export interface PageContextValue {
  locale?: Locale;
  setLocale: Dispatch<SetStateAction<Locale | undefined>>;
}

const PageContext = createContext({} as PageContextValue);
PageContext.displayName = 'PageContext';

export const usePageContext = () => useContext(PageContext);
export default PageContext;
