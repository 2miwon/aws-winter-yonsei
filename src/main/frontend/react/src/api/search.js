import { queryAllByAltText } from '@testing-library/react';
import axios from 'axios';

export const fetchSearchResults = async (query, page, sort) => {
    try {
      const response = await axios.get(`http://52.78.206.96:5000/search/${query}?page=${page}&sort=${sort}`);
      return response.data;
    } catch (error) {
      throw new Error('Failed to fetch search results');
    }
  };



export const fetchKeword = async (query) => {
  // 추천 검색어 요청해서 받아오기\
    try {
      //const response = await axios.get(`http://52.78.206.96:5000/keword/${query}`);
        const response = await axios.post(`/getKeyword`, { query: query });
        return (response.data.result[0].items).concat(response.data.result[1].items);
    } catch (error) {
      throw new Error('Failed to fetch keword results');
    }
};

