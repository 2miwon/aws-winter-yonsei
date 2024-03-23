import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import '../../css/Election.css';
import ElectionChat from "./ElectionChat";

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
    // useParams를 사용하여 URL에서 후보자 ID를 가져옵니다.
    const [candidate, setCandidate] = useState(null);
    const [agreeMessages, setAgreeMessages] = useState([]);
    const [disagreeMessages, setDisagreeMessages] = useState([]);

    const candidates = [
        {
            "name": "이형석",
            "party": "더불어민주당",
            "pledge": "1. 미래산업 중심도시 구축\n- 첨단 3지구 인공지능(AI) 집적화단지 조기 조성\n- 인공지능창업보육센터 유치, 인공지능(AI) 생태계 구축으로 일자리 창출\n2. 교통 인프라 대폭 개선\n- 호남고속도로 확장 및 용봉IC 진입로 조속 개설\n- 도시철도 2호선 조기 착공을 통한 교통 편의 향상\n3. 영산강 수변공원 내 스포츠 인프라 확충\n- 영산강 수변공원 활용한 생활스포츠 인프라 조성\n- 양산동 북구종합체육관 건립\n4. 농수축산물 유통물류 중심 도시 조성\n- 농수축산물 복합유통단지 건국동 유치\n- 소상공인 영업환경 개선을 통한 매출증대와 일자리 창출 도모\n5. 시민에게 편리한 운전면허시험장 유치\n- 운전면허시험장 북구 유치 추진\n- 운전면허 수험생들의 접근성 제고 및 경제적 부담 완화\n6. 창업기업 허브 도시 구축\n- 본촌산단 내 창업기업성장지원센터 및 지식산업센터 건립\n- 고부가가치 청년 창업기업 유치로 지역경제 활성화\n7. 문화 활성화 도시 구축\n- 광주비엔날레 전시관 신축 이전\n- 호남고속도로 에코브릿지 설치로 중외공원 문화예술벨트 접근성 강화\n8. 생활인프라 시설 확대로 삶의 질 개선\n- 생활밀착형 공공복합시설 및 공공행정복지센터 확충(신용동, 운암동, 동림동 등)\n- 행정, 문화, 복지, 보육 등 일상생활 삶의 질 개선 서비스 제공\n9. 중외공원을 시민의 힐링 공간으로 개선\n- 중외공원 내 송전탑 지중화 추진\n- 매곡동, 삼각동, 운암동, 양산동 환경개선 및 주민 건강권 확보\n10. 쾌적한 환경 조성\n- 광역 오폐수 처리장 직수관 연결 및 우/오수 분류식 배관 설치(운암동, 동림동)\n- 임대형 민간투자사업(BTL) 조기 추진으로 쾌적한 주거환경 조성\n"
        },
        {
            "name": "노남수",
            "party": "무소속",
            "pledge": "5대 민생공약은 첫째. 내년 정부예산 약607조를 기준으로 총30%를 예산절감추진, 정부예산 혁신운동을 전개하고 이를 통해서 약180조원규모의 절감예산을 중소상공인들과 자영업자, 비정규직노동자, 청년 일자리창출, 출산정책, 등을 위한 특별예산으로 전환 및 적극 지원, 둘째. 전국 약650만 중소상공인, 자영업자를 위한 정책과 예산을 전문적으로 지원하고 애로사항을 중점적으로 해결하는 정부부처를 신설해서 부총리급으로 격상운영, 셋째. 희망자에 한해서 중소상공인들과 자영업자에 1억씩 10년간 무이자 대출 긴급지원(코로나19위기 극복), 넷째. 국회의원수 현행 300명에서 단계적으로 200명으로 축소 및 특권 대폭 축소, 다섯째. 억울한 국민들을 위한 국민신문고 제도 활성화 및 1인 1변호인 정부 무료 책임법률도우미 제도 신설 등 이다.\n\n"
        }
];
    useEffect(() => {
        setCandidate(candidates[0]);
        // console.log("candidate: ", candidate);
    }, [candidate]);

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
                        <div className="block">
                            <img
                                key={i}
                                src={`/assets/images/${i + 1}.png`}
                                className={selectedImage === i + 1 ? 'selected' : ''}
                                alt={`Image ${i + 1}`}
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

            <ElectionChat candidateInfo={candidates[0]}/>
        </div>
    );
};

export default Election;