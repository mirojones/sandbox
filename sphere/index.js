const csv = document.querySelector('pre'),
  start = document.getElementById('start'),
  stop = document.getElementById('stop'),
  log = ev => csv.textContent = [ Date.now(), ev.alpha, ev.beta, ev.gamma ] + '\n' + csv.textContent;

start.addEventListener('click', () => {
  start.setAttribute('disabled', '');
  stop.removeAttribute('disabled');
  DeviceMotionEvent.requestPermission()
    .then(response => {
      if (response === 'granted')
        addEventListener('deviceorientation', log);
      else
        alert('not granted');
    })
    .catch(alert)
});

stop.addEventListener('click', () => {
  start.removeAttribute('disabled');
  stop.setAttribute('disabled', '');
  removeEventListener('deviceorientation', log);
});
