/* Gerador de Cores */

let numberColors = 4;

for (let i = 0; i < numberColors; i += 1) {
  let colorBox = document.createElement('div');
  colorBox.classList.add('color');
  document.querySelector('#color-palette').appendChild(colorBox);
  if (i !== 0) {
    /* Código referência: https://pt.stackoverflow.com/questions/493278/como-gerar-cores-hexadecimais-aleat%C3%B3rias-com-javascript
    
    Explicação:

    - A função Math.floor arredonda o número para baixo, de modo a remover a parte decimal do número gerado pela função Math.random.
    - O método Number.prototype.toString(16) converte o número em string em sua representação hexadecimal.
    - O método String.prototype.padStart(6, '0') garante que a string hexadecimal tenha sempre seis dígitos. */

    function randomColor() {
      return (
        '#' +
        Math.floor(Math.random() * 0x1000000)
          .toString(16)
          .padStart(6, '0')
      );
    }
    colorBox.style.backgroundColor = randomColor();
  } else {
    colorBox.style.backgroundColor = 'black';
  }
}

/* Gerador de Grid */

let boardSize = 5;
let boardGrid = boardSize * boardSize;

for (let i = 0; i < boardGrid; i += 1) {
  let pixelUnit = document.createElement('div');
  pixelUnit.classList.add('pixel');
  document.querySelector('#pixel-board').appendChild(pixelUnit);
}

/* Seletor */
let colorPalette = document.querySelector('#color-palette').children;

window.onload = function () {
  colorPalette[0].classList.add('selected');
};

for (let i = 0; i < numberColors; i += 1) {
  colorPalette[i].addEventListener('click', function () {
    for (const key of colorPalette) {
      key.classList.remove('selected');
      key.classList.remove('selectedIndicator');
    }
    this.classList.add('selected');
    this.classList.add('selectedIndicator');
  });
}

/* Cor no pixel */

let pixel = document.querySelector('#pixel-board').children;

for (let i = 0; i < boardGrid; i += 1) {
  pixel[i].addEventListener('click', function () {
    this.style.backgroundColor =
      document.querySelector('.selected').style.backgroundColor;
  });
}
