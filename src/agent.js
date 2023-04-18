import axios from 'axios';
import { API_ENDPOINT } from '../../utils/api';

const AI_AGENT = {
  sendMessage: async (message) => {
    const response = await axios.post(API_ENDPOINT, { message });
    return response.data;
  },
};

export default AI_AGENT;
