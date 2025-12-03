import React from 'react';
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.15);
  border-radius: 14px;
  padding: 10px;
  gap:10px;
  box-sizing: border-box;
  background-color:#ffffff;
`;

const Button = styled.div`
  position: relative;
  width: 450px;
  height: 74px;
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  font-weight: 600;
  cursor: pointer;
  border: ${(props) => (props.isSelected ? '3px solid #AAA4A5' : '3px solid #ffffff')};
  background-color: ${(props) => (props.isSelected ? '#ffffff' : '#ffffff')};
  color: ${(props) => (props.isSelected ? '#332428' : '#332428')};
  transition: background-color 0.3s ease, color 0.3s ease, border 0.3s ease;
  opacity: ${(props) => props.transparencyValue}; /* 각 버튼에 대한 투명도 적용 */

  &:hover {
    background-color: ${(props) => (props.isSelected ? '#ffffff' : '#ffffff')};
    color: ${(props) => (props.isSelected ? '#AAA4A5' : '#333')};
    border: ${(props) => (props.isSelected ? '3px solid #AAA4A5' : '3px solid #D5D1D2')};
  }

  &::after {
    content: "";
    position: absolute;
    width: 14px;
    height: 14px;
    background-color: ${(props) => (props.isSelected ? '#AAA4A5' : '#D5D1D2')};
    border-radius: 50%;
    bottom: 64px;
    left: 50%;
    opacity: ${(props) => (props.isSelected || props.isHovered ? 1 : 0)};
    transition: background-color 0.3s ease, opacity 0.3s ease;
  }

  &:hover::after {
    background-color: #ff9999;
    opacity: 1;
  }
`;

const SelectionButtons = ({ buttonTexts, buttonValues, selectedIndices, handleButtonClick }) => {
  return (
    <Container>
      {buttonValues.map((value, index) => (
        <Button
          key={index}
          onClick={() => handleButtonClick(value)}
          isSelected={selectedIndices.includes(value)}
         
        >
          {buttonTexts[index]}
        </Button>
      ))}
    </Container>
  );
};

export default SelectionButtons;
