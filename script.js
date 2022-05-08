const containerEle = document.getElementById('container')
for (let i = 0; i < 9; i++) {
  const block = document.createElement('div')
  block.classList.add('block')
  block.addEventListener('click', () => blockLogic(block))
  containerEle.appendChild(block)
}
let nextPlayer = 'X'
const blockLogic = (block) => {
  block.innerHTML = nextPlayer
  block.style.cursor = 'not-allowed'
  block.innerHTML = nextPlayer
  nextPlayer = nextPlayer === 'X' ? 'O' : 'X'
}
