import api from "./api";

const ENDPOINT = '/answer'

export const updateCurrentBlock = async (data, token) => {
  const {clientId, result, blockName, userId, searchId, uniqueId, customFilter} = data;

  const obj = {
    clientId,
    blockName,    
    answer: result,
    userId,
    uniqueId,
    customFilter,
    searchId: !searchId ? 0 : searchId
  }

  try {
    const { data } = await api.post(
      ENDPOINT,
      obj,
      {
        headers: { 'Authorization': token }
      }
    );

    return data[0];
  } catch (error) {
    console.error(error);
  }
};

export default {
  updateCurrentBlock
}