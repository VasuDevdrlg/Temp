document.getElementById('submit').onclick = function() {
  let input = Number(document.getElementById('input').value);
  let cf = document.getElementById('cf').checked;
  let result;

  if (cf) {
    result = input * (9 / 5) + 32;
    document.getElementById('result').textContent = result.toFixed(1)+" F";
  } else {
    result = (input - 32) * 5 / 9;
    document.getElementById('result').textContent = result.toFixed(1)+' C';
  }

  
}
