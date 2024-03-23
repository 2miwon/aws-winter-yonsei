import React, {useEffect, useRef, useState} from "react";
import {useParams} from "react-router-dom";
import axios from "axios";
import '../../css/Election.css'

const Election = () => {
    const {id} = useParams();
    const idx = parseInt(id);

    const [bill, setBill] = useState({
        id: idx,
        name: '',
        proposer: '',
        date: ''
    });
    const [content, setContent] = useState();

    const [isLoading, setIsLoading] = useState(false);
    const fetchSummary = async () => {
        setIsLoading(true);
        try {
            const response = await axios.post(`/gpt/${idx}/summary`);
            setContent(response.data);

            setIsLoading(false);
        } catch (error) {
            console.error('요약 내용을 불러오는 데 실패했습니다.', error);
            setIsLoading(false);
        }
    };

    const renderContentWithBreaks = (content) => {
        return content.split(/(?=\d\.)/).map((paragraph, index) => (
            <p key={index} className="summary-text">{paragraph}</p>
        ));
    };

        return (
        <div className="detail-page">
            <h1 className="detail-page-title">{bill.name}</h1>
            <div className="colbox">
                <div className="left_col">
                    <div style={{width: "100%"}}>
                    </div>
                </div>
                <div className="right_col">
                    <div className="bill-info">
                        <h2 className="bill-info-title">법안 정보</h2>
                        <div className="bill-info-detail">
                            <span className="detail-label">법안 번호:</span> {bill.id}
                        </div>
                        <div className="bill-info-detail">
                            <span className="detail-label">법안 제목:</span> {bill.name}
                        </div>
                        <div className="bill-info-detail">
                            <span className="detail-label">대표 발의자:</span> {bill.proposer}
                        </div>
                        <div className="bill-info-detail">
                            <span className="detail-label">발의일:</span> {bill.date}
                        </div>
                    </div>

                    <div className="bill-summary">
                        {!content && (
                        <button className="summary-button" onClick={fetchSummary} disabled={isLoading}>
                            {isLoading ? '요약 중...' : '요약 보기'}
                        </button>)
                        }
                        {content && (
                            <div className="summary-content">
                                <h3 className="summary-title">요약 내용</h3>
                                {renderContentWithBreaks(content)}
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Election;