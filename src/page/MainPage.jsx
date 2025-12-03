import React, { useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  align-items: center;
  color: #2C1C20;
  width: 1920px;
  height: 1200px;
  margin: 80px auto 0 auto;
  gap: 110px;
  overflow: auto; /* 스크롤은 가능 */
  scrollbar-width: none; /* Firefox용 스크롤바 숨기기 */
  -ms-overflow-style: none; /* IE, Edge용 스크롤바 숨기기 */
`;

const Title = styled.div`
  width: 100%;
  font-size: 90px;
  font-weight: 900;
  text-align: center;
  color: #2C1C20;
  margin-top:50px;
`;

const ButtonWrapper = styled.div`
  display: flex;
  gap: 70px;
`;

const CustomButton = styled.button`
  position: relative;
  width: 400px;
  height: 730px;
  background-color: ${(props) => props.bgColor || "#FF6347"};
  color: white;
  padding: 10px;
  border: none;
  border-radius: 30px;
  cursor: pointer;
  transition: all 0.2s ease-in;
  box-shadow: 0 0px 20px rgba(0, 0, 0, 0.3);
  background-image: ${(props) => props.gif && `url(${props.gif})`}; /* GIF 이미지 설정 */
  background-size: cover;
  background-position: center;

  &:hover {
    transform: scale(1.02) translateY(-22px);
  }
`;

const HoverContent = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 400px;
  height: 730px;
  background-color: rgba(0,0,0, 0.5);
  color: white;
  border-radius: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap:30px;
  opacity: ${(props) => (props.isVisible ? 1 : 0)};
  transition: opacity 0.2s ease;
`;
const Start = styled.div`
  padding: 10px 32px;
  color: white;
  border-radius: 1000px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 32px;
  border:1px solid #ffffff;
`;

const HoverText = styled.div`
  font-size: 30px;
  color: white;
`;
const ExImg = styled.div`
  width:80%;
  height:auto;
  margin-top:200px;
  display: flex;
  flex-direction: column;
  text-align: center;
  gap:50px;
  align-items: center;
`;



function MainPage(props) {
  const navigate = useNavigate();

  // 각각의 버튼에 대해 상태를 관리
  const [isHoveringLine, setIsHoveringLine] = useState(false);
  const [isHoveringDot, setIsHoveringDot] = useState(false);
  const [isHoveringBlob, setIsHoveringBlob] = useState(false);

  return (
    <Container>
      {/* <Title>Generative Design <br />for Health Care</Title> */}
      <Title>나만의 디자인을 <br/>만들고, 프린트 해보세요!</Title>

      <ButtonWrapper>
        {/* Line Button */}
        <CustomButton
          gif="line.gif"
          bgColor="#FF6347"
          onMouseEnter={() => setIsHoveringLine(true)}
          onMouseLeave={() => setIsHoveringLine(false)}
          onClick={() => { navigate('/CustomLine'); }}
        >
        
          <HoverContent isVisible={isHoveringLine}>
            <HoverText>Make Your Design<br />With Line</HoverText>
            <Start>START</Start>
          </HoverContent>
        </CustomButton>

        {/* Dot Button */}
        <CustomButton
          gif="dot.gif"
          bgColor="#FF6307"
          onMouseEnter={() => setIsHoveringDot(true)}
          onMouseLeave={() => setIsHoveringDot(false)}
          onClick={() => { navigate('/CustomDot'); }}
        >
         
         <HoverContent isVisible={isHoveringDot}>
            <HoverText>Make Your Design<br />With Dot</HoverText>
            <Start>START</Start>
          </HoverContent>
        </CustomButton>

        {/* Blob Button (GIF 이미지 포함) */}
        <CustomButton
          gif="blob.gif" /* GIF 이미지 경로 */
          onMouseEnter={() => setIsHoveringBlob(true)}
          onMouseLeave={() => setIsHoveringBlob(false)}
          onClick={() => { navigate('/CustomBlob'); }}
        >
         
          <HoverContent isVisible={isHoveringBlob}>
            <HoverText>Make Your Design<br />With Blob</HoverText>
            <Start>START</Start>
          </HoverContent>
        </CustomButton>
      </ButtonWrapper>
      <ExImg>
        <img src="ex_2.png"></img>
        <img src="ex.png"></img>
      </ExImg>
    </Container>
  );
}

export default MainPage;
