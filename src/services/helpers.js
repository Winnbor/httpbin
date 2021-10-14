import {
  deleteInfo,
  getInfo,
  patchInfo,
  postInfo,
  putInfo,
} from './api-service';

export const getRequest = async type => {
  try {
    switch (type) {
      case 'delete':
        return await deleteInfo();

      case 'get':
        return await getInfo();

      case 'patch':
        return await patchInfo();

      case 'post':
        return await postInfo();

      case 'put':
        return await putInfo();

      default:
        break;
    }
  } catch (error) {
    throw error;
  }
};
