const btn = document.querySelector('.btn-primary');
const screenWidth = window.screen.width
const screenHeight = window.screen.height

btn.addEventListener('click', () => {
  alert(`${screenWidth} на ${screenHeight}`)
});