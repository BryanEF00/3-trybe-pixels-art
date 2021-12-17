/* Gerador de Cores */
let numberColors = 4;

for (let i = 0; i < numberColors; i += 1) {
  let colorBox = document.createElement('div');
  colorBox.classList.add('color');
  document.querySelector('#color-palette').appendChild(colorBox);
  if (i !== 0) {
    function randomColor() {
      return (
        '#' +
        Math.floor(Math.random() * 0x1000000)
          .toString(16)
          .padStart(6, '0')
      );
    }
    colorBox.style.backgroundColor = randomColor();

    /* Código referência: https://pt.stackoverflow.com/questions/493278/como-gerar-cores-hexadecimais-aleat%C3%B3rias-com-javascript
    
    Explicação:
    - A função Math.floor arredonda o número para baixo, de modo a remover a parte decimal do número gerado pela função Math.random.
    - O método Number.prototype.toString(16) converte o número em string em sua representação hexadecimal.
    - O método String.prototype.padStart(6, '0') garante que a string hexadecimal tenha sempre seis dígitos. */
  } else {
    colorBox.style.backgroundColor = 'black';
  }
}

/* Cor Preta Selecinada Inicialmente */
window.onload = function () {
  let initialColor = document.getElementById('color-palette').children[0];
  initialColor.classList.add('selected');
};

/* Seletor de Cor */
let colorBoard = document.querySelector('#color-palette').children;
for (let i = 0; i < numberColors; i += 1) {
  colorBoard[i].addEventListener('click', function () {
    for (let i = 0; i < numberColors; i += 1) {
      colorBoard[i].classList.remove('selected');
      colorBoard[i].classList.remove('highLight');
    }
    colorBoard[i].classList.add('selected');
    colorBoard[i].classList.add('highLight');
  });
}
/* Grid Inicial */
for (let i = 0; i < 25; i += 1) {
  let pixel = document.createElement('div');
  pixel.classList.add('pixel');
  document.getElementById('pixel-board').appendChild(pixel);
  pixel.addEventListener('click', function () {
    pixel.style.backgroundColor =
      document.getElementsByClassName('selected')[0].style.backgroundColor;
  });
}
/* Botão Clear Board */
let clearBtn = document.getElementById('clear-board');

clearBtn.addEventListener('click', function () {
  let clearArea = document.getElementsByClassName('pixel').length;
  for (i = 0; i < clearArea; i += 1) {
    document.getElementsByClassName('pixel')[i].style.backgroundColor = 'white';
  }
});

/* Botão do Input */
let alertBtn = document.getElementById('generate-board');
let input = document.getElementById('board-size');

alertBtn.addEventListener('click', function () {
  /* Verificação */
  if (input.value === '') {
    alert('Board inválido!');
  } else if (input.value < 5) {
    input.value = 5;
  } else if (input.value > 50) {
    input.value = 50;
  }

  /* Remove Grid */
  let removeAreaSize = document.querySelector('#pixel-board').children.length;

  for (let i = 0; i < removeAreaSize; i += 1) {
    let removePixel = document.querySelector('#pixel-board').children;
    removePixel[0].remove();
  }

  /* Adiciona Novo Grid */
  document.getElementById('pixel-board').style.gridTemplateColumns =
    'repeat(' + input.value + ', auto)';

  for (let i = 0; i < input.valueAsNumber ** 2; i += 1) {
    let pixel = document.createElement('div');
    pixel.classList.add('pixel');
    document.getElementById('pixel-board').appendChild(pixel);
    pixel.addEventListener('click', function () {
      pixel.style.backgroundColor =
        document.getElementsByClassName('selected')[0].style.backgroundColor;
    });
  }
});
