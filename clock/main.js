const hourStar = document.querySelector('.hour');
const minuteStar = document.querySelector('.minute');
const secondStar = document.querySelector('.second');
const timeDisplay = document.querySelector('.time-display');

function updateTime() {
  const now = new Date();
  const hours = now.getHours();
  const minutes = now.getMinutes();
  const seconds = now.getSeconds();

  const timeString = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
  timeDisplay.textContent = timeString;

  const colors = ['#faf4d9', '#fabaa2','#fae1f5', '#d9f2fa', '#328ba8', '#d9fae9', '#f5dfce', '#ffe57d'];

  // STAR ROTATIONS
  hourStar.style.transform = `rotate(${(hours % 12) * 30 - 90}deg)`;
  minuteStar.style.transform = `rotate(${minutes * 6}deg)`;
  secondStar.style.transform = `rotate(${seconds * 6}deg)`;

  // COLOR CHANGES
  for (let i = 0; i < colors.length; i++) {
    if (hours % colors.length === i) {
      hourStar.style.backgroundColor = colors[i];
    }
    if (minutes % colors.length === i) {
      minuteStar.style.backgroundColor = colors[i];
    }
    if (seconds % colors.length === i) {
      secondStar.style.backgroundColor = colors[i];
    }
  }
}

setInterval(updateTime, 1000);