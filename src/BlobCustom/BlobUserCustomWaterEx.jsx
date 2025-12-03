import React, { useRef, useState, useEffect } from 'react';
import styled from 'styled-components';

const ContainerWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 20px;
  height: 932px;
  justify-content: center;
`;

const Container = styled.div`
  font-size: 20px;
  font-weight: 900;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 120px;
`;

const Box = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 50px;
  position: relative;
`;

const Title = styled.div`
  font-size: 24px;
  font-weight: 600;
  color: #2b1b1f;
`;
const Back = styled.div`
  width: 600px;
  height: 168px;
  background-color:#ffffff;
   display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  border-radius: 14px;
    box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.15); /* 기본 그림자 설정 */
   border: 3px solid #ffffff;

    &:hover{
    border: 3px solid #AAA4A5;
     & >.Circle{
     background-color:#332428;
     display:block;
     }
  }
`;
const SliderWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 70px;
  position: relative;
  width: 490px;
  height: 20px;
  justify-content: center;
  border-radius: 50px;
`;
const SliderInput = styled.input`
  width: 100%;
  height: 100%;
  background: transparent; /* 기본 배경 투명 */
  outline: none;
  -webkit-appearance: none;
  appearance: none;
  padding: 0;
  margin: 0;
  border-radius: 50px;
  position: relative;

  /* 트랙 스타일링 (크롬, 사파리용) */
  &::-webkit-slider-runnable-track {
    background: ${(props) => {
      const percentage = ((props.value - props.min) / (props.max - props.min)) * 100;
      return `linear-gradient(to right, ${props.startColor} 0%, ${props.endColor} ${percentage}%, #ddd ${percentage}%)`;
    }};
    width: 100%;
    height: 18px;
    border-radius: 50px;
    border: none;
  }

  /* 트랙 스타일링 (파이어폭스용) */
  &::-moz-range-track {
    background: ${(props) => {
      const percentage = ((props.value - props.min) / (props.max - props.min)) * 100;
      return `linear-gradient(to right, ${props.startColor} 0%, ${props.endColor} ${percentage}%, #ddd ${percentage}%)`;
    }};
    width: 100%;
    height: 20px;
    border-radius: 50px;
    border: none;
  }

  /* 손잡이 스타일 */
  &::-webkit-slider-thumb {
    -webkit-appearance: none;
        box-shadow: 0px 0px 12px rgba(0, 0, 0, 0.2); /* 기본 그림자 설정 */
    appearance: none;
    width: 42px;
    height: 42px;
    background-color: ${props => props.thumbColor}; /* 손잡이 색상 */
    border-radius: 50px;
    border: 8px solid #ffffff;
    cursor: pointer;
    transition: background-color 0.3s ease;
    position: relative;
    transform: translate(2px,-9px); /* 손잡이를 트랙 중앙으로 이동 */

    &:hover{
       box-shadow: 0px 0px 12px rgba(0, 0, 0, 0.5);
    }

  }

  &::-moz-range-thumb {
    width: 40px;
    height: 40px;
    background-color: ${props => props.thumbColor}; /* 손잡이 색상 */
    border-radius: 50px;
    border: 8px solid #ffffff;
    cursor: pointer;
    transition: background-color 0.3s ease;
  }
`;

const SliderValue = styled.span`
  font-size: 22px;
  font-weight: bold;
  color: #332428;
  width:auto;
  white-space: nowrap;
  padding:4px 10px;
  border-radius:14px;
  position: absolute;
  text-align: center;
  top: -54px;
  left: ${(props) => `${props.thumbPosition-10}px`}; /* 손잡이로부터 왼쪽으로 20px 이동 */
  transform: translateX(-50%);
  ackground-color:#ffffff;
  box-shadow: 0px 0px 6px rgba(0, 0, 0, 0.2);
