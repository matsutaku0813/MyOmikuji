'use strict';

{

  const btn = document.getElementById('btn');
  const result = document.getElementById('result');

  btn.addEventListener('click', () => {
    const n = Math.random();
    if (n < 0.05) {
      result.textContent = '貴方は大吉を引きました。';
    } else if (n < 0.2) {
      result.textContent = '貴方は中吉を引きました。';
    } else {
      result.textContent = '貴方は凶を引きました。';
    }
  });
}