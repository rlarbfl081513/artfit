import React, { useState, useEffect  } from 'react';
import styled from "styled-components";

const Container = styled.div`
  font-size: 20px;
  font-weight: 900;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  height: 932px;
  width: 750px;
  gap: 70px;
  overflow: visible;
        box-sizing: border-box;

`;

const Box = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: row;
  gap: 40px;
`;

const Title = styled.div`
  font-size: 24px;
  font-weight: 600;
  width: 180px;
  text-align: left;
  padding-top:30px;
`;

const ButtonGroup = styled.div`
  overflow: visible;
  border-radius: 14px;
  display: flex;
  gap: 10px;
  flex-direction: row;
  align-items: center;
  background-color: #ffffff;
  box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.15);
  padding: 10px;
`;

const NumberButton = styled.div`
  width: 80px;
  height: 90px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
  border-radius: 8px;
  cursor: pointer;
  font-size: 18px;
  font-weight: 600;
  border: ${(props) => (props.isSelected ? '3px solid #AAA4A5' : '3px solid #ffffff')};
  background-color: ${(props) => (props.isSelected ? '#ffffff' : '#ffffff')};
  color: ${(props) => (props.isSelected ? '#332428' : '#332428')};
  transition: background-color 0.3s ease, color 0.3s ease, border 0.3s ease;
  position: relative;
  opacity: ${(props) => (props.isSelected ? '1' : '0.4')}; /* 이미지 투명도 */

  &:hover {
    background-color: ${(props) => (props.isSelected ? '#ffffff' : '#ffffff')};
    color: ${(props) => (props.isSelected ? '#AAA4A5' : '#333')};
    border: ${(props) => (props.isSelected ? '3px solid #AAA4A5' : '3px solid #332428')};
  }

  &::before {
    content: '';
    position: absolute;
    top: 8px;
    left: 50%;
    transform: translateX(-50%);
    width: 16px;
    height: 16px;
    background-color: #332428;
    border-radius: 50%;
    transition: background-color 0.3s ease;
    opacity: ${(props) => (props.isSelected ? 1 : 0)};
  }

  &:hover::before {
    background-color: #332428;
    opacity:0.4;
  }
`;
const NumberButtonW = styled.div`
  width: 460px;
  height: 74px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
  border-radius: 8px;
  cursor: pointer;
  font-size: 20px;
  font-weight: 600;
  border: ${(props) => (props.isSelected ? '3px solid #AAA4A5' : '3px solid #ffffff')};
  background-color: ${(props) => (props.isSelected ? '#ffffff' : '#ffffff')};
  color: ${(props) => (props.isSelected ? '#332428' : '#332428')};
  transition: background-color 0.3s ease, color 0.3s ease, border 0.3s ease;
  position: relative;
  opacity: ${(props) => (props.isSelected ? '1' : '0.4')}; /* 이미지 투명도 */

  &:hover {
    background-color: ${(props) => (props.isSelected ? '#ffffff' : '#ffffff')};
    color: ${(props) => (props.isSelected ? '#AAA4A5' : '#333')};
    border: ${(props) => (props.isSelected ? '3px solid #AAA4A5' : '3px solid #D5D1D2')};
  }

  &::before {
    content: '';
    position: absolute;
    top: 26px;
    right: -50PX;
    transform: translateX(-50%);
    width: 16px;
    height: 16px;
    background-color: #332428;
    border-radius: 50%;
    transition: background-color 0.3s ease;
    opacity: ${(props) => (props.isSelected ? 1 : 0)};
  }

  &:hover::before {
    background-color: #332428;
    opacity:0.4;
  }
`;
const TimeAmountWrapper = styled.div`
  display: flex;
  flex-direction: row; /* 가로로 정렬 */
  gap: 26px; /* time과 amount 사이 간격 */
  align-items: center;
  justify-content: center;
`;
const TimeImage = styled.img`
    width: 110px;
    height: auto;
`;
const ButWrapper = styled.div`
   display: flex;
   flex-direction: column;
   align-items: flex-start;
    box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.15);
    border-radius: 14px;
    padding: 10px;
    gap:10px;
      box-sizing: border-box;
    
    position:relative;