`;
const Circle = styled.div`
    width: 24px;
    height: 24px;
    background-color: #ffffff;
    border-radius: 50px;
    position: absolute;
    top: 70px;
    right:-46px;
`

const calculatePositionInPx = (value, min, max, sliderWidth, thumbWidth) => {
  const percentage = (value - min) / (max - min);  // 슬라이더 값의 퍼센트 계산
  const thumbPosition = percentage * (sliderWidth - thumbWidth);  // 손잡이 위치 계산
  return thumbPosition + thumbWidth / 2;  // 손잡이의 중앙을 기준으로 위치 계산
};

const BlobUserCustomWaterEx = ({ ET, setET, W, setWT }) => {
  const sliderRef1 = useRef(null); // 첫 번째 슬라이더 ref
  const sliderRef2 = useRef(null); // 두 번째 슬라이더 ref
  const [thumbPosition1, setThumbPosition1] = useState(0);
  const [thumbPosition2, setThumbPosition2] = useState(0);

  const handleETSliderChange = (e) => {
    setET(parseInt(e.target.value));
    const sliderWidth = sliderRef1.current.offsetWidth; // 슬라이더의 실제 너비 가져오기
    const thumbWidth = 34; // 손잡이의 너비 (36px로 고정)
    const thumbPos = calculatePositionInPx(e.target.value, e.target.min, e.target.max, sliderWidth, thumbWidth);
    setThumbPosition1(thumbPos); // 손잡이 위치 계산 후 상태 저장
  };

  const handleWTSliderChange = (e) => {
    setWT(parseInt(e.target.value));
    const sliderWidth = sliderRef2.current.offsetWidth; // 두 번째 슬라이더의 실제 너비 가져오기
    const thumbWidth = 34; // 손잡이의 너비 (36px로 고정)
    const thumbPos = calculatePositionInPx(e.target.value, e.target.min, e.target.max, sliderWidth, thumbWidth);
    setThumbPosition2(thumbPos); // 손잡이 위치 계산 후 상태 저장
  };

  useEffect(() => {
    // 슬라이더 초기 위치 계산
    if (sliderRef1.current && sliderRef2.current) {
      handleETSliderChange({ target: sliderRef1.current });
      handleWTSliderChange({ target: sliderRef2.current });
    }
  }, []);

  return (
    <ContainerWrapper>
      <Container>
        <Box>
          <Title>Exercise</Title>
          <Back>
          <SliderWrapper>
            <SliderInput
              ref={sliderRef1}
              type="range"
              min="10"
              max="60"
              step="1"
              value={ET}
              onChange={handleETSliderChange}
              thumbPosition={thumbPosition1}
              thumbColor="#ffffff"
              startColor="#FFD1D1"  /* 첫 번째 슬라이더 시작 색상 (초록색) */
              endColor="#FF6464"  /* 첫 번째 슬라이더 종료 색상 (파란색) */
            />
            <SliderValue thumbPosition={thumbPosition1}>
              {ET} 분
            </SliderValue>
            
          </SliderWrapper>
          <Circle className='Circle'></Circle>
          </Back>
        </Box>

        <Box>
          <Title>Water Intake</Title>
          <Back>
          <SliderWrapper>
            <SliderInput
              ref={sliderRef2}
              type="range"
              min="100"
              max="1200"
              step="1"
              value={W}
              onChange={handleWTSliderChange}
              thumbPosition={thumbPosition2}
              thumbColor="#ffffff"
              startColor="#E0F1FF"  /* 첫 번째 슬라이더 시작 색상 (초록색) */
              endColor="#64B9FF"  /* 첫 번째 슬라이더 종료 색상 (파란색) */
            />
            <SliderValue thumbPosition={thumbPosition2}>
              {W} ml
            </SliderValue>
          </SliderWrapper>
          <Circle className='Circle'></Circle>
          </Back>
        </Box>
      </Container>
    </ContainerWrapper>
  );
};

export default BlobUserCustomWaterEx;