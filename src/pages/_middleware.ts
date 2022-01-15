import { LocaleQueryKey, Locales, LocaleDefault } from '@constants/Locale';
import { NextRequest, NextResponse } from 'next/server';

export function middleware(req: NextRequest) {
  // Check only the page, doesn't include resource files.
  if (req.page.name) {
    const params = Object.fromEntries(req.nextUrl.searchParams.entries());
    let code = params[LocaleQueryKey];

    if (!code || !Object.values(Locales).some((locale) => locale.code === code)) {
      code = req.headers.get('accept-language')?.split(',')?.[0]?.split('-')?.[0] || LocaleDefault.code;
      req.nextUrl.searchParams.set(LocaleQueryKey, code);
      return NextResponse.redirect(req.nextUrl);
    }
  }
}
