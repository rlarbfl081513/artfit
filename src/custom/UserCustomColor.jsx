import React, { useState } from 'react';
import styled from "styled-components";

const Container = styled.div`
    font-size: 20px;
    font-weight: 900;
    display: flex;
    flex-direction: column; /* 전체 레이아웃을 세로로 */
    align-items: center;
    justify-content: center;
    height: 932px;
    gap: 44px;
    overflow: hidden;
`;

const Section = styled.div`
    display: flex;
    flex-direction: row;
    gap: 30px;
    width: 100%;
    text-align: left;
    align-items: center;
    justify-content: center;
`;

const Title = styled.h2`
    margin-bottom: 10px;
    width:150px;
    text-align: left;
    font-size:24px;
    font-weight:600;
    color:#332428;
`;

const ButtonGroup = styled.div`
    display: flex;
    gap: 20px; /* 버튼 사이 간격 */
`;

const Button = styled.button`
    width: 160px;
    height: 180px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border-radius: 8px;
    font-size: 18px;
    font-weight: bold;
    background-color:#ffffff; /* 클릭 시 더 눈에 띄는 색상 */
    color: ${(props) => (props.isSelected ? '#332428' : '#332428')}; /* 클릭 시 글자색 */
    border: ${(props) => (props.isSelected ? '3px solid #AAA4A5' : '3px solid #ffffff')}; /* 클릭 시 테두리 두께 및 색상 */
    cursor: pointer;
    position: relative;
    transition: border 0.3s ease;

    &:hover {
      border: 3px solid #AAA4A5;
      opacity: 1;
      transition: border 0.3s ease;
    }
      opacity: ${(props) => (props.isSelected ? '1' : '0.4')}; /* 이미지 투명도 */

    /* 원 추가 - 클릭된 상태에서는 원이 유지됨 */
    &::after {
        content: '';
        position: absolute;
        width: 16px;
        height: 16px;
        background-color: #332428;
        border-radius: 50%;
        top: 12px;
        left: 50%;
        transform: translateX(-50%);
        opacity: ${(props) => (props.isSelected ? 1 : 0)};
        transition: opacity 0.3s ease;
    }

    &:hover::after,
    &:active::after {
        opacity: 1;
    }
`;

const ButtonImage = styled.img`
    padding-top:10px;
    width: 100px;
    height: auto;
    
`;

const ButtonText = styled.span`
    font-size: 16px;
    padding-top:2px;
    color:#332428;
`;

const UserCustomColor = ({ BC, setBC, BP, setBP, BF, setBF, LC, setLC, LP, setLP, LF, setLF, DC, setDC, DP, setDP, DF, setDF }) => {
  
  const [selectedB, setSelectedB] = useState(1); // 아침 기본값
  const [selectedL, setSelectedL] = useState(1); // 점심 기본값
  const [selectedD, setSelectedD] = useState(1); // 저녁 기본값

  const BFoodSelect = (food) => {
    setSelectedB(food);
    switch (food) {
      case 1:
        setBC(30);
        setBP(5);
        setBF(5);
        break;
      case 2:
        setBC(5);
        setBP(20);
        setBF(15);
        break;
      case 3:
        setBC(36);
        setBP(3);
        setBF(15);
        break;
      default:
        setBC(130);
        setBP(50);
        setBF(10);
    }
  };

  const LFoodSelect = (food) => {
    setSelectedL(food);
    switch (food) {
      case 1:
        setLC(45);
        setLP(10);
        setLF(1);
        break;
      case 2:
        setLC(30);
        setLP(15);
        setLF(15);
        break;
      case 3:
        setLC(25);
        setLP(3);
        setLF(10);
        break;
      default:
        setLC(130);
        setLP(50);
        setLF(10);
    }
  };

  const DFoodSelect = (food) => {
    setSelectedD(food);
    switch (food) {
      case 1:
        setDC(30);
        setDP(12);
        setDF(10);
        break;
      case 2:
        setDC(1);
        setDP(20);
        setDF(15);
        break;
      case 3:
        setDC(25);
        setDP(2);
        setDF(5);
        break;
      default:
        setDC(130);
        setDP(50);
        setDF(6);
    }
  };

  return (
    <Container>
        <Section>
            <Title>Breakfast</Title>
            <ButtonGroup>
                <Button onClick={() => BFoodSelect(1)} isSelected={selectedB === 1}>
                    <ButtonImage className="ButtonImage" src="./lineFood/b_1.png" alt="Color Theme 1" />
                    <ButtonText>
                    Triangle Gimbap</ButtonText>
                </Button>

                <Button onClick={() => BFoodSelect(2)} isSelected={selectedB === 2}>
                    <ButtonImage className="ButtonImage" src="./lineFood/b_2.png" alt="Color Theme 2" />
                    <ButtonText>Chicken</ButtonText>
                </Button>

                <Button onClick={() => BFoodSelect(3)} isSelected={selectedB === 3}>
                    <ButtonImage className="ButtonImage" src="./lineFood/b_3.png" alt="Color Theme 3" />
                    <ButtonText>Doughnut</ButtonText>
                </Button>
            </ButtonGroup>
        </Section>

        <Section>
            <Title>Lunch</Title>
            <ButtonGroup>
                <Button onClick={() => LFoodSelect(1)} isSelected={selectedL === 1}>
                    <ButtonImage className="ButtonImage" src="./lineFood/l_1.png" alt="Color Theme 1" />
                    <ButtonText>Noodle </ButtonText>
                </Button>

                <Button onClick={() => LFoodSelect(2)} isSelected={selectedL === 2}>
                    <ButtonImage className="ButtonImage" src="./lineFood/l_2.png" alt="Color Theme 2" />
                    <ButtonText>Hamburger </ButtonText>
                </Button>

                <Button onClick={() => LFoodSelect(3)} isSelected={selectedL === 3}>
                    <ButtonImage className="ButtonImage" src="./lineFood/l_3.png" alt="Color Theme 3" />
                    <ButtonText>Ice Cream</ButtonText>
                </Button>
            </ButtonGroup>
        </Section>

        <Section>
            <Title>Dinner</Title>
            <ButtonGroup>
                <Button onClick={() => DFoodSelect(1)} isSelected={selectedD === 1}>
                    <ButtonImage className="ButtonImage" src="./lineFood/d_1.png" alt="Color Theme 1" />
                    <ButtonText>Pizza</ButtonText>
                </Button>

                <Button onClick={() => DFoodSelect(2)} isSelected={selectedD === 2}>
                    <ButtonImage className="ButtonImage" src="./lineFood/d_2.png" alt="Color Theme 2" />
                    <ButtonText>
                    Grilled skewers</ButtonText>
                </Button>

                <Button onClick={() => DFoodSelect(3)} isSelected={selectedD === 3}>
                    <ButtonImage className="ButtonImage" src="./lineFood/d_3.png" alt="Color Theme 3" />
                    <ButtonText>
                    Pudding</ButtonText>
                </Button>
            </ButtonGroup>
        </Section>
    </Container>
  );
};

export default UserCustomColor;