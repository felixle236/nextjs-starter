import { createContext, useContext } from 'react';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface PageContextValue {}

const PageContext = createContext({} as PageContextValue);
PageContext.displayName = 'PageContext';

export const usePageContext = () => useContext(PageContext);
export default PageContext;
