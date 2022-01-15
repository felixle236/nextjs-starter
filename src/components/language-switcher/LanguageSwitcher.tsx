import { FunctionComponent } from 'react';
import { useRouter } from 'next/router';
import { usePageContext } from '@core/PageContext';
import { LocaleDefault, Locales } from '@constants/Locale';

interface Props {
  onClick?: () => void;
}

const LanguageSwitcher: FunctionComponent<Props> = ({ onClick }) => {
  const router = useRouter();
  const pageContext = usePageContext();
  const { pathname, asPath } = router;
  // pageContext.setLocale(LocaleDefault);
  return (
    <>
      {Object.values(Locales).map((locale) => (
        <button key={locale.code}>{locale.name}</button>
      ))}
    </>
  );
};

export default LanguageSwitcher;
