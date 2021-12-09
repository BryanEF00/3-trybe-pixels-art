const gridSize = 5;
const grid = gridSize * gridSize;

for (let i = 0; i < grid; i += 1) {
  const pixel = document.createElement('div');
  pixel.className = 'pixel';
  document.getElementById('pixel-board').appendChild(pixel);
}
