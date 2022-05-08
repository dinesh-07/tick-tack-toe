const containerEle = document.getElementById('container')
for (let i = 0; i < 9; i++) {
  const block = document.createElement('div')
  block.classList.add('block')
  containerEle.appendChild(block)
}
