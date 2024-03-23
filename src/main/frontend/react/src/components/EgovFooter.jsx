import React from 'react';
import { Link, useLocation  } from 'react-router-dom';
import ChatBot from "../chatbot/ChatBot";

function EgovFooter() {
    const location = useLocation();
    const isDetailPage = location.pathname.startsWith('/DetailPage');

    return (
        <div className="footer">
            <div className="inner">
                <div className="info">
                    <p>
                        대표문의메일 : allaw.official@gmail.com  <span className="m_hide">|</span><br className="m_show" />  대표전화 : 010-3367-8230<br />
                    </p>
                    <p className="copy">Copyright © 2024 All Rights Reserved.</p>
                </div>
                <div className="right_col">
                    <Link to="https://open.assembly.go.kr/portal/mainPage.do">
                        <img className="w" src="/assets/images/logo.png" />
                        <img className="m" src="/assets/images/logo.png" />
                    </Link>
                    <Link to="https://open.assembly.go.kr/portal/openapi/main.do">
                        <img className="w" src="/assets/images/logo_openapi.png" />
                        <img className="m" src="/assets/images/logo_openapi.png" />
                    </Link>
                </div>
            </div>
            {!isDetailPage && <ChatBot/>}
        </div>
    );
}

export default EgovFooter;