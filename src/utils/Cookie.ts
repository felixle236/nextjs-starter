export function setCookie(cname: string, cvalue: string, expireSecond: number) {
  const d = new Date();
  d.setTime(d.getTime() + expireSecond * 1000);
  const expires = 'expires=' + d.toUTCString();
  document.cookie = cname + '=' + cvalue + ';' + expires + ';path=/';
}

export function getCookie(name: string, stringCookie: string) {
  const value = `; ${stringCookie}`;
  const parts = value.split(`; ${name}=`);
  if (parts.length === 2) {
    return parts.pop()?.split(';').shift();
  }
  return undefined;
}
