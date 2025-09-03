document.querySelector('form').addEventListener('submit', function(e) {
  e.preventDefault();
  document.getElementById('resume-output').classList.remove('hidden');

  const inputs = document.querySelectorAll('input, textarea');
  document.getElementById('out-name').innerText = inputs[0].value;
  document.getElementById('out-email').innerText = inputs[1].value;
  document.getElementById('out-experience').innerText = inputs[2].value;
  document.getElementById('out-education').innerText = inputs[3].value;
});
