import React from 'react';
import Sketch from 'react-p5';

const DotShowScreen = ({ water_Color,ET,WTOne,WTTwo, CabRatio, ProRatio, FatRatio,Default_color_1, Default_color_2 }) => {
  let c1 = [60, 120, 255, 1];
  let c2 = [255, 255, 80, 1];
  let c3 = [255, 50, 50, 1];

  let mc1 = [231, 239, 243, 1];
  let mc2 = [246, 226, 222, 1];
  let mc3 = [240, 230, 243, 1];

  const setup = (p5, canvasParentRef) => {
    
    p5.noStroke();
   
    let canvas = p5.createCanvas(430, 932).parent(canvasParentRef);
          let ctx = canvas.elt.getContext('2d');
          canvas.style('border-radius', '30px');
  };

  const draw = (p5) => {
    p5.background(255);
    MainDot(p5);

    if (WTOne) {
      WaterDot(p5, WTOne.x, WTOne.y, WTOne.amount, water_Color, water_Color);
    }
  
    if (WTTwo) {
      WaterDot(p5, WTTwo.x, WTTwo.y, WTTwo.amount, water_Color, water_Color);
    }
  };

  const MainDot = (p5) => {
    let baseRadius = 10;
    let maxRadius = 12;
    let time = p5.frameCount * 0.02;

    for (let i = 0; i <= p5.width; i += p5.width / (6 * 2)) {
      for (let j = 0; j <= p5.height; j += p5.height / (18 * ET)) {
        let d = p5.dist(p5.width / 2, p5.height / 2, i, j);
        let radius = maxRadius * (0.5 + 0.5 * p5.sin(time - d / 10));

        let gradient = p5.drawingContext.createLinearGradient(0, 0, p5.width, p5.height);
        gradient.addColorStop(CabRatio, colorToString(Default_color_1));
        gradient.addColorStop(ProRatio, colorToString(Default_color_2));
        gradient.addColorStop(FatRatio, colorToString(mc3));
        p5.drawingContext.fillStyle = gradient;

        p5.drawingContext.beginPath();
        p5.drawingContext.arc(i, j, radius, 0, p5.TWO_PI);
        p5.drawingContext.fill();
      }
    }
  };

  const WaterDot = (p5, centerX, centerY, DotRange, c2, c3) => {
    for (let i = 0; i <= p5.width; i += p5.width / (6 * 2)) {
      for (let j = 0; j <= p5.height; j += p5.height / (18 * 2)) {
        let d = p5.dist(centerX, centerY, i, j);
        d = p5.map(d, 0, DotRange, 30, 0);
        d = p5.max(d, 1);

        let lerpedColor = p5.lerpColor(p5.color(colorToString(c2)), p5.color(colorToString(c3)), p5.map(d, 0, 20, 0, 1));
        p5.drawingContext.fillStyle = lerpedColor.toString();

        p5.drawingContext.beginPath();
        let radius = (d / 2) * (1 + 0.5 * p5.sin(p5.frameCount * 0.08));
        p5.drawingContext.arc(i, j, radius, 0, p5.TWO_PI);
        p5.drawingContext.fill();
      }
    }
  };

  const colorToString = (color) => {
    return `rgba(${color[0]}, ${color[1]}, ${color[2]}, ${color[3]})`;
  };

  return <Sketch setup={setup} draw={draw} />;
};

export default DotShowScreen;
