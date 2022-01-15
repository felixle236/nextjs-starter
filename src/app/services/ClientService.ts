import { DataResponse } from '@app/common/Pagination';
import { Client } from '@app/models/Client';
import Api from '@utils/Api';

const clientService = {
  getProfile: async (token: string) => {
    const { data } = await Api.get<DataResponse<Client>>('/api/v1/clients/profile', { token });
    return data;
  },
};

export default clientService;
