import axios from 'axios';

export const fishCategory = async () => {
  return await axios.get(`/api/fish-category`);
};
