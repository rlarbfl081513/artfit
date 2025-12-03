import React, { useState } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 20px;
    height:932px;
      position:relative;
`;

const Color = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: column;
  gap: 30px;
  height:450px;
    max-height: 450px; /* max-height를 사용하여 스크롤 가능한 영역을 설정 */
  overflow-y: auto; /* 세로 스크롤 활성화 */
  scrollbar-width: none; /* Firefox용 스크롤바 숨기기 */
  -ms-overflow-style: none; /* IE, Edge용 스크롤바 숨기기 */

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
    width: 660px;
    height: 128px;
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
    text-align: left;
      width: 120px;
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
    const WhiteBox1 = styled.div`
    z-index:6;
    position:absolute;
    top:220px;
    width:100%;
    height:80px;
    background:linear-gradient(180deg, rgba(255, 255, 255, 1), rgba(255, 255, 255, 0));
    `;
    const WhiteBox2 = styled.div`
    z-index:6;
    position:absolute;
    bottom:270px;
    width:100%;
    height:70px;
    background:linear-gradient(180deg, rgba(255, 255, 255, 0), rgba(255, 255, 255, 1));
      `;


const UserCustomThemu = ({ setwatercolor, setfatRatiocolor, setproteinRatiocolor, setcarbRatiocolor, setDefaultColor1, setDefaultColor2 }) => {
  
  const [hoveredIndex, setHoveredIndex] = useState(2);
  const [clickedIndex, setClickedIndex] = useState(2);

  const handleColorSelect = (color) => {
    setClickedIndex(color);
    switch (color) {
      case 1:
        setDefaultColor1([212,244,255, 1]);
        setDefaultColor2([107,217,255, 1]);

        setcarbRatiocolor([96,214,255, 1]);
        setproteinRatiocolor([216,255,212, 1]);
        setfatRatiocolor([227,212,255, 1]);
        setwatercolor([46,201,255, 1]);
        break;
      case 2:
        setDefaultColor1([255,239,241,1]);
        setDefaultColor2([255,191,201, 1]);

        setcarbRatiocolor([255,175,188, 1]);
        setproteinRatiocolor([255,239,175, 1]);
        setfatRatiocolor([175,255,215, 1]);
        setwatercolor([255,166,179, 1]);
        break;
      case 3:
        setDefaultColor1([226,229,255, 1]);
        setDefaultColor2([181,188,255, 1]);
       
        setcarbRatiocolor([167,175,255, 1]);
        setproteinRatiocolor([247,255,188, 1]);
        setfatRatiocolor([167,221,255, 1]);
        setwatercolor([146,156,255, 1]);
        break;
      case 4:
          setDefaultColor1([255,237,226, 1]);
          setDefaultColor2([255,196,159, 1]);
  
          setcarbRatiocolor([253,202,170, 1]);
          setproteinRatiocolor([233,255,212, 1]);
          setfatRatiocolor([255,212,212, 1]);
          setwatercolor([255,157,144, 1]);
          
          break;
          case 5:
          setDefaultColor1([219,255,230, 1]);
          setDefaultColor2([119,218,149, 1]);
  
          setcarbRatiocolor([167,255,193, 1]);
          setproteinRatiocolor([255,233,212, 1]);
          setfatRatiocolor([192,250,250, 1]);
          setwatercolor([118,235,154, 1]);
          
          break;
      default:
        setDefaultColor1([248, 252, 254, 1]);
        setDefaultColor2([190, 221, 254, 1]);
    }
  };

  return (
    <Container>
       {/* <WhiteBox1></WhiteBox1>
       <WhiteBox2></WhiteBox2> */}
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
            <img src="./Color/line_blue.png" alt="" />
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
            <img src="./Color/line_red.png" alt="" />
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
          <Info>Purple </Info>
          <div className="ColorImg">
            <img src="./Color/line_pur.png" alt="" />
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
          <Info>Orange </Info>
          <div className="ColorImg">
            <img src="./Color/line_oran.png" alt="" />
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
          <Info>Green </Info>
          <div className="ColorImg">
            <img src="./Color/line_green.png" alt="" />
          </div>
          <div className="Circle" />
        </Button>
      </Color>
      <MoreInfo>( Scroll for more colors )</MoreInfo>
    </Container>
  );
};

export default UserCustomThemu;