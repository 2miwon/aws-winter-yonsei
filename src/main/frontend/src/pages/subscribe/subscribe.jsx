import React from 'react';
import { Link } from 'react-router-dom';

import { default as EgovLeftNav } from 'components/leftmenu/EgovLeftNavSupport';
import URL from 'constants/url';

let bills = [
    {
        number: 21001,
        title: "공직선거법 일부개정법률안",
        proposer: "김영배",
        date: "2024-01-29"
    },
    {
        number: 21002,
        title: "공직선거법 일개부정법률안",
        proposer: "김배영",
        date: "2024-02-29"
    },
];

let lists =["first"];
let keyword = "";

function addList() {
    lists = [...lists, keyword];
    keyword = "";
}
function subList(lists) {
    return (<>
        {lists.map((e) => {
        <div>list</div>
    })}</>
    )
}

function BillList({ bills }) {
    if (bills.length === 0) {
        return <p className="no_data">검색된 결과가 없습니다.</p>;
    }

    return bills.map((bill) => (
        <Link to={URL.BILL} className="list_item" key={bill.number}>
            <div>{bill.number}</div>
            <div className="al">{bill.title}</div>
            <div>{bill.proposer}</div>
            <div>{bill.date}</div>
        </Link>
    ));
}

function Subscribe() {
    return (
        <div className="container">
            <div className="c_wrap">
                {/* <!-- Location --> */}
                <div className="location">
                    <ul>
                        <li><Link to="" className="home">Home</Link></li>
                        <li><Link to="">구독</Link></li>
                        <li>구독</li>
                    </ul>
                </div>
                {/* <!--// Location --> */}

                <div className="layout">
                    {/* <!-- Navigation --> */}
                    <EgovLeftNav></EgovLeftNav>
                    {/* <!--// Navigation --> */}

                    <div className="contents QNA_LIST" id="contents">
                        {/* <!-- 본문 --> */}

                        <div className="top_tit">
                            <h1 className="tit_1">구독</h1>
                        </div>

                        <h2 className="tit_2">구독</h2>

                        {/* <!-- 검색조건 --> */}
                        <div className="condition">
                            <ul>
                                <li className="third_1 L">
                                    <label className="f_select" htmlFor="search_select">
                                        <select defaultValue={"0"} name="search_select" id="search_select">
                                            <option value="0">키워드</option>
                                            <option value="1">의안</option>
                                            <option value="2">제목/내용</option>
                                            <option value="3">작성자</option>
                                        </select>
                                    </label>
                                </li>
                                <li className="third_2 R">
                                    {/* <!-- 210806 수정 --> */}
                                    <span className="f_search w_500">
                                        <input type="text" name="" placeholder="" value={keyword}/>
                                        <button type="button">조회</button>

                                    </span>
                                </li>
                                <li>
                                    <button className="btn btn_blue_h46 pd35" onClick={addList}>등록</button>
                                </li>
                            </ul>
                        </div>
                        {/* <!--// 검색조건 --> */}

                        {/* <!-- 게시판목록 --> */}
                        <div className="board_list BRD008">
                            <div className="head">
                                <span>번호</span>
                                <span>제목</span>
                                <span>제안자</span>
                                <span>제안일</span>
                            </div>
                            <div className="result">
                                {subList(lists)}
                            </div>
                        </div>

                        {/* <!--// 게시판목록 --> */}

                        {/* <!--// 본문 --> */}
                    </div>
                </div>
            </div>
        </div>

    );

}

export default Subscribe;