const cakeButton = document.getElementById('cake-button');
const cakeHint = document.getElementById('cake-hint');
const openLetterButton = document.getElementById('open-letter');
const replayButton = document.getElementById('replay');

function showScreen(id) {
  document.querySelectorAll('.screen').forEach(screen => screen.classList.remove('active'));
  document.getElementById(id).classList.add('active');
}

cakeButton.addEventListener('click', () => {
  document.querySelectorAll('.flame').forEach(flame => flame.classList.add('out'));
  cakeHint.textContent = 'Wish made! ♡';
  cakeButton.disabled = true;
  window.setTimeout(() => showScreen('flower-screen'), 850);
});

openLetterButton.addEventListener('click', () => showScreen('letter-screen'));

replayButton.addEventListener('click', () => {
  document.querySelectorAll('.flame').forEach(flame => flame.classList.remove('out'));
  cakeHint.textContent = 'Tap the cake to make your wish ✨';
  cakeButton.disabled = false;
  showScreen('cake-screen');
});
