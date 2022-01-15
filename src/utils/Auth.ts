import { RoleId } from '@app/enums/RoleId';
import authService from '@app/services/AuthService';
import clientService from '@app/services/ClientService';
import managerService from '@app/services/ManagerService';
import { AuthKey } from '@constants/Common';
import { NextPageContext } from 'next';
import { getCookie } from './Cookie';

export async function checkUserAuthenticated(ctx: NextPageContext) {
  let auth, profile;
  const token = getCookie(AuthKey, ctx.req?.headers?.cookie || '');
  if (token) {
    try {
      auth = await authService.authenticate(token);
      if (auth.roleId === RoleId.Client) {
        profile = await clientService.getProfile(token);
      } else {
        profile = await managerService.getProfile(token);
      }
    } catch (error) {
      ctx.res?.setHeader('set-cookie', 'token=; max-age=0');
    }
  }
  return { token, auth, profile };
}
