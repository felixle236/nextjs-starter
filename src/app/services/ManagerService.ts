import { DataResponse } from '@app/common/Pagination';
import { Manager } from '@app/models/Manager';
import { Api, ApiOptions } from '@utils/Api';

const managerService = {
  getProfile: async (options?: ApiOptions) => {
    const { data } = await Api.get<DataResponse<Manager>>('/api/v1/managers/profile', options);
    return data;
  },
};

export default managerService;
