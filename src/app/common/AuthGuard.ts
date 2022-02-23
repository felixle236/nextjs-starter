import { RoleId } from '@app/enums/RoleId';

export interface AuthGuard {
  allowAuth?: boolean;
  disallowAuth?: boolean;
  roleIds?: RoleId[];
  excludeRoleIds?: RoleId[];
  redirect?: string;
}
