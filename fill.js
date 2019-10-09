const container = document.querySelector('.app-table__body-content');
const emptyDot = document.querySelector('.app-table__body-dot_empty');

for (let i = 0; i < 4680 - 4; i++) {
  const copy = emptyDot.cloneNode();
  container.appendChild(copy);
}

// 52 * 90 = 4680 - 4 нода в index.html