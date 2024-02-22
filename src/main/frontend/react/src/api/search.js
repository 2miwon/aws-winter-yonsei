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
        const response = await axios.post('https://likms.assembly.go.kr/nsrch/ark/ark_trans.do', {
          convert: 'fw',
          target: 'common',
          charset: 'utf-8',
          query: query,
          datatype: 'json',
        });
  
        const keywords = [];
        for (const result of response.data.result) {
          if (result.totalcount) {
            for (const item of result.items) {
              keywords.push(item.keyword);
            }
          }
        }      
  
        return keywords;
      } catch (error) {
        throw new Error('Failed to fetch keword results');
      }
  };

