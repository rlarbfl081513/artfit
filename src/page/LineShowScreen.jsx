import React from 'react';
import Sketch from 'react-p5';

const LineShowScreen = ({ carbRatio_color, proteinRatio_color, fatRatio_color, watercolor, ET, BC, BP, BF, LC, LP, LF, DC, DP, DF, selectedIndices, Default_color_1, Default_color_2 }) => {

  const setup = (p5, canvasParentRef) => {
    let canvas = p5.createCanvas(430, 932).parent(canvasParentRef);
    let ctx = canvas.elt.getContext('2d');
    canvas.style('border-radius', '30px');
  };

  const draw = (p5) => {
    p5.randomSeed(30);
    p5.background(255);
    p5.drawingContext.filter = 'none';
    DataDesign(p5);
  };

  // Define colors
  // const Default_color_1 = [248, 252, 254, 1];
  // const Default_color_2 = [190, 221, 254, 1];
  const start_color = [255, 255, 255, 1];

  const B_carbRatio_color = carbRatio_color;
  const B_proteinRatio_color = proteinRatio_color;
  const B_fatRatio_color = fatRatio_color;

  const L_carbRatio_color = carbRatio_color;
  const L_proteinRatio_color = proteinRatio_color;
  const L_fatRatio_color = fatRatio_color;

  const D_carbRatio_color = carbRatio_color;
  const D_proteinRatio_color = proteinRatio_color;
  const D_fatRatio_color = fatRatio_color;

  // Calculate total grams and ratios
  const GradientStart = 0;
  const B_totalGrams = GradientStart + BC + BP + BF;
  const B_GradientStart_carbRatio = GradientStart / B_totalGrams;
  const B_carbRatio = B_GradientStart_carbRatio + BC / B_totalGrams;
  const B_proteinRatio = B_carbRatio + BP / B_totalGrams;
  const B_fatRatio = B_proteinRatio + BF / B_totalGrams;

  const L_totalGrams = LC + LP + LF;
  const L_GradientStart_carbRatio = GradientStart / B_totalGrams;
  const L_carbRatio = L_GradientStart_carbRatio + LC / L_totalGrams;
  const L_proteinRatio = L_carbRatio + LP / L_totalGrams;
  const L_fatRatio = L_proteinRatio + LF / L_totalGrams;

  const D_totalGrams = DC + DP + DF;
  const D_GradientStart_carbRatio = GradientStart / D_totalGrams;
  const D_carbRatio = D_GradientStart_carbRatio + DC / D_totalGrams;
  const D_proteinRatio = D_carbRatio + DP / D_totalGrams;
  const D_fatRatio = D_proteinRatio + DF / D_totalGrams;

  const DataDesign = (p5) => {
    let numLines = 20;
    let lineSpacing = 1000 / numLines;

    for (let i = 1; i < numLines; i++) {
      if (i === 5) {
        drawDataLine(
          p5,
          i * lineSpacing,
          start_color,
          B_carbRatio_color,
          B_proteinRatio_color,
          B_fatRatio_color,
          B_carbRatio,
          B_proteinRatio,
          B_fatRatio
        );
      } else if (i === 8) {
        drawDataLine(
          p5,
          i * lineSpacing,
          start_color,
          L_carbRatio_color,
          L_proteinRatio_color,
          L_fatRatio_color,
          L_carbRatio,
          L_proteinRatio,
          L_fatRatio
        );
      }  else if ( i === 14) {
        drawDataLine(
          p5,
          i * lineSpacing,
          start_color,
          D_carbRatio_color,
          D_proteinRatio_color,
          D_fatRatio_color,
          D_carbRatio,
          D_proteinRatio,
          D_fatRatio
        );
      }
      else {
        drawDataLine(p5, i * lineSpacing, Default_color_1, Default_color_2);
      }
     
      if (selectedIndices.includes(i)) {
        let opacityValue;
  
        // i 값에 따른 투명도 설정 (직접 설정 가능)
        if (i === 2) {
          opacityValue = 1;
        } else if (i === 5) {
          opacityValue = 0.2;
        } else if (i === 8) {
          opacityValue = 0.4;
        } else if (i === 11) {
          opacityValue = 0.6;
        } else if (i === 14) {
          opacityValue = 0.2;
        }else if (i === 17) {
          opacityValue = 1;
        }
        else {
          opacityValue = 1;  // 기본값
        }
  
        // 투명도 적용
        drawDataStroke(p5, i * lineSpacing, 1, [255, 255, 255, opacityValue], watercolor);
      } else {
        // 선택되지 않은 경우 기본 투명도 설정
        drawDataStroke(p5, i * lineSpacing, 1, [255, 255, 255, 0], [141, 179, 216, 0.1]);
      }
      
    }
  };

  const drawDataLine = (p5, y, c1, c2, c3 = null, c4 = null, r1 = 0, r2 = 0, r3 = 0) => {
    p5.push();
    p5.noStroke();
    const ctx = p5.drawingContext;

    let gradient;
    if (c3 === null) {
      gradient = ctx.createLinearGradient(p5.width / 2, y - 100, p5.width / 2, y + 110);
      gradient.addColorStop(0, colorToString(c1));
      gradient.addColorStop(1, colorToString(c2));
    } else {
      gradient = ctx.createLinearGradient(0, 0, 430, 0);
      gradient.addColorStop(0, colorToString(c1));
      gradient.addColorStop(Math.min(r1, 1), colorToString(c2));
      gradient.addColorStop(Math.min(r2, 1), colorToString(c3));
      gradient.addColorStop(Math.min(r3, 1), colorToString(c4));
    }
    ctx.fillStyle = gradient;

    p5.beginShape();
    p5.vertex(-5, y);
    for (let i = 0; i <= 4; i++) {
      let x_i = (p5.width / 4) * i;
      let y_i = getNoiseY(p5, y, x_i, ET);
      p5.curveVertex(x_i, y_i);
    }
    p5.vertex(p5.width + 5, y);
    p5.vertex(p5.width, p5.height);
    p5.vertex(0, p5.height);
    p5.endShape(p5.CLOSE);
    p5.pop();
  };

  const drawDataStroke = (p5, y, c1, c2, c3) => {
    p5.push();
    const ctx = p5.drawingContext;
    p5.noStroke();
    // p5.strokeWeight(3);
    let gradient = ctx.createLinearGradient(p5.width / 2, y - 100, p5.width / 2, y + 50);
    gradient.addColorStop(0, colorToString(c2));
    gradient.addColorStop(c1, colorToString(c3));

    ctx.fillStyle = gradient;

    p5.beginShape();
    p5.vertex(-5, y);
    for (let i = 0; i <= 4; i++) {
      let x_i = (p5.width / 4) * i;
      let y_i = getNoiseY(p5, y, x_i, ET);
      p5.curveVertex(x_i, y_i);
    }
    p5.vertex(p5.width + 5, y);
    p5.vertex(p5.width, p5.height);
    p5.vertex(0, p5.height);
    p5.endShape(p5.CLOSE);
    p5.pop();
  };

  const getNoiseY = (p5, y, x_i, ET) => {
    let d = p5.dist(x_i, y, p5.width / 2, y);
    return (
      y -
      p5.noise(y + x_i * 0.01 + p5.frameCount * 0.001 * (ET * 0.4)) *
        (p5.width / 2 - d / 2)
    );
  };

  const colorToString = (color) => {
    return `rgba(${color[0]}, ${color[1]}, ${color[2]}, ${color[3]})`;
  };

  return (
    <div><Sketch setup={setup} draw={draw} /></div>
      
  );

};

export default LineShowScreen;
