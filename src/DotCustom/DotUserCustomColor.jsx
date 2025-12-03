import React, { useState } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 20px;
  height: 932px;
  overflow: hidden;
`;

const Color = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: column;
  gap: 30px;
    max-height: 550px; /* max-height를 사용하여 스크롤 가능한 영역을 설정 */
  overflow-y: auto; /* 세로 스크롤 활성화 */
  scrollbar-width: none; /* Firefox용 스크롤바 숨기기 */
  -ms-overflow-style: none; /* IE, Edge용 스크롤바 숨기기 */
`;
const MoreInfo = styled.div`
text-align: center;
  width: 100%;
  font-size: 20px;
  font-weight: 600; 
  color:#595959;
  z-index:10;
  margin-top:6px;
`;
const Button = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  gap: 30px;
  transition: all 0.3s ease;
  cursor: pointer;

  .ColorImg {
    width: 534px;
    height: 168px;
    border: ${(props) =>
      props.isClicked ? '3px solid #AAA4A5' : props.isHovered ? '3px solid #D5D1D2' : '3px solid #ffffff'};
    transition: border 0.3s ease;
    border-radius:14px;
    display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  }

  .Circle {
    opacity: ${(props) => (props.isHovered || props.isClicked ? '100%' : '0')};
    width: 24px;
    height: 24px;
    background-color: #332428;
    border-radius: 50px;
  }
`;
    const Info = styled.div`
      width: 128px;
      font-size: 24px;
      font-weight: 600; 
    `;

const DotUserCustomFood = ({ setwaterColor, setDefaultColor1, setDefaultColor2 }) => {
  
  const [hoveredIndex, setHoveredIndex] = useState(2);
  const [clickedIndex, setClickedIndex] = useState(2);

  const handleColorSelect = (color) => {
    setClickedIndex(color);
    switch (color) {
      case 1:
        setDefaultColor1([181,227,243, 1]);
        setDefaultColor2([208,212,249, 1]);
        setDefaultColor2([215,249,208, 1]);
        setwaterColor([107,217,255, 0.5]);
        break;
      case 2:
        setDefaultColor1([254,213,219, 1]);
        setDefaultColor2([254,223,192, 1]);
        setDefaultColor2([248,225,156, 1]);
        setwaterColor([255,180,191, 0.5]);
        break;
      case 3:
        setDefaultColor1([163,242,224, 1]);
        setDefaultColor2([175,242,162, 1]);
        setDefaultColor2([249,254,177, 1]);
        setwaterColor([160,255,141,0.5]);
        break;
        case 4:
        setDefaultColor1([206,182,255, 1]);
        setDefaultColor2([186,232,255, 1]);
        setDefaultColor2([255,224,224, 1]);
        setwaterColor([228,215,255,0.5]);
        break;
        case 5:
          setDefaultColor1([255,239,114, 1]);
          setDefaultColor2([255,224,205, 1]);
          setDefaultColor2([233,255,207, 1]);
          setwaterColor([255,223,153,0.5]);
          break;
      default:
        setDefaultColor1([254,213,219, 1]);
        setDefaultColor2([254,223,192, 1]);
        setDefaultColor2([248,225,156, 1]);
        setwaterColor([255,180,191, 1]);
    }
  };

  return (
    <Container>
      <Color>
        <Button
          isHovered={hoveredIndex === 1}
          isClicked={clickedIndex === 1}
          onMouseEnter={() => setHoveredIndex(1)}
          onMouseLeave={() => setHoveredIndex(null)}
          onClick={() => handleColorSelect(1)}
        >
          <Info>Blue </Info>
          <div className="ColorImg">
            <img src="./Color/dot_blue.png" alt="" />
          </div>
          <div className="Circle" />
        </Button>

        <Button
          isHovered={hoveredIndex === 2}
          isClicked={clickedIndex === 2}
          onMouseEnter={() => setHoveredIndex(2)}
          onMouseLeave={() => setHoveredIndex(null)}
          onClick={() => handleColorSelect(2)}
        >
          <Info>Pink </Info>
          <div className="ColorImg">
            <img src="./Color/dot_red.png" alt="" />
          </div>
          <div className="Circle" />
        </Button>

        <Button
          isHovered={hoveredIndex === 3}
          isClicked={clickedIndex === 3}
          onMouseEnter={() => setHoveredIndex(3)}
          onMouseLeave={() => setHoveredIndex(null)}
          onClick={() => handleColorSelect(3)}
        >
          <Info>Green </Info>
          <div className="ColorImg">
            <img src="./Color/dot_green.png" alt="" />
          </div>
          <div className="Circle" />
        </Button>
        <Button
          isHovered={hoveredIndex === 4}
          isClicked={clickedIndex === 4}
          onMouseEnter={() => setHoveredIndex(4)}
          onMouseLeave={() => setHoveredIndex(null)}
          onClick={() => handleColorSelect(4)}
        >
          <Info>Purple </Info>
          <div className="ColorImg">
            <img src="./Color/dot_purple.png" alt="" />
          </div>
          <div className="Circle" />
        </Button>
        <Button
          isHovered={hoveredIndex === 5}
          isClicked={clickedIndex === 5}
          onMouseEnter={() => setHoveredIndex(5)}
          onMouseLeave={() => setHoveredIndex(null)}
          onClick={() => handleColorSelect(5)}
        >
          <Info>Yellow </Info>
          <div className="ColorImg">
            <img src="./Color/dot_yellow.png" alt="" />
          </div>
          <div className="Circle" />
        </Button>
      </Color>
      <MoreInfo>( Scroll for more colors )</MoreInfo>
    </Container>
  );
};

export default DotUserCustomFood;