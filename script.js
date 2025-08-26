const targetDate = new Date(2026, 3, 14, 13, 0); // Пример: 30 октября 2025, 18:00

function updateCountdown() {
  const now = new Date();
  const diff = targetDate - now;

  // Рассчитайте оставшееся время
  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((diff % (1000 * 60)) / 1000);

  // Обновите DOM
  document.getElementById('days').textContent = days;
  document.getElementById('hours').textContent = hours;
  document.getElementById('minutes').textContent = minutes;
  document.getElementById('seconds').textContent = seconds;
}

// Запустите обновление каждую секунду
setInterval(updateCountdown, 1000);
updateCountdown(); // Инициализация