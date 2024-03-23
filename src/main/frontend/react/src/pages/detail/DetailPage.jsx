import React, {useEffect, useRef, useState} from "react";
import {useParams} from "react-router-dom";
import WebViewer from "@pdftron/webviewer";
import axios from "axios";
import '../../css/detailPage.css'
import ChatWindow from "../../chatbot/ChatWindow";

const DetailPage = () => {
    const {id} = useParams();
    const idx = parseInt(id);
    const viewer = useRef(null);

    const [bill, setBill] = useState({
        id: idx,
        name: '',
        proposer: '',
        date: ''
    });
    const [content, setContent] = useState();
    const [opinionDetail, setOpinionDetail] = useState('');
    const [opinionType, setOpinionType] = useState(0); // 기본값을 0으로 설정
    const [opinions, setOpinions] = useState([]);


    useEffect(() => {
        const fetchBillDetails = async () => {
            try{
                const response = await axios.get(
                    `https://open.assembly.go.kr/portal/openapi/TVBPMBILL11?TYPE=json&BILL_NO=${idx}`
                );
                const data = response.data.TVBPMBILL11[1].row[0];
                setBill({
                    ...bill,
                    name: data.BILL_NAME,
                    proposer: data.PROPOSER,
                    date: data.PROPOSE_DT
                });
            } catch (error) {
                console.error('법안 정보를 불러오는 데 실패했습니다.', error);
            }
        };

        const fetchPdf = async () => {
            try {
                WebViewer(
                    {
                        path: "/webviewer/lib/public",
                        licenseKey: "demo:1707201620106:7f4eafe9030000000069fe03ee7211c47e235a224e21040bb60f132600",
                        initialDoc: `https://allaw.site/api/file/${idx}`,
                    },
                    viewer.current,
                ).then((instance) => {

                });
            } catch (error) {
                console.error("Failed to fetch PDF URL:", error);
            }
        };

        const fetchOpinions = async () => {
            try {
                const response = await axios.get(`/opinions?billsNo=${idx}`);
                setOpinions(response.data);
            } catch (error) {
                console.error('의견을 불러오는 데 실패했습니다.', error);
            }
        };

        fetchBillDetails();
        fetchPdf();
        fetchOpinions();
    }, [idx]);

    const renderOpinions = () => {
        return (
            <div>
                <h3>의견 목록</h3>
                <ul style={{ textAlign: "center", listStyleType: "none", padding: 0 }}>
                    {opinions.map((opinion, index) => (
                        <li key={index} style={{ display: "flex", justifyContent: "center", margin: "10px 0" }}>
                            <div style={{ flex: 1, textAlign: "left" }}>
                                <strong>작성자:</strong> {opinion.userName}
                            </div>
                            <div style={{ flex: 1, textAlign: "left" }}>
                                <strong></strong> <span className={getGradeLabel(opinion.grade)} />
                            </div>
                            <div style={{ flex: 2, textAlign: "left" }}>
                                <strong>내용:</strong> {opinion.detail}
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        );
    };


    const getGradeLabel = (grade) => {
        switch (grade) {
            case 0:
                return 'thumbs-up'; // 긍정을 나타내는 CSS 클래스 이름
            case 1:
                return 'thumbs-down'; // 부정을 나타내는 CSS 클래스 이름
            default:
                return '평가 등급 선택';
        }
    };

    const [isLoading, setIsLoading] = useState(false);
    const fetchSummary = async () => {
        setIsLoading(true);
        try {
            const response = await axios.post(`/gpt/${idx}/summary`);
            // const response = await axios.post(`http://127.0.0.1/gpt/${idx}/summary`);
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

    const submitOpinion = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post(`/makeOpinion`, {
                billsNo : bill.id,
                detail: opinionDetail,
                grade: opinionType
            });
            console.log('Opinion submitted:', response.data);
            setOpinionDetail('');
            setOpinionType(0);
        } catch (error) {
            console.error('Opinion submission failed:', error);
        }
    };

    return (
        <div className="detail-page">
            <h1 className="detail-page-title">{bill.name}</h1>
            <div className="colbox">
                <div className="left_col">
                    <div style={{width: "100%"}}>
                        <div className="webviewer" ref={viewer} style={{height: "100vh"}}></div>
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

                    <div className="opinion-form">
                        <form onSubmit={submitOpinion}>
                            <div className="form-group">
                            <textarea
                                id="opinionDetail"
                                value={opinionDetail}
                                onChange={(e) => setOpinionDetail(e.target.value)}
                                placeholder="의견을 입력하세요"
                                required
                            />
                            </div>
                            <div className="controls">
                                <div className="form-group">
                                    <label className="thumbs-up-label">
                                        <input
                                            type="radio"
                                            value={0}
                                            checked={opinionType === 0}
                                            onChange={() => setOpinionType(0)}
                                        />
                                    </label>
                                </div>
                                <div className="form-group">
                                    <label className="thumbs-down-label">
                                        <input
                                            type="radio"
                                            value={1}
                                            checked={opinionType === 1}
                                            onChange={() => setOpinionType(1)}
                                        />
                                    </label>
                                </div>
                                <button type="submit">작성</button>
                            </div>
                        </form>
                    </div>

                    {opinions.length > 0 && renderOpinions()} {/* opinions 배열이 비어있지 않으면 의견 목록을 표시 */}

                </div>
            </div>
        </div>
    );
};

export default DetailPage;
