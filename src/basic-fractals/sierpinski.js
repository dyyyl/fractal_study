import chaos from '../helpers/chaos';

let size = 0;
let maxDepth = 0;

const drawTriangle = depth => {
  let angle = -Math.PI / 2;
  if (depth === 0) {
    chaos.context.beginPath();
    // move to top point of triangle
    chaos.context.moveTo(Math.cos(angle), Math.sin(angle));
    angle += (Math.PI * 2) / 3;
    // draw line to lower right point
    chaos.context.lineTo(Math.cos(angle), Math.sin(angle));
    // draw line to final point
    angle += (Math.PI * 2) / 3;
    chaos.context.lineTo(Math.cos(angle), Math.sin(angle));
    // fill will close the shape
    chaos.context.fill();
  } else {
    // draw the top triangle
    chaos.context.save();
    chaos.context.translate(Math.cos(angle) * 0.5, Math.sin(angle) * 0.5);
    chaos.context.scale(0.5, 0.5);
    drawTriangle(depth - 1);
    chaos.context.restore();
    // draw the lower right triangle
    angle += (Math.PI * 2) / 3;
    chaos.context.save();
    chaos.context.translate(Math.cos(angle) * 0.5, Math.sin(angle) * 0.5);
    chaos.context.scale(0.5, 0.5);
    drawTriangle(depth - 1);
    chaos.context.restore();
    // draw the lower left triangle
    angle += (Math.PI * 2) / 3;
    chaos.context.save();
    chaos.context.translate(Math.cos(angle) * 0.5, Math.sin(angle) * 0.5);
    chaos.context.scale(0.5, 0.5);
    drawTriangle(depth - 1);
    chaos.context.restore();
  }
};

const draw = () => {
  chaos.clear();
  chaos.context.save();
  chaos.context.translate(chaos.width * 0.5, chaos.height * 0.6);
  chaos.context.scale(size, size);
  chaos.context.fillStyle = '#fbfbfb';
  drawTriangle(maxDepth);
  chaos.context.restore();
};

window.onload = (function init() {
  chaos.init();
  size = chaos.height * 0.5;
  draw();
  document.body.addEventListener('keyup', event => {
    console.log(event.keyCode);
    switch (event.keyCode) {
      case 32: // space
        maxDepth += 1;
        draw();
        break;
      case 80: // p
        chaos.popImage();
        break;
      default:
        break;
    }
  });
})();
