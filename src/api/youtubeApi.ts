import { ListParams, ListResponse, Youtube } from 'models';
import axiosClient from './axiosClient';

const youtubeApi = {
  getAll(): Promise<ListResponse<Youtube>> {
    const url = '/share/list';
    return axiosClient.get(url);
  },

  share(data: Youtube): Promise<Youtube> {
    const url = '/share';
    return axiosClient.post(url, data);
  },
};

export default youtubeApi;
