let age = 0
let day = ''
document.getElementById('press').addEventListener('click', myInput)
function myInput () {
  age = document.getElementById('check').value
  age = parseInt(age)
  day = document.getElementById('jon').value
  if ((age > 5 && age < 12)||(day == 'tuesday')) {
    document.getElementById('response').innerHTML = 'you do not have to pay for admissions'
  } else {
    document.getElementById('response').innerHTLM = 'you must pay for admissions'
  }
}
