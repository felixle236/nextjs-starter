import { DataResponse } from '@app/common/Response';
import { Client } from '@app/models/user/Client';
import { Api, ApiOptions } from '@utils/Api';

const clientService = {
  getProfile: async (options?: ApiOptions) => {
    const { data } = await Api.get<DataResponse<Client>>('/api/v1/clients/profile', options);
    return data;
  },
};

export default clientService;
