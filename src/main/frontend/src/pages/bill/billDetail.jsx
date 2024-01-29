import React from 'react';
import { Link } from 'react-router-dom';

import { default as EgovLeftNav } from 'components/leftmenu/EgovLeftNavSupport';
import URL from 'constants/url';

function BillDetail() {
    return(
        <div className="container">
            <div className="c_wrap">
                {/* <!-- Location --> */}
                <div className="location">
                    <ul>
                        <li><Link to="" className="home">Home</Link></li>
                        <li><Link to="">의안</Link></li>
                        <li>의안 내용</li>
                    </ul>
                </div>
                {/* <!--// Location --> */}

                <div className="layout">
                    {/* <!-- Navigation --> */}
                    <EgovLeftNav></EgovLeftNav>
                    {/* <!--// Navigation --> */}

                    <div className="contents PDS_VIEW" id="contents">
                        {/* <!-- 본문 --> */}

                        <div className="top_tit">
                            <h1 className="tit_1">의안</h1>
                        </div>

                        <h2 className="tit_2">의안 내용</h2>

                        {/* <!-- 상세 --> */}
                        <div className="board_view3">
                            <p className="tit">공직선거법 일부개정법률안</p>

                            <div className="info">
                                <dl>
                                    <dt>의안 번호</dt>
                                    <dd>21001</dd>
                                </dl>
                                <dl>
                                    <dt>제안자</dt>
                                    <dd>김영배</dd>
                                </dl>
                                <dl>
                                    <dt>제안일</dt>
                                    <dd>2024-01-29</dd>
                                </dl>
                                <dl>
                                    <dt>원문 파일</dt>
                                    <dd><image alt="파일"></image></dd>
                                </dl>
                            </div>
                        </div>
                        {/* <!--// 상세 --> */}

                        <h3 className="tit_5">제안 이유 및 주요 내용</h3>

                        <p className="pds_des">현행법은 투표참관인 및 개표참관인에게 부정한 투ㆍ개표나 법 위반사실을 발견한 때는 이를 신고하고 시정을 요구할 수 있는 권한을 부여하면서, 대한민국 국민이 아닌 사람이나 미성년자 등은 투표참관인이나 개표참관인으로 지정될 수 없도록 하고 있음.
                            한편, 투표관리관ㆍ투표사무원 및 개표사무원은 공무원, 각급학교의 교직원, 투ㆍ개표 사무를 보조할 능력이 있는 사람 등에서 위촉할 수 있도록 규정하고 있는데, 대한민국 국민이 아닌 사람도 투ㆍ개표참관인보다 더 막중한 권한과 책임이 요구되는 투ㆍ개표사무원 등으로 위촉될 가능성이 있어 명문으로 제한 규정을 둘 필요가 있음.
                            이에, 대한민국 국민이 아닌 사람은 투표관리관ㆍ투표사무원 및 개표사무원으로 위촉될 수 없도록 명문의 규정을 두려는 것임(안 제146조의2제2항 등).
                        </p>

                        <h3 className="tit_5">AI 요약</h3>

                        <p className="pds_des">요약하기</p>

                        {/* <!-- 버튼영역 --> */}
                        <div className="board_btn_area">
                            <div className="left_col btn1">
                            </div>

                            <div className="right_col btn1">
                                <Link to={URL.SUPPORT_DOWNLOAD} className="btn btn_blue_h46 w_100">목록</Link>
                            </div>
                        </div>
                        {/* <!--// 버튼영역 --> */}

                        <div className="bottom_navi">
                            <dl>
                                <dt>이전글</dt>
                                <dd><Link to="">egovframe installer v1.03</Link></dd>
                            </dl>
                            <dl>
                                <dt>다음글</dt>
                                <dd><Link to="">egovframe installer v1.03</Link></dd>
                            </dl>
                        </div>

                        {/* <!--// 본문 --> */}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default BillDetail;