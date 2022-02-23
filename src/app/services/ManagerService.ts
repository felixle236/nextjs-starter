import { DataResponse } from '@app/common/Response';
import { Manager } from '@app/models/user/Manager';
import { Api, ApiOptions } from '@utils/Api';

const managerService = {
  getProfile: async (options?: ApiOptions) => {
    const { data } = await Api.get<DataResponse<Manager>>('/api/v1/managers/profile', options);
    return data;
  },
};

export default managerService;
