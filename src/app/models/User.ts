import { GenderType } from '@app/enums/GenderType';
import { RoleId } from '@app/enums/RoleId';
import { Model } from './Base';

export interface User extends Model {
  roleId: RoleId;
  firstName: string;
  lastName?: string;
  avatar?: string;
  gender?: GenderType;
  birthday?: string;
}
