
let secretNumber = Math.floor(Math.random() * 100) + 1;
let attempts = 0;

function checkGuess() {
  const guessInput = document.getElementById('guess');
  const message = document.getElementById('message');
  const attemptsText = document.getElementById('attempts');
  const guess = Number(guessInput.value);

  if (!guess || guess < 1 || guess > 100) {
    message.textContent = "❌ Ingresa un número válido entre 1 y 100.";
    message.style.color = "#fff";
    return;
  }

  attempts++;
  attemptsText.textContent = `Intentos: ${attempts}`;

  if (guess === secretNumber) {
    message.textContent = `🎉 ¡Correcto! El número era ${secretNumber}.`;
    message.style.color = "#2ecc71";
  } else if (guess < secretNumber) {
    message.textContent = "🔼 Muy bajo. Intenta de nuevo.";
    message.style.color = "#fff";
  } else {
    message.textContent = "🔽 Muy alto. Intenta de nuevo.";
    message.style.color = "#fff";
  }
}

function restartGame() {
  secretNumber = Math.floor(Math.random() * 100) + 1;
  attempts = 0;
  document.getElementById('guess').value = '';
  document.getElementById('message').textContent = '';
  document.getElementById('attempts').textContent = 'Intentos: 0';
  document.getElementById('message').style.color = "#fff";
}
