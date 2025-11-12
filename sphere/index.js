const csv = document.querySelector('pre'),
  start = document.getElementById('start'),
  stop = document.getElementById('stop'),
  log = ev => csv.textContent += [ Date.now(), ev.alpha, ev.beta, ev.gamma ] + '\n';

start.addEventListener('click', () => {
  start.disabled = '';
  stop.removeAttribute('disabled');
  addEventListener('deviceorientation', log);
});

stop.addEventListener('click', () => {
  start.removeAttribute('disabled');
  stop.disabled = '';
  removeEventListener('deviceorientation', log);
});
