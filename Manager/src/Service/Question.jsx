import api from "./api";
import { getSearchById } from "./Search"

const ENDPOINT = '/search'

export const getIntroQuestions = async (searchId, token) => {
  try {
    const searchData = await getSearchById(searchId, token);

    const { data } = await api.get(
      `${ENDPOINT}/intro/${searchData.introduction}`,
      {
        headers: { 'Authorization': token }
      }
    );

    // Ref Question on DB ... Rule
    return data["section_03"].answer;
  } catch (error) {
    console.error(error);
    return [];
  }
}

export const getMainQuestions = async (searchId, token) => {
  try {
    const searchData = await getSearchById(searchId, token);

    const { data: { client_id, ...questions } } = await api.get(
      `${ENDPOINT}/question/${searchData.search}`,
      {
        headers: { 'Authorization': token }
      }
    );

    return questions;
  } catch (error) {
    console.error(error);
    return [];
  }
}

export default {
    getIntroQuestions,
}