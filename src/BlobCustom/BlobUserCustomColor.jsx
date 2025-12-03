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

const Button = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  gap: 50px;
  transition: all 0.3s ease;
  cursor: pointer;

  .ColorImg {
    width: 450px;
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
      width: 140px;
      font-size: 24px;
      font-weight: 600; 
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


const BlobUserCustomFood = ({ setIScolor1,setBDcolor1, setDefaultColor1, setDefaultColor2,setWatercolor1,setWatercolor2 }) => {
  const [hoveredIndex, setHoveredIndex] = useState(2);
  const [clickedIndex, setClickedIndex] = useState(2);

  const handleColorSelect = (color) => {
    setClickedIndex(color);
    switch (color) {
      case 1:
        setDefaultColor1([181,227,243, 1]);
        setDefaultColor2([119,213,245, 1]);
        setWatercolor1([14,161,212, 1]);
        setWatercolor2([10,135,178, 1]);
        setIScolor1([248, 252, 254, 1]);
        setBDcolor1([4,113,151, 1]);
        break;
      case 2:
        setDefaultColor1([161,239,144, 1]);
        setDefaultColor2([161,239,144, 1]);
        setWatercolor1([68,169,98, 1]);
        setWatercolor2([32,141,65, 1]);
        setIScolor1([68,231,117, 1]);
        setBDcolor1([212,255, 203, 1]);
        break;
      case 3:
        setDefaultColor1([255,193,193,1]);
        setDefaultColor2([255,134,134, 1]);
        setWatercolor1([255,164,160, 1]);
        setWatercolor2([208,71,71, 1]);
        setIScolor1([255,119,119, 1]);
        setBDcolor1([255,119,119, 1]);
        break;
      case 4:
        setDefaultColor1([196,134,250,1]);
        setDefaultColor2([146,64,218, 1]);
        setWatercolor1([88,17,150, 1]);
        setWatercolor2([49,4,88, 1]);
        setIScolor1([124,77,165, 1]);
        setBDcolor1([146,64,218, 1]);
        break;
      case 5:
        setDefaultColor1([255,248,216,1]);
        setDefaultColor2([255,228,106, 1]);
        setWatercolor1([255,238,164, 1]);
        setWatercolor2([202,179,76, 1]);
        setIScolor1([255,224,86, 1]);
        setBDcolor1([255,248,216, 1]);
        break;
      default:
        setDefaultColor1([255,248,216, 1]);
        setDefaultColor2([255,248,216, 1]);
        setWatercolor1([55, 200, 200, 1]);
        setWatercolor2([55, 0, 200, 1]);
        setIScolor1([130,187,255, 1]);
        setBDcolor1([51,121,202, 1]);
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
          <Info>Ocean Blue</Info>
          <div className="ColorImg">
            <img src="./Color/bolb_blue.png" alt="" />
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
          <Info>Forest Green</Info>
          <div className="ColorImg">
            <img src="./Color/bolb_green.png" alt="" />
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
          <Info>Bright Red</Info>
          <div className="ColorImg">
            <img src="./Color/bolb_red.png" alt="" />
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
          <Info>Purple</Info>
          <div className="ColorImg">
            <img src="./Color/blob_pur.png" alt="" />
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
          <Info>Yellow</Info>
          <div className="ColorImg">
            <img src="./Color/blob_yel.png" alt="" />
          </div>
          <div className="Circle" />
        </Button>
      </Color>
      <MoreInfo>( Scroll for more colors )</MoreInfo>
    </Container>
  );
};

export default BlobUserCustomFood;