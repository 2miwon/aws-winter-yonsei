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
    try {
        const response = await axios.get('https://ysu-004.es.us-east-2.aws.elastic-cloud.com/autocomplete/_search', {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'ApiKey STh4TDA0MEJ3enFyUy1PS1RuRXI6WFZNVUpid0JUVi1GdTRVV21QSFdzZw=='
            },
            params: {
                q: `query: "${query}"`
            }
        });
        // 검색 결과를 서버로 전달하여 HTML 형식으로 렌더링된 페이지를 받음
        const searchResultHtml = await axios.post('http://52.78.206.96:5000/render-search-results', {
            searchResults: response.data
        });

        // 새 창 열어서 검색 결과 출력
        let windowObj = window.open('', 'Print', 'width=1350, height=800, toolbars=no, scrollbars=no, status=no, resizable=no');
        windowObj.document.write(searchResultHtml.data);
        windowObj.document.close();
        windowObj.focus();
        windowObj.print();
        // 응답 데이터 처리
        const hits = response.data.hits.hits;
        const keywords = hits.map(hit => hit._source.search_field);

        return keywords;
    } catch (error) {
        console.error('Failed to fetch keyword results:', error);
        throw new Error('Failed to fetch keyword results');
    }
};

