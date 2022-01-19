import { DataResponse } from '@app/common/Pagination';
import { Auth } from '@app/models/Auth';
import { Api, ApiOptions } from '@utils/Api';

const authService = {
  authenticate: async (options?: ApiOptions) => {
    const { data } = await Api.get<DataResponse<Auth>>('/api/v1/auths', options);
    return data;
  },

  login: async (email: string, password: string, options?: ApiOptions) => {
    const { data } = await Api.post<DataResponse<Auth>>('/api/v1/auths/login', { email, password }, options);
    return data;
  },
};

export default authService;
