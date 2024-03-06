import { queryAllByAltText } from '@testing-library/react';
import axios from 'axios';

export const fetchSearchResults = async (query, page, sort) => {    
    try {
        const response = await axios.post('https://allaw.site/api/search', 
        {
            query: query,
            page: page,
            sort: sort
        });
      return response.data;
    } catch (error) {
        return {error: 'Failed to send message'};
    }
  };



export const fetchKeword = async (query) => {
    try {
        // const response = await axios.post('/elastic/autocomplete/_search', 
        // {
        //     query: {
        //         match: {
        //             content: query
        //         }
        //     }
        // },
        // {
        //     headers: {
        //         'Content-Type': 'application/json',
        //         'Authorization': 'ApiKey STh4TDA0MEJ3enFyUy1PS1RuRXI6WFZNVUpid0JUVi1GdTRVV21QSFdzZw=='
        //     }
        // });
        // // 검색 결과를 서버로 전달하여 HTML 형식으로 렌더링된 페이지를 받음
        // const searchResultHtml = await axios.post('api/render-search-results', {
        //     searchResults: response.data
        // });

        // // 새 창 열어서 검색 결과 출력
        // let windowObj = window.open('', 'Print', 'width=1350, height=800, toolbars=no, scrollbars=no, status=no, resizable=no');
        // windowObj.document.write(searchResultHtml.data);
        // windowObj.document.close();
        // windowObj.focus();
        // windowObj.print();
        // 응답 데이터 처리
        // const hits = response.data.hits.hits;
        // const keywords = hits.map(hit => hit._source.search_field);

        // return keywords;
    } catch (error) {
        console.error('Failed to fetch keyword results:', error);
        throw new Error('Failed to fetch keyword results');
    }
};

