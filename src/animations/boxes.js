import chaos from './chaos';

window.onload = () => {
  (function init() {
    chaos.init();
    document.body.addEventListener('keyup', event => {
      switch (event.keyCode) {
        case 32: // space
          setInterval(() => {
            draw();
          }, 500);
          break;
        case 80: // p
          chaos.popImage();
          break;
        case 67: // c
          chaos.clear();
          break;
        default:
          break;
      }
    });
  })();

  const draw = () => {
    const x = Math.random() * (chaos.width - 100);
    const y = Math.random() * (chaos.height - 100);
    const width = 20 + Math.random() * 100;
    const height = 20 + Math.random() * 100;
    const hue = 360 * Math.random();
    const saturation = 25 + 70 * Math.random();
    const brightness = 85 + 10 * Math.random();
    chaos.context.fillStyle = `hsl(${hue}, ${saturation}%, ${brightness}%)`;
    chaos.context.fillRect(x, y, width, height);
  };
};
