import React, { useState, useEffect } from 'react';
import styled from "styled-components";

// Styled components
const Container = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
  gap: 70px;
  height: 932px;
  overflow: hidden;
  width: 750px;
`;

const BoxWrapper = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  width: 750px;
  flex-direction: column;
  gap: 70px;
`;

const Box = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  gap: 40px;
`;

const ButtonGroup = styled.div`
  border-radius: 14px;
  display: flex;
  flex-direction: row;
  align-items: center;
  background-color:#ffffff;
  box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.15); /* 기본 그림자 설정 */
  padding:10px;
  gap: 10px;
`;

const ButtonGroupWater = styled.div`
width:464px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
   background-color:#ffffff;
  box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.15); /* 기본 그림자 설정 */
  border-radius: 14px;
  position: relative;
  padding:10px;
  gap:10px;
`;

const BoxWater = styled.div`
  gap: 40px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;

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

const Title = styled.div`
  font-size: 24px;
  font-weight: 600;
  width: 180px;
  text-align: left;
`;
const Button = styled.div`
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

const UserCustomData = ({ ET, setET, selectedIndices, setSelectedIndices }) => {
  
  const buttonImages = [
    '/waterLine/w500ml.png',
    '/waterLine/w100ml.png',
    '/waterLine/w200ml.png',
    '/waterLine/w300ml.png',
    '/waterLine/w100ml.png',
    '/waterLine/w500ml.png',
  ];
  
  useEffect(() => {
    if (selectedIndices.length === 0) {
      setSelectedIndices([2]);  // 기본 선택
    }
  }, [selectedIndices, setSelectedIndices]);

  const handleButtonClick = (index) => {
    setSelectedIndices((prevIndices) =>
      prevIndices.includes(index)
        ? prevIndices.filter((i) => i !== index)
        : [...prevIndices, index]
    );
  };

  const handleButtonClickET = (num) => {
    setET(num);
  };

  return (
    <Container>
      <BoxWrapper>
        <Box>
          <Title>Exercise Time</Title>
          <ButtonGroup>
            {[10, 20, 30, 40, 50].map((num) => (
              <NumberButton
                key={num}
                onClick={() => handleButtonClickET(num)}
                isSelected={ET === num}
              >
                {num} 분
              </NumberButton>
            ))}
          </ButtonGroup>
        </Box>

        <BoxWater>
          <Title>Water Time</Title>
          <ButtonGroupWater>
            {[2, 5, 8, 11, 14, 17].map((value, index) => (
              <Button
                key={index}
                onClick={() => handleButtonClick(value)}
                isSelected={selectedIndices.includes(value)}
              >
                <div>{['08:00', '10:00', '12:00', '14:00', '16:00', '18:00', '20:00', '22:00'][index]}</div>
                <div>{['500ml', '100ml', '200ml', '300ml', '100ml', '500ml'][index]}</div>
                <img src={buttonImages[index]} alt={`button image ${index}`} style={{ width: '120px', height: 'auto' }} />
              </Button>
            ))}
          </ButtonGroupWater>
        </BoxWater>
      </BoxWrapper>
    </Container>
  );
};

export default UserCustomData;
