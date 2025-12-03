import React, { useEffect, useRef } from 'react';  // useEffect와 useRef 추가
import Sketch from 'react-p5';

const BlobShowScreen = ({ ET, W, CabRatio, ProRatio, FatRatio, Default_color_1, Default_color_2,  Water_color_2,  Water_color_1, IS_color_1, BD_color_1 }) => {

  
        let cx = 290;
        let cy = 350;
        let r = 0;
        let segment = 8;
      
        // 기본 배경 색
        let BG_color_1 = Water_color_1;
        let BG_color_2 = [30, 20, 100, 1];
      
        // 식단 입력값
        let IC = CabRatio * 1.3;
        let IP = ProRatio * 2;
        let IF = FatRatio * 6;
        let IngestedCarbohydrates = IC;
        let IngestedProtein = IP;
        let IngestedFat = IF;
      
        // 권장 섭취량
        let RC = 6 * 30;
        let RP = 4 * 30;
        let RF = 2 * 30;
        let RecommendCarbohydrates = RC;
        let RecommendProtein = RP;
        let RecommendFat = RF;
      
        // 색상
        let color_1 = Default_color_1;
        let color_2 = Default_color_1;
        let Big_color_1 = Default_color_2;
        let Big_color_2 = Default_color_2;
        let IS_color_2 = IS_color_1;
        let BD_color_2 = BD_color_1;
        let SD_color_1 = [255, 255, 255, 0.4];
        let SD_color_2 = [255, 255, 255, 0.3];
      
        // 운동
        let ExerciseTime = ET;
        let moveSpeed = ET * 1.25;
        let moveScale = ET * 1.25;
        let movement = [];
        let targetMovement = [];
      
        // 물
        let water = W;
        let WaterMovement = [];
        let W_color_1 = Water_color_1;
        let W_color_2 = Water_color_1;
        let WS_color_1 = Water_color_2;
        let WS_color_2 =  Water_color_2;
      
        let data0 = [0, 80, 0, -20, -0, -30, 0, -60];
        let data1 = [0, 80, 0, -20, -0, -30, 0, -60];
        let data2 = [0, 80, 0, -20, -0, -30, 0, -60];
        let data3 = [20, 20, 20, 20, 20, 20, 20, 20];
      
        let p5Instance;  // p5.js 인스턴스 저장

        const setup = (p5, canvasParentRef) => {
          p5Instance = p5;  // p5 인스턴스 저장
          let canvas = p5.createCanvas(430, 932).parent(canvasParentRef);
          let ctx = canvas.elt.getContext('2d');
          canvas.style('border-radius', '30px');
      
          for (let i = 0; i < segment; i++) {
            movement[i] = p5.random(-moveScale, moveScale);
            targetMovement[i] = p5.random(-moveScale, moveScale);
          }
        };
        
        const canvasRef = useRef(null);

useEffect(() => {
    const canvas = canvasRef.current.querySelector('canvas');
    if (canvas) {
        // 캔버스가 렌더링되었을 때 처리할 로직
        console.log('캔버스 렌더링 완료:', canvas);
    }
}, []);

      
        const draw = (p5) => {
          DefaultBackground(p5);
          WaterSecon(p5);
          WaterThird(p5);
      
          p5.randomSeed(30);
      
          for (let i = 0; i < segment; i++) {
            movement[i] =
              p5.random(-moveScale, moveScale) *
              p5.sin(p5.millis() * moveSpeed * p5.random(0.5, 1) / 10000);
          }
      
          Carbohydrates(p5);
          Protien(p5);
          Fat(p5);
        };

const DefaultBackground = (p5) => {
    let ctx = p5.drawingContext; // p5에서 drawingContext 가져오기
    let gradient = ctx.createLinearGradient(0, 0, p5.width, p5.height);
    gradient.addColorStop(0, colorToString(BG_color_1));
    gradient.addColorStop(1, colorToString(BG_color_1));
    ctx.fillStyle = gradient;
    p5.rect(0, 0, p5.width, p5.height); // p5.rect 호출
    };
    
    const WaterSecon = (p5) => {
    let tx = -110; // Translation x offset
    let ty = -10; // Translation y offset
    
    p5.noStroke(); // p5 객체를 통해 noStroke 호출
    
    let WaterMoveSpeed = 20;
    let WaterMoveScale = 40;
    
    for (let i = 0; i < segment; i++) {
        WaterMovement[i] = p5.random(-WaterMoveScale, WaterMoveScale) * p5.sin(p5.millis() * WaterMoveSpeed * p5.random(0.5, 1) / 10000);
    }
    
    let sx1, sy1, sx8, sy8;
    
    for (let i = -1; i < segment + 2; i++) {
        let angle = p5.radians(360 / segment * i);
        let delta = data0[i === -1 ? 7 : i % segment];
        let sx = 430 / 2 + (W/2 + delta + WaterMovement[i === -1 ? 7 : i % segment]) * p5.cos(angle);
        let sy = 300 + (W/2  + delta + WaterMovement[i === -1 ? 7 : i % segment]) * p5.sin(angle);
    
        if (i === -1) {
        sx1 = sx;
        sy1 = sy;
        }
        if (i === 3) {
        sx8 = sx;
        sy8 = sy;
        }
    }
    
    // 물 blob의 그림자
    let ctx = p5.drawingContext;
    let gradient = ctx.createLinearGradient(sx1, sy1, sx8, sy8);
    gradient.addColorStop(0, colorToString(WS_color_1));
    gradient.addColorStop(1, colorToString(WS_color_2));
    ctx.fillStyle = gradient;
    p5.drawingContext.filter = "blur(30px)";
    
    p5.beginShape();
    for (let i = -1; i < segment + 2; i++) {
        let angle = p5.radians(360 / segment * i);
        let delta = data0[i === -1 ? 7 : i % segment];
    
        let sx = 100 + tx + (W/2  + 100 + delta + WaterMovement[i === -1 ? 7 : i % segment]) * p5.cos(angle);
        let sy = 700 + ty + (W/2  + 100 + delta + WaterMovement[i === -1 ? 7 : i % segment]) * p5.sin(angle);
    
        p5.curveVertex(sx, sy);
    }
    p5.endShape();
    
    // 물 blob
    gradient = ctx.createLinearGradient(sx1, sy1, sx8, sy8);
    gradient.addColorStop(0, colorToString(W_color_1));
    gradient.addColorStop(1, colorToString(W_color_2));
    ctx.fillStyle = gradient;
    p5.drawingContext.filter = "none";
    
    p5.beginShape();
    for (let i = -1; i < segment + 2; i++) {
        let angle = p5.radians(360 / segment * i);
        let delta = data0[i === -1 ? 7 : i % segment];
    
        let sx = 100 + tx + (W/2  + 100 + delta + WaterMovement[i === -1 ? 7 : i % segment]) * p5.cos(angle);
        let sy = 700 + ty + (W/2  + 100 + delta + WaterMovement[i === -1 ? 7 : i % segment]) * p5.sin(angle);
    
        p5.curveVertex(sx, sy);
    }
    p5.endShape();
    };    

  const WaterThird = (p5) => {
    p5.noStroke(); // p5 객체를 통해 noStroke 함수 호출
    let WaterMoveSpeed = 20;
    let WaterMoveScale = 40;
  
    for (let i = 0; i < segment; i++) {
      WaterMovement[i] = p5.random(-WaterMoveScale, WaterMoveScale) * p5.sin(p5.millis() * WaterMoveSpeed * p5.random(0.5, 1) / 10000);
    }
  
    let sx1, sy1, sx8, sy8;
  
    for (let i = -1; i < segment + 2; i++) {
      let angle = p5.radians(360 / segment * i);
      let delta = data0[(i === -1) ? 7 : i % segment];
      let sx = 430 / 2 + (W/2  + delta + WaterMovement[(i === -1) ? 7 : i % segment]) * p5.cos(angle);
      let sy = 300 + (W/2  + delta + WaterMovement[(i === -1) ? 7 : i % segment]) * p5.sin(angle);
  
      if (i === -1) {
        sx1 = sx;
        sy1 = sy;
      }
      if (i === 3) {
        sx8 = sx;
        sy8 = sy;
      }
    }
  
    // 물 blob의 그림자
    let ctx = p5.drawingContext;
    let gradient = ctx.createLinearGradient(sx1, sy1, sx8, sy8);
    gradient.addColorStop(0, colorToString(WS_color_1));
    gradient.addColorStop(1, colorToString(WS_color_2));
    ctx.fillStyle = gradient;
    p5.drawingContext.filter = "blur(12px)";
  
    p5.beginShape();
    for (let i = -1; i < segment + 2; i++) {
      let angle = p5.radians(360 / segment * i);
      let delta = data0[(i === -1) ? 7 : i % segment];
  
      let sx = 60 + (W/2  + delta + WaterMovement[(i === -1) ? 7 : i % segment]) * p5.cos(angle);
      let sy = 780 + (W/2  + delta + WaterMovement[(i === -1) ? 7 : i % segment]) * p5.sin(angle);
  
      p5.curveVertex(sx, sy);
    }
    p5.endShape();
  
    // 물 blob
    gradient = ctx.createLinearGradient(sx1, sy1, sx8, sy8);
    gradient.addColorStop(0, colorToString(W_color_1));
    gradient.addColorStop(1, colorToString(W_color_2));
    ctx.fillStyle = gradient;
    p5.drawingContext.filter = "none";
  
    p5.beginShape();
    for (let i = -1; i < segment + 2; i++) {
      let angle = p5.radians(360 / segment * i);
      let delta = data0[(i === -1) ? 7 : i % segment];
  
      let sx = 60 + (W/2 + delta + WaterMovement[(i === -1) ? 7 : i % segment]) * p5.cos(angle);
      let sy = 780 + (W/2 + delta + WaterMovement[(i === -1) ? 7 : i % segment]) * p5.sin(angle);
  
      p5.curveVertex(sx, sy);
    }
    p5.endShape();
  };

  const Carbohydrates = (p5) => {
    p5.noStroke(); // p5 객체를 통해 noStroke 함수 호출
  
    // big drop shadow blob
    let ctx = p5.drawingContext;
    let gradient = ctx.createLinearGradient(200, 200, 400, 300);
    gradient = ctx.createLinearGradient(100, 50, 500, 900);
    gradient.addColorStop(0, colorToString(BD_color_1));
    gradient.addColorStop(1, colorToString(BD_color_2));
    ctx.fillStyle = gradient;
    p5.drawingContext.filter = "blur(16px)";
  
    p5.beginShape();
    for (let i = -1; i < segment + 2; i++) {
      let angle = p5.radians(360 / segment * i);
      let delta = data1[i === -1 ? 7 : i % segment];
  
      let sx = cx - 10 + (r + RC + delta + movement[i === -1 ? 7 : i % segment]) * p5.cos(angle);
      let sy = cy - 120 + (r + RC + delta + movement[i === -1 ? 7 : i % segment]) * p5.sin(angle);
  
      p5.curveVertex(sx, sy);
    }
    p5.endShape();
  
    // 권장량 blob의 innershadow
    gradient = ctx.createLinearGradient(100, 50, 500, 900);
    gradient.addColorStop(0, colorToString(IS_color_1));
    gradient.addColorStop(1, colorToString(IS_color_2));
    ctx.fillStyle = gradient;
    p5.drawingContext.filter = "none";
  
    p5.beginShape();
    for (let i = -1; i < segment + 2; i++) {
      let angle = p5.radians(360 / segment * i);
      let delta = data1[i === -1 ? 7 : i % segment];
  
      let sx = cx - 10 + (r + RC + delta + movement[i === -1 ? 7 : i % segment]) * p5.cos(angle);
      let sy = cy - 120 + (r + RC + delta + movement[i === -1 ? 7 : i % segment]) * p5.sin(angle);
  
      p5.curveVertex(sx, sy);
    }
    p5.endShape();
  
    // 권장량 blob
    gradient = ctx.createLinearGradient(100, 50, 500, 900);
    gradient.addColorStop(0, colorToString(Big_color_1));
    gradient.addColorStop(1, colorToString(Big_color_2));
    ctx.fillStyle = gradient;
    p5.drawingContext.filter = "blur(10px)";
  
    p5.beginShape();
    for (let i = -1; i < segment + 2; i++) {
      let angle = p5.radians(360 / segment * i);
      let delta = data1[i === -1 ? 7 : i % segment];
  
      let sx = cx - 10 + (r + RC - 10 + delta + movement[i === -1 ? 7 : i % segment]) * p5.cos(angle);
      let sy = cy - 120 + (r + RC - 10 + delta + movement[i === -1 ? 7 : i % segment]) * p5.sin(angle);
  
      p5.curveVertex(sx, sy);
    }
    p5.endShape();
  
    // small drop shadow 표현
    gradient = ctx.createLinearGradient(100, 50, 500, 900);
    gradient.addColorStop(0, colorToString(SD_color_1));
    gradient.addColorStop(1, colorToString(SD_color_2));
    ctx.fillStyle = gradient;
    p5.drawingContext.filter = "blur(10px)";
  
    p5.beginShape();
    for (let i = -1; i < segment + 2; i++) {
      let angle = p5.radians(360 / segment * i);
      let delta = data1[i === -1 ? 7 : i % segment];
  
      let sx = cx - 10 + (r + IC + 30 + delta + movement[i === -1 ? 7 : i % segment]) * p5.cos(angle);
      let sy = cy - 100 + (r + IC + 30 + delta + movement[i === -1 ? 7 : i % segment]) * p5.sin(angle);
  
      p5.curveVertex(sx, sy);
    }
    p5.endShape();
  
    // 섭취량 BLOB의 innershadow 표현
    gradient = ctx.createLinearGradient(100, 50, 500, 900);
    gradient.addColorStop(0, colorToString(IS_color_1));
    gradient.addColorStop(1, colorToString(IS_color_2));
    ctx.fillStyle = gradient;
    p5.drawingContext.filter = "none";
  
    p5.beginShape();
    for (let i = -1; i < segment + 2; i++) {
      let angle = p5.radians(360 / segment * i);
      let delta = data1[i === -1 ? 7 : i % segment];
  
      let sx = cx - 10 + (r + IC + 10 + delta + movement[i === -1 ? 7 : i % segment]) * p5.cos(angle);
      let sy = cy - 100 + (r + IC + 10 + delta + movement[i === -1 ? 7 : i % segment]) * p5.sin(angle);
  
      p5.curveVertex(sx, sy);
    }
    p5.endShape();
  
    // 섭취량 blob
    gradient = ctx.createLinearGradient(100, 50, 500, 900);
    gradient.addColorStop(0, colorToString(color_1));
    gradient.addColorStop(1, colorToString(color_2));
    ctx.fillStyle = gradient;
    p5.drawingContext.filter = "blur(10px)";
  
    p5.beginShape();
    for (let i = -1; i < segment + 2; i++) {
      let angle = p5.radians(360 / segment * i);
      let delta = data1[i === -1 ? 7 : i % segment];
  
      let sx = cx - 10 + (r + IC - 10 + delta + movement[i === -1 ? 7 : i % segment]) * p5.cos(angle);
      let sy = cy - 100 + (r + IC - 10 + delta + movement[i === -1 ? 7 : i % segment]) * p5.sin(angle);
  
      p5.curveVertex(sx, sy);
    }
    p5.endShape();
  };

  const Protien = (p5) => {
    let scaleFactor = 0.7; // 전체 스케일을 줄이는 비율
    let tx = -120; // Translation x offset
    let ty = 600; // Translation y offset
  
    p5.noStroke(); // noStroke 함수를 p5 객체에서 호출
    p5.scale(scaleFactor); // scale 함수를 p5 객체에서 호출
  
    // big drop shadow blob
    let ctx = p5.drawingContext;
    let gradient = ctx.createLinearGradient(200, 200, 400, 300);
    gradient = ctx.createLinearGradient(100, 50, 500, 900);
    gradient.addColorStop(0, colorToString(BD_color_1));
    gradient.addColorStop(1, colorToString(BD_color_2));
    ctx.fillStyle = gradient;
    p5.drawingContext.filter = "blur(16px)";
  
    p5.beginShape();
    for (let i = -1; i < segment + 2; i++) {
      let angle = p5.radians(360 / segment * i);
      let delta = data1[i === -1 ? 7 : i % segment];
  
      let sx = cx + tx - 10 + (r + RC + delta + movement[i === -1 ? 7 : i % segment]) * p5.cos(angle);
      let sy = cy + ty - 120 + (r + RC + delta + movement[i === -1 ? 7 : i % segment]) * p5.sin(angle);
  
      p5.curveVertex(sx, sy);
    }
    p5.endShape();
  
    // 권장량 blob의 innershadow
    gradient = ctx.createLinearGradient(100, 50, 500, 900);
    gradient.addColorStop(0, colorToString(IS_color_1));
    gradient.addColorStop(1, colorToString(IS_color_2));
    ctx.fillStyle = gradient;
    p5.drawingContext.filter = "none";
  
    p5.beginShape();
    for (let i = -1; i < segment + 2; i++) {
      let angle = p5.radians(360 / segment * i);
      let delta = data1[i === -1 ? 7 : i % segment];
  
      let sx = cx + tx - 10 + (r + RC + delta + movement[i === -1 ? 7 : i % segment]) * p5.cos(angle);
      let sy = cy + ty - 120 + (r + RC + delta + movement[i === -1 ? 7 : i % segment]) * p5.sin(angle);
  
      p5.curveVertex(sx, sy);
    }
    p5.endShape();
  
    // 권장량 blob
    gradient = ctx.createLinearGradient(100, 50, 500, 900);
    gradient.addColorStop(0, colorToString(Big_color_1));
    gradient.addColorStop(1, colorToString(Big_color_2));
    ctx.fillStyle = gradient;
    p5.drawingContext.filter = "blur(10px)";
  
    p5.beginShape();
    for (let i = -1; i < segment + 2; i++) {
      let angle = p5.radians(360 / segment * i);
      let delta = data1[i === -1 ? 7 : i % segment];
  
      let sx = cx + tx - 10 + (r + RC - 10 + delta + movement[i === -1 ? 7 : i % segment]) * p5.cos(angle);
      let sy = cy + ty - 120 + (r + RC - 10 + delta + movement[i === -1 ? 7 : i % segment]) * p5.sin(angle);
  
      p5.curveVertex(sx, sy);
    }
    p5.endShape();
  
    // small drop shadow 표현
    gradient = ctx.createLinearGradient(100, 50, 500, 900);
    gradient.addColorStop(0, colorToString(SD_color_1));
    gradient.addColorStop(1, colorToString(SD_color_2));
    ctx.fillStyle = gradient;
    p5.drawingContext.filter = "blur(10px)";
  
    p5.beginShape();
    for (let i = -1; i < segment + 2; i++) {
      let angle = p5.radians(360 / segment * i);
      let delta = data1[i === -1 ? 7 : i % segment];
  
      let sx = cx + tx - 10 + (r + IP + 30 + delta + movement[i === -1 ? 7 : i % segment]) * p5.cos(angle);
      let sy = cy + ty - 100 + (r + IP + 30 + delta + movement[i === -1 ? 7 : i % segment]) * p5.sin(angle);
  
      p5.curveVertex(sx, sy);
    }
    p5.endShape();
  
    // 섭취량 BLOB의 innershadow 표현
    gradient = ctx.createLinearGradient(100, 50, 500, 900);
    gradient.addColorStop(0, colorToString(IS_color_1));
    gradient.addColorStop(1, colorToString(IS_color_2));
    ctx.fillStyle = gradient;
    p5.drawingContext.filter = "none";
  
    p5.beginShape();
    for (let i = -1; i < segment + 2; i++) {
      let angle = p5.radians(360 / segment * i);
      let delta = data1[i === -1 ? 7 : i % segment];
  
      let sx = cx + tx - 10 + (r + IP + 10 + delta + movement[i === -1 ? 7 : i % segment]) * p5.cos(angle);
      let sy = cy + ty - 100 + (r + IP + 10 + delta + movement[i === -1 ? 7 : i % segment]) * p5.sin(angle);
  
      p5.curveVertex(sx, sy);
    }
    p5.endShape();
  
    // 섭취량 blob
    gradient = ctx.createLinearGradient(100, 50, 500, 900);
    gradient.addColorStop(0, colorToString(color_1));
    gradient.addColorStop(1, colorToString(color_2));
    ctx.fillStyle = gradient;
    p5.drawingContext.filter = "blur(10px)";
  
    p5.beginShape();
    for (let i = -1; i < segment + 2; i++) {
      let angle = p5.radians(360 / segment * i);
      let delta = data1[i === -1 ? 7 : i % segment];
  
      let sx = cx + tx - 10 + (r + IP - 10 + delta + movement[i === -1 ? 7 : i % segment]) * p5.cos(angle);
      let sy = cy + ty - 100 + (r + IP - 10 + delta + movement[i === -1 ? 7 : i % segment]) * p5.sin(angle);
  
      p5.curveVertex(sx, sy);
    }
    p5.endShape();
  };  

  const Fat = (p5) => {
    let scaleFactor = 0.5; // 전체 스케일을 줄이는 비율
    let tx = 650; // Translation x offset
    let ty = 2100; // Translation y offset
  
    p5.noStroke(); // noStroke 함수는 p5 객체를 통해 호출
    p5.scale(scaleFactor); // scale도 p5 객체를 통해 호출
  
    // big drop shadow blob
    let ctx = p5.drawingContext;
    let gradient = ctx.createLinearGradient(200, 200, 400, 300);
    gradient = ctx.createLinearGradient(100, 50, 500, 900);
    gradient.addColorStop(0, colorToString(BD_color_1));
    gradient.addColorStop(1, colorToString(BD_color_2));
    ctx.fillStyle = gradient;
    p5.drawingContext.filter = "blur(16px)";
  
    p5.beginShape();
    for (let i = -1; i < segment + 2; i++) {
      let angle = p5.radians(360 / segment * i);
      let delta = data1[i === -1 ? 7 : i % segment];
  
      let sx = cx + tx - 10 + (r + RC + delta + movement[i === -1 ? 7 : i % segment]) * p5.cos(angle);
      let sy = cy + ty - 120 + (r + RC + delta + movement[i === -1 ? 7 : i % segment]) * p5.sin(angle);
  
      p5.curveVertex(sx, sy);
    }
    p5.endShape();
  
    // 권장량 blob의 innershadow
    gradient = ctx.createLinearGradient(100, 50, 500, 900);
    gradient.addColorStop(0, colorToString(IS_color_1));
    gradient.addColorStop(1, colorToString(IS_color_2));
    ctx.fillStyle = gradient;
    p5.drawingContext.filter = "none";
  
    p5.beginShape();
    for (let i = -1; i < segment + 2; i++) {
      let angle = p5.radians(360 / segment * i);
      let delta = data1[i === -1 ? 7 : i % segment];
  
      let sx = cx + tx - 10 + (r + RC + delta + movement[i === -1 ? 7 : i % segment]) * p5.cos(angle);
      let sy = cy + ty - 120 + (r + RC + delta + movement[i === -1 ? 7 : i % segment]) * p5.sin(angle);
  
      p5.curveVertex(sx, sy);
    }
    p5.endShape();
  
    // 권장량 blob
    gradient = ctx.createLinearGradient(100, 50, 500, 900);
    gradient.addColorStop(0, colorToString(Big_color_1));
    gradient.addColorStop(1, colorToString(Big_color_2));
    ctx.fillStyle = gradient;
    p5.drawingContext.filter = "blur(10px)";
  
    p5.beginShape();
    for (let i = -1; i < segment + 2; i++) {
      let angle = p5.radians(360 / segment * i);
      let delta = data1[i === -1 ? 7 : i % segment];
  
      let sx = cx + tx - 10 + (r + RC - 10 + delta + movement[i === -1 ? 7 : i % segment]) * p5.cos(angle);
      let sy = cy + ty - 120 + (r + RC - 10 + delta + movement[i === -1 ? 7 : i % segment]) * p5.sin(angle);
  
      p5.curveVertex(sx, sy);
    }
    p5.endShape();
  
    // small drop shadow 표현
    gradient = ctx.createLinearGradient(100, 50, 500, 900);
    gradient.addColorStop(0, colorToString(SD_color_1));
    gradient.addColorStop(1, colorToString(SD_color_2));
    ctx.fillStyle = gradient;
    p5.drawingContext.filter = "blur(10px)";
  
    p5.beginShape();
    for (let i = -1; i < segment + 2; i++) {
      let angle = p5.radians(360 / segment * i);
      let delta = data1[i === -1 ? 7 : i % segment];
  
      let sx = cx + tx - 10 + (r + IF + 30 + delta + movement[i === -1 ? 7 : i % segment]) * p5.cos(angle);
      let sy = cy + ty - 100 + (r + IF + 30 + delta + movement[i === -1 ? 7 : i % segment]) * p5.sin(angle);
  
      p5.curveVertex(sx, sy);
    }
    p5.endShape();
  
    // 섭취량 BLOB의 innershadow 표현
    gradient = ctx.createLinearGradient(100, 50, 500, 900);
    gradient.addColorStop(0, colorToString(IS_color_1));
    gradient.addColorStop(1, colorToString(IS_color_2));
    ctx.fillStyle = gradient;
    p5.drawingContext.filter = "none";
  
    p5.beginShape();
    for (let i = -1; i < segment + 2; i++) {
      let angle = p5.radians(360 / segment * i);
      let delta = data1[i === -1 ? 7 : i % segment];
  
      let sx = cx + tx - 10 + (r + IF + 10 + delta + movement[i === -1 ? 7 : i % segment]) * p5.cos(angle);
      let sy = cy + ty - 100 + (r + IF + 10 + delta + movement[i === -1 ? 7 : i % segment]) * p5.sin(angle);
  
      p5.curveVertex(sx, sy);
    }
    p5.endShape();
  
    // 섭취량 blob
    gradient = ctx.createLinearGradient(100, 50, 500, 900);
    gradient.addColorStop(0, colorToString(color_1));
    gradient.addColorStop(1, colorToString(color_2));
    ctx.fillStyle = gradient;
    p5.drawingContext.filter = "blur(10px)";
  
    p5.beginShape();
    for (let i = -1; i < segment + 2; i++) {
      let angle = p5.radians(360 / segment * i);
      let delta = data1[i === -1 ? 7 : i % segment];
  
      let sx = cx + tx - 10 + (r + IF - 10 + delta + movement[i === -1 ? 7 : i % segment]) * p5.cos(angle);
      let sy = cy + ty - 100 + (r + IF - 10 + delta + movement[i === -1 ? 7 : i % segment]) * p5.sin(angle);
  
      p5.curveVertex(sx, sy);
    }
    p5.endShape();
  };
  
  const colorToString = (color) => {
    return `rgba(${color[0]}, ${color[1]}, ${color[2]}, ${color[3]})`;
  };
  
  return (
    <div ref={canvasRef}>
        <Sketch setup={setup} draw={draw} />
    </div>
);
};

export default BlobShowScreen;
