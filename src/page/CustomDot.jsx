import React, { useState,useRef  } from "react";
import styled from "styled-components";
import DotShowScreen from "./DotShowScreen";
import DotUserCustomFood from "../DotCustom/DotUserCustomFood";
import DotUserCustomWaterEx from "../DotCustom/DotUserCustomWaterEx";
import DotUserCustomColor from "../DotCustom/DotUserCustomColor";
import Modal from "react-modal";

const Container = styled.div`
    display: flex;
    flex-direction: row;
    margin:auto;
    width:100%;
    height: 100vh;
    overflow: hidden;
    word-break: break-all;
     justify-content:center;
`;
const CustomScreen = styled.div`
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    width: 100%;
    padding-top:100px;
    padding-left:180px;
    overflow: hidden;
    align-items: center;
    justify-content:top;
`;
const CustomButton = styled.div`
    overflow: hidden;
    font-size: 24px;
    font-weight: 600;
    padding-bottom: 8px;
    cursor: pointer;
    letter-spacing:4px;
    border-bottom: ${({ active }) => (active ? '2px solid #2C1B1F' : '2px solid #C7C4C6')}; 
    color: ${({ active }) => (active ? '#2C1B1F' : '#C7C4C6')};
     
    ${({ active }) =>
    !active &&
    `
      &:hover {
        color: #2C1B1F; 
        border-bottom: 2px solid #2C1B1F ; 
      }
    `}
`;
const CustomMenu = styled.div`
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    gap: 80px;
`;
const Customss = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 120px;
    overflow: hidden;
`;
const logo = styled.div`
    font-size: 120px;
    font-weight: 900;
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 120px;
    width: 1208px;
    overflow: hidden;
`;
const Screen = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content:center;
    background-color: #2B1B1F;
    border-left:1px solid #000000;
`;


const Print = styled.div`
    font-size: 120px;
    font-weight: 900;
    color: red;

    display: flex;
    align-items: center;
    justify-content:center;
`;

const StyledPrintDiv = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap:2px;
    width: 240px;
    height: 350px;
    box-sizing: border-box;
    flex-direction: column;
    background-color: #CDCDCD;
`;

const StyledImage = styled.img`
    scale:0.2;
    margin-bottom: 10px;
`;

const CardTitle = styled.div`
    display: flex;
    font-size: 12px; /* 글자 크기를 조금 키울 수도 있습니다 */
    color: #000; /* 텍스트 색상 추가 */
    text-align: center; /* 중앙 정렬 */
    margin-top: 10px; /* 하단 여백 */
`;
const CradImg = styled.div`
    display: flex;
    align-items: center;
    justify-content:center;
    width: 300px;
    height: 350px; /* 카드 세로 크기 */
    overflow:hidden;
`;
const FirPRin = styled.div`
   
    width: 116px;
    height: 116px;
    background: linear-gradient(135deg, #B9C9EF, #D0B9EF, #EFB9B9);
    border-radius: 50%; /* 원 모양으로 만들기 */
    position: absolute;
    bottom: 60px;
    left: 50%;
    transform: translate(-50%, -50%);
    cursor: pointer;
    z-index: 1;
    animation: moveUpDown 2s ease-in-out infinite; /* 애니메이션 적용 */

    @keyframes moveUpDown {
        0%, 100% {
            transform: translate(-50%, -50%); /* 기본 위치 */
        }
        50% {
            transform: translate(-50%, -60%); /* 위로 이동 */
        }
    }
  
`;
const Circle = styled.div`
 position: absolute;
    bottom: -10px;
    left: -10px;
    font-size: 24px;
    color: #ffffff;
    font-weight: bold;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 130px ;
    height: 130px;
    border: 3px solid #B9C9EF;
    border-radius: 50%; /* 원 모양으로 만들기 */
   
`;
const PrintButt = styled.div`
 display: flex;
    align-items: center;
    justify-content: center;
    flex-direction:column;
    gap:20px;
    font-size: 24px;
    color: #595959;
    font-weight: bold;
    position: absolute;
    bottom: 130px;
    left: 50%;
    transform: translate(-50%, -50%);
   
`;
const RealPrint = styled.div`
width:120px;
   padding:20px 50px;
    background: #ffffff;
    border:1px solid #595959;
   border-radius: 16px; /* 원 모양으로 만들기 */
    cursor: pointer;
`;
const CancelPrint = styled.div`
width:120px;
    padding:20px 50px;
    background: #ffffff;
    border:1px solid #595959;
   border-radius: 16px; /* 원 모양으로 만들기 */
    cursor: pointer;
`;
const Remove = styled.div`
    width: 700px;
    height: 450px;
    background: #ffffff;
    position: absolute;
    bottom: -200px;
    left: 50%;
    transform: translate(-50%, -50%);
   
`;
const PrintText = styled.div`
     font-size: 28px;
    color: #595959;
    font-weight: bold;
    z-index:10;
`;


function CustomDot() {

    const [activeComponent, setActiveComponent] = useState('Food');

    const renderContent = () => {
        switch (activeComponent) {
            case 'Food':
                return (
                <DotUserCustomFood 
                 setCabRatio={setCabRatio}
                 setProRatio={setProRatio}
                 setFatRatio={setFatRatio}
                />);
            case 'WaterEx':
                return (
                    <DotUserCustomWaterEx
                        ET={ET}
                        setET={setET}
                        WTOne={WTOne}
                        setWTOne={setWTOne}
                        WTTwo={WTTwo}
                        setWTTwo={setWTTwo}
                    />
                );
            case 'Color':
                return (
                <DotUserCustomColor 
                    setDefaultColor1={setDefaultColor1}
                    setDefaultColor2={setDefaultColor2}
                    setwaterColor={setwaterColor}
                />);
            default:
                return <div>Select an option</div>;
        }
    };

    const [ET, setET] = useState(10); // 운동 시간
    const [WTOne, setWTOne] = useState(200); // 물 시간
    const [WTTwo, setWTTwo] = useState(200); // 물 시간
    const [CabRatio, setCabRatio] = useState(0);
    const [ProRatio, setProRatio] = useState(0.5);
    const [FatRatio, setFatRatio] = useState(1);
    const [defaultColor1, setDefaultColor1] = useState([254,213,219, 1]);
    const [defaultColor2, setDefaultColor2] = useState([254,223,192, 1]);
    const [waterColor, setwaterColor] = useState([255,180,191, 1]);

    const [isSecondModalOpen, setIsSecondModalOpen] = useState(false);  // 두 번째 모달 상태
    const [canvasImage, setCanvasImage] = useState(null);  // 캔버스 이미지를 저장할 상태
    const componentRef = useRef();  // 인쇄할 div를 참조할 ref

    // 모달 열기
    const openSecondModal = () => {
        const canvas = document.querySelector('canvas');  // 캔버스 요소 선택
        if (canvas) {
            const dataUrl = canvas.toDataURL();  // 캔버스를 이미지로 변환
            setCanvasImage(dataUrl);  // 이미지 상태 업데이트
            setIsSecondModalOpen(true);  // 모달 열기
        }
    };

    // 모달 닫기
    const closeSecondModal = () => {
        setIsSecondModalOpen(false);  // 모달 닫기
    };

    // 모달 스타일
    const customStyles = {
        content: {    
            position: 'absolute',
            top:'50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            position: 'relative',
            display: 'flex',
            alignItems: 'center',
            justifyContent:'center',  
            flexDirection: 'column',  
            width: '500px', // 너비 설정
            height: '600px', // 최대 높이 설정
            overflow: 'hidden', // 내용이 많을 경우 스크롤 추가
            padding: '20px', // 내부 패딩
            backgroundColor: '#ffffff', // 배경색
            borderRadius: '10px', // 테두리 둥글게
            zIndex:'1000'
        },
        overlay: {
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
            zIndex:'1000' // 반투명한 배경
        }
    };

    const handlePrint = () => {
        const originalContent = document.body.innerHTML;  // 현재 페이지 내용 저장
        const printContent = componentRef.current.outerHTML;  // StyledPrintDiv의 내용만 가져옴
        
        // 모달과 다른 내용들은 감추고 StyledPrintDiv만 남김
        document.body.innerHTML = printContent;
    
        window.print();  // 프린트 명령 전송
      
        setTimeout(() => {
            document.body.innerHTML = originalContent;  // 프린트 후 원래 내용 복원
            window.location.reload();  // 페이지 새로고침으로 UI 복구
        }, 1000);  // 프린트 완료 후 일정 시간 후 복구
    };

    return (
        <Container>
            <Print>
                <FirPRin onClick={openSecondModal}><Circle>PRINT</Circle></FirPRin>

                <Modal style={customStyles} isOpen={isSecondModalOpen} onRequestClose={closeSecondModal}>
                    <PrintText>Let's Print!<br></br>약 25초 소요됩니다.</PrintText>
                    <StyledPrintDiv ref={componentRef}>
                        <CardTitle>Dot Design_Art Fit</CardTitle>
                        <CradImg>{canvasImage && <StyledImage  src={canvasImage} alt="Canvas to be Printed" />}</CradImg>
                    </StyledPrintDiv>
                    <Remove></Remove>
                    <PrintButt>
                        <RealPrint onClick={handlePrint}>프린트</RealPrint>
                        <CancelPrint onClick={closeSecondModal}>취소</CancelPrint>
                    </PrintButt>
                    
                </Modal>
             </Print>

            <CustomScreen>
                <CustomMenu>
                    <CustomButton active={activeComponent === 'Food'} onClick={() => setActiveComponent('Food')} >
                    Food Palette
                    </CustomButton>
                    <CustomButton active={activeComponent === 'WaterEx'} onClick={() => setActiveComponent('WaterEx')}>
                    Exercise & water
                    </CustomButton>
                    <CustomButton active={activeComponent === 'Color'} onClick={() => setActiveComponent('Color')}>
                     Color Combination
                    </CustomButton>
                </CustomMenu>

                <Customss>{renderContent()}</Customss>
            </CustomScreen>
            
            <Screen>
                <DotShowScreen ET={ET} WTOne={WTOne} WTTwo={WTTwo} CabRatio={CabRatio} ProRatio={ProRatio} FatRatio={FatRatio} Default_color_1={defaultColor1}
                Default_color_2={defaultColor2} water_Color={waterColor}/>
            </Screen>
        </Container>
    );
}

export default CustomDot;
