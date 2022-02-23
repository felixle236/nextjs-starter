import { DataResponse } from '@app/common/Response';
import { UserAuth } from '@app/models/auth/UserAuth';
import { Api, ApiOptions } from '@utils/Api';

const authService = {
  authenticate: async (options?: ApiOptions) => {
    const { data } = await Api.get<DataResponse<UserAuth>>('/api/v1/auths', options);
    return data;
  },

  login: async (email: string, password: string, options?: ApiOptions) => {
    const { data } = await Api.post<DataResponse<UserAuth>>('/api/v1/auths/login', { email, password }, options);
    return data;
  },
};

export default authService;
