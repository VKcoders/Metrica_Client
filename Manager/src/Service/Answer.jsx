import api from "./api";

const ENDPOINT = '/answer'

export const getAllAnswersByQuestion = async (questionId, searchId, filter, token) => {
  try {
    const { data } = await api.get(
      `${ENDPOINT}/${questionId}`,
      {
        headers: { 'Authorization': token },
        params: {
          searchId
        }
      }
    );

    if (filter === "all") return data;

    return data.filter(({custom_filter}) => custom_filter === filter);
  } catch (error) {
    console.error(error);
    return [];
  }
}


export default {
  getAllAnswersByQuestion,
}