function updateStars() {
  const hourStar = document.querySelector('.hour-star');
  const minuteStar = document.querySelector('.minute-star');
  const secondStar = document.querySelector('.second-star');

  const currentTime = new Date();
  const hours = currentTime.getHours();
  const minutes = currentTime.getMinutes();
  const seconds = currentTime.getSeconds();

  hourStar.style.transform = `translate(-50%, -50%) rotate(${hours * 30 + minutes * 0.5}deg)`;
  minuteStar.style.transform = `translate(-50%, -50%) rotate(${minutes * 6}deg)`;
  secondStar.style.transform = `translate(-50%, -50%) rotate(${seconds * 6}deg)`;
}

setInterval(updateStars, 1000);