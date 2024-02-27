const deadCounter = document.getElementById('dead');
const lostCounter = document.getElementById('lost');
getHole = index => document.getElementById(`hole${index}`);

for (i = 1; i <= 9; i++) {
  let hole = getHole(i);
  hole.onclick = () => {
    let result = hole.className.includes('hole_has-mole');
    if (result) {
      deadCounter.textContent = (+deadCounter.textContent) + 1;
    } else {
      lostCounter.textContent = (+lostCounter.textContent) + 1;
    }

    if ((+lostCounter.textContent) === 5) {
      alert('Вы проиграли!');
      lostCounter.textContent = 0;
      deadCounter.textContent = 0;
    }

    if ((+deadCounter.textContent) === 10) {
      alert ('Победа!');
      lostCounter.textContent = 0;
      deadCounter.textContent = 0;
    }
  }
}
