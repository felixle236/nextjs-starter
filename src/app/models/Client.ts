import { ClientStatus } from '@app/enums/ClientStatus';
import { AddressInfo } from '@app/value-objects/AddressInfo';
import { User } from './User';

export interface Client extends User {
  email: string;
  phone?: string;
  address?: AddressInfo;
  locale?: string;
  status: ClientStatus;
  activeKey?: string;
  activeExpire?: Date;
  activedAt?: Date;
  archivedAt?: Date;
}
