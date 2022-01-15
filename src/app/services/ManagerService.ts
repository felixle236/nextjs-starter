import { DataResponse } from '@app/common/Pagination';
import { Manager } from '@app/models/Manager';
import Api from '@utils/Api';

const managerService = {
  getProfile: async (token: string) => {
    const { data } = await Api.get<DataResponse<Manager>>('/api/v1/managers/profile', { token });
    return data;
  },
};

export default managerService;
