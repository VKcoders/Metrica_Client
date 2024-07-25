import api from "./api";

const URL = '/user'

export const getUsersProgressFromSearch = async (id, token) => {
  try {
    const { data } = await api.get(
      `${URL}/progress/${id}`,
      {
        headers: { 'Authorization': token }
      }
    );

    return data;
  } catch (error) {
    console.error(error);
    return [];
  }
};