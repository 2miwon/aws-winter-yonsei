import React, {useEffect, useRef, useState} from "react";
import {useParams} from "react-router-dom";
import axios from "axios";
import '../../css/Election.css'

const Election = () => {
    const {id} = useParams();
    const idx = parseInt(id);

    const [selectedImage, setSelectedImage] = useState(0);

    const party = ["더불어민주당", "민생당", "정의당", "민중당", "국가혁명배당금당", "기독자유통일당", "무소속", "무소속"];
    const name = ["이형석", "최경환", "황순영", "윤인호", "이재욱", "강휘중", "노남수", "김원갑"];

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
        <div className="page">
            <div className="title">
                <img src="/assets/images/vote.svg" />
                <h1> 광주광역시 북구을</h1>
            </div>
            
            <div className="middle">
                    {Array.from({ length: 7 }, (_, i) => (
                        <div className="block" 
                            key={i}
                            onClick={(e) => setSelectedImage(i)} 
                            >
                            <img
                                src={`/assets/images/${i + 1}.png`}
                                className={selectedImage === i ? 'selected' : ''}
                                alt={`Image ${i + 1}`}
                                style={{ 
                                    filter: selectedImage === i ? 'none' : 'grayscale(0.8)', 
                                }}
                              />
                              <div className="info">
                                {i+1}
                                <div className="inner">
                                    <div style={{ fontSize: '20px' }}>{party[i]}</div>
                                    <div >{name[i]}</div>
                                </div>
                              </div>
                        </div>
                    ))}
                    {/* {Array.from({ length: 7 }, (_, i) => (
                        <div className="shadow">
                            <img
                                key={i}
                                src={`/assets/images/${i + 1}.png`}
                                className={selectedImage === i + 1 ? 'selected' : ''}
                                alt={`Image ${i + 1}`}
                              />
                        </div>
                    ))} */}
            </div>

            <div className="colbox">
                <div className="left_col">
                    <div style={{width: "100%"}}>
                    </div>
                </div>
                <div className="right_col">
                    
                </div>
            </div>
        </div>
    );
};

export default Election;