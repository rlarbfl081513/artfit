import React, { useState } from 'react';
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap:20px;
   
  height:932px;
    overflow: hidden;

`;
const Food = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap:30px;
`;
const FoodButton = styled.div`
  cursor: pointer;
`;

const BoxWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  gap: 30px;
  transition: all 0.3s ease;

  & > .Box {
    border: ${(props) =>
      props.isClicked ? '3px solid #AAA4A5' : props.isHovered ? '3px solid #D5D1D2' : '3px solid #ffffff'};
    transition: border 0.3s ease;
  }
  & > .Box img {
    opacity: ${(props) => (props.isHovered || props.isClicked ? '1' : '0.4')}; /* 이미지 투명도 */
    transition: opacity 0.3s ease;
  }
    & .Gram {
      font-size: 24px;
      font-weight: 600;
      color: ${(props) =>
      props.isClicked ? '#2C1B1F' : props.isHovered ? '#2C1B1F' : '#D5D1D2'};
    }

  & > .Circle {
    opacity: ${(props) => (props.isHovered || props.isClicked ? '100%' : '0')};
    width: 24px;
    height: 24px;
    background-color: #332428;
    border-radius: 50px;
  }
`;

const Box = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 160px;
  height: 180px;
  border-radius: 20px;
  color: #ffffff;

  img {
    width: 120px;
    height: auto;
  }
`;

const InfoWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  gap: 30px;
  color: #9F989B;
`;

const Info = styled.div`
  width: 160px;
  font-size: 24px;
  font-weight: 600;
  color:#332428;
  border:3px solid #ffffff;  
`;
const Gram = styled.div`
    `;
const Circle = styled.div`
    width: 24px;
    height: 24px;
    background-color: #332428;
    border-radius: 50px;
    opacity:0;
`;


const DotUserCustomFood = ({ setCabRatio, setProRatio, setFatRatio }) => {
  
  const [hoveredIndex, setHoveredIndex] = useState(1); // 기본적으로 가운데 인덱스
  const [clickedIndex, setClickedIndex] = useState(2);

  const FoodSelect = (food) => {
    setClickedIndex(food);
    switch (food) {
      case 1:
        setCabRatio(0.5);
        setProRatio(0.3);
        setFatRatio(0.2);
        break;
      case 2:
        setCabRatio(0.6);
        setProRatio(0.3);
        setFatRatio(0.1);
        break;
      case 3:
        setCabRatio(0.4);
        setProRatio(0.2);
        setFatRatio(0.6);
        break;
      default:
        setCabRatio(0.6);
        setProRatio(0.3);
        setFatRatio(0.1);
    }
  };

  return (
    <Container>
      <Food>
        <FoodButton onMouseEnter={() => setHoveredIndex(0)} onMouseLeave={() => setHoveredIndex(null)} onClick={() => FoodSelect(1)}>
          <BoxWrapper isClicked={clickedIndex === 1} isHovered={hoveredIndex === 0}>
            <Circle className="Circle" />
            <Box className="Box">
              <img src="./blobFood/cab_1.png" alt="Carbohydrate" />
              <Gram className="Gram">40g</Gram>
              </Box>
            <Box className="Box">
              <img src="./blobFood/pro_1.png" alt="Protein" />
              <Gram className="Gram">20g</Gram>
              </Box>
            <Box className="Box">
              <img src="./blobFood/fat_1.png" alt="Fat" />
            <Gram className="Gram">15g</Gram>
              </Box>
          </BoxWrapper>
        </FoodButton>

        <FoodButton onMouseEnter={() => setHoveredIndex(1)} onMouseLeave={() => setHoveredIndex(null)} onClick={() => FoodSelect(2)}>
          <BoxWrapper isClicked={clickedIndex === 2} isHovered={hoveredIndex === 1}>
            <Circle className="Circle" />
            <Box className="Box">
              <img src="./blobFood/cab_2.png" alt="Carbohydrate" />
              <Gram className="Gram">38g</Gram>
              </Box>
            <Box className="Box">
              <img src="./blobFood/pro_2.png" alt="Protein" />
              <Gram className="Gram">12g</Gram>
              </Box>
            <Box className="Box">
              <img src="./blobFood/fat_2.png" alt="Fat" />
            <Gram className="Gram">6g</Gram>
              </Box>
          </BoxWrapper>
        </FoodButton>

        <FoodButton onMouseEnter={() => setHoveredIndex(2)} onMouseLeave={() => setHoveredIndex(null)} onClick={() => FoodSelect(3)}>
          <BoxWrapper isClicked={clickedIndex === 3} isHovered={hoveredIndex === 2}>
            <Circle className="Circle" />
            <Box className="Box">
              <img src="./blobFood/cab_3.png" alt="Carbohydrate" />
              <Gram className="Gram">45g</Gram>
              </Box>
            <Box className="Box">
              <img src="./blobFood/pro_3.png" alt="Protein" />
              <Gram className="Gram">25g</Gram>
              </Box>
            <Box className="Box">
              <img src="./blobFood/fat_3.png" alt="Fat" />
            <Gram className="Gram">50g</Gram>
              </Box>
          </BoxWrapper>
        </FoodButton>
      </Food>

      <InfoWrapper>
        <Circle className="Circle" />
        <Info> carbo </Info>
        <Info> protein </Info>
        <Info> fat </Info>
      </InfoWrapper>
    </Container>
  );
};

export default DotUserCustomFood;