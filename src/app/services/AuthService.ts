import { DataResponse } from '@app/common/Pagination';
import { Auth } from '@app/models/Auth';
import Api from '@utils/Api';

const authService = {
  authenticate: async (token: string) => {
    const { data } = await Api.get<DataResponse<Auth>>('/api/v1/auths', { token });
    return data;
  },

  login: async (email: string, password: string) => {
    const { data } = await Api.post<DataResponse<string>>('/api/v1/auths/login', { email, password });
    return data;
  },
};

export default authService;
