let age = 0
let day = ''
/* Above are my variables, and below is the function that connect my button to my function */
document.getElementById('press').addEventListener('click', myInput)
/* Below is my function that starts when I click my button. Then both the age and day values are taken fromt the below boxes. Next, if the proper conditions are met, the user will receive a response */
function myInput () {
  age = document.getElementById('check').value
  age = parseInt(age)
  day = document.getElementById('jon').value
  if ((age > 5 && age < 12)||(day == 'tuesday')) {
    document.getElementById('response').innerHTML = 'you do not have to pay for admissions'
  } else {
    document.getElementById('response').innerHTML = 'you must pay for admissions'
  }
}
