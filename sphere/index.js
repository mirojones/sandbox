const csv = document.querySelector('pre');

addEventListener('deviceorientation', ev => csv.textContent += [
  Date.now(),
  ev.alpha,
  ev.beta,
  ev.gamma 
] + '\n');