`;
const ButtonGroupff = styled.div`
  display: flex;
  gap: 10px;
  flex-direction: column;
   align-items: center;
`;


const DotUserCustomWaterEx = ({ ET, setET, WTOne, setWTOne, WTTwo, setWTTwo }) => {
  const buttonData1 = [
    { imageSrc:"/water/w200.png", time:'08:00', amount: 100, x: 100, y: 100 },
    { imageSrc:'/water/w400.png',time:'11:20', amount: 200, x: 200, y: 250 },
    { imageSrc:'/water/w600.png',time:'14:40', amount: 300, x: 300, y: 350 }
  ];

  const buttonData2 = [
    { imageSrc:"/water/w200.png", time:'17:00', amount: 100, x: 100, y: 550 },
    { imageSrc:'/water/w400.png',time:'20:20', amount: 200, x: 200, y: 650 },
    { imageSrc:'/water/w600.png',time:'23:40', amount: 300, x: 300, y: 900 }
  ];

  // 초기값을 useState로 설정
  const [selectedWTOne, setSelectedWTOne] = useState(buttonData1[0]);
  const [selectedWTTwo, setSelectedWTTwo] = useState(buttonData2[0]);

  // 컴포넌트가 처음 렌더링될 때 기본값을 부모 컴포넌트의 상태로 설정
  useEffect(() => {
    setWTOne(buttonData1[0]);  // 첫 번째 물 데이터 초기값 설정
    setWTTwo(buttonData2[0]);  // 두 번째 물 데이터 초기값 설정
  }, [setWTOne, setWTTwo]);

  const handleButtonClickET = (num) => {
    setET(num); // 운동 시간을 설정하는 함수
  };

  const WThandleButtonClickOne = (data) => {
    setSelectedWTOne(data); // 첫 번째 물 마시는 양 선택
    setWTOne(data);  // 부모 상태 업데이트
  };

  const WThandleButtonClickTwo = (data) => {
    setSelectedWTTwo(data); // 두 번째 물 마시는 양 선택
    setWTTwo(data);  // 부모 상태 업데이트
  };
  const displayNumbers = [10,20,30,40,50];  // 화면에 보이는 숫자들
  const actualValues = [0.9, 1.6, 3, 5,10];  // 클릭 이벤트에 사용될 실제 값들



  return (
    <Container>
      <Box>
        <Title>Exercise<br /> Minute</Title>
        <ButtonGroup>
            {actualValues.map((num, index) => (
                <NumberButton
                key={num}
                onClick={() => handleButtonClickET(num)}  // 실제로 사용할 값 (1, 2, 3, 4, 5)
                isSelected={ET === num}  // 선택된 값은 실제 값과 비교
                >
                {displayNumbers[index]} 분  {/* 화면에 보이는 값은 다른 숫자 */}
                </NumberButton>
            ))}
        </ButtonGroup>
      </Box>

      <Box>
        <Title>Water <br />Time & Amount</Title>
        <ButWrapper>
            <ButtonGroupff>
              {buttonData1.map((data) => (
                <NumberButtonW
                  key={data.amount}
                  onClick={() => WThandleButtonClickOne(data)}
                  isSelected={selectedWTOne && selectedWTOne.amount === data.amount}
                >
                  <TimeAmountWrapper>
                    <div>{data.time}</div>
                    <div>{data.amount} ml</div>
                    <TimeImage src={data.imageSrc} alt="time image" />
                   </TimeAmountWrapper>
                </NumberButtonW>
              ))}
            </ButtonGroupff>
            <ButtonGroupff>
              {buttonData2.map((data) => (
                <NumberButtonW
                  key={data.amount}
                  onClick={() => WThandleButtonClickTwo(data)}
                  isSelected={selectedWTTwo && selectedWTTwo.amount === data.amount}
                >
                  <TimeAmountWrapper>
                    <div>{data.time}</div>
                    <div>{data.amount} ml</div>
                    <TimeImage src={data.imageSrc} alt="time image" />
                   </TimeAmountWrapper>
                </NumberButtonW>
              ))}
            </ButtonGroupff>
        </ButWrapper>
      </Box>
    </Container>
  );
};

export default DotUserCustomWaterEx;
