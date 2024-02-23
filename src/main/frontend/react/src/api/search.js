import { queryAllByAltText } from '@testing-library/react';
import axios from 'axios';

export const fetchSearchResults = async (query, page, sort) => {
    const BACKEND_URL = `http://52.78.206.96:8000/search/${query}?page=${page}&sort=${sort}`;
    const BACKEND_URL_2 = `https://allaw.site:8000/search/${query}?page=${page}&sort=${sort}`;
    try {
        const response = await axios.get(BACKEND_URL);
        console.log(response);
      return response.data;
    } catch (error) {
        try {
            const response = await axios.get(BACKEND_URL_2);
            return response.data; // 백엔드에서 반환한 응답 (BACKEND_URL_2 사용)
        } catch (error) {
            console.error('Error sending message with BACKEND_URL_2:', error);
            // BACKEND_URL_2에서도 오류가 발생한 경우, 오류 처리
            return {error: 'Failed to send message with both URLs'}; // 최종 오류 처리
        }
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
        }, {
          headers: {
            'User-Agent': 'www.allaw.site'
          }
        });

        return (response.data.result[0].items).concat(response.data.result[1].items);
      } catch (error) {
        throw new Error('Failed to fetch keword results');
      }
  };

