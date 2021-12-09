//grid
let gridSize = 5;
let grid = (gridSize * gridSize);

for (let i = 0; i < grid; i += 1) {
  let pixel = document.createElement('div');
  pixel.className = 'pixel';
  document.getElementById('pixel-board').appendChild(pixel);
}

console.log(grid);
