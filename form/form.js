let btn = document.querySelector('.dop-btn');
let personalData = document.querySelector('.personal-data');


btn.addEventListener('click', () => {
  if (personalData.classList.contains('active')) {
    personalData.classList.remove('active')
  } else {
    personalData.classList.add('active')
  }
});

let users = ['Ваня', 'Иштван',];

users.push('Оля');
console.log(users);
users.splice(1, 1, 'Петя');
console.log(users);
let some = users.splice(0,1);
console.log(some);
users.splice(0, 0, 'Маша', 'Паша');
console.log(users);

let arr = ['Ваня', 'Иштван', 'Оля'];
let delVar = arr.splice(1, 1);
console.log(delVar);
console.log(arr.length);
let str = 'Ваня,Иштван,Оля';
let newArr = str.split(',');
console.log(newArr);

let arr1 = [9, 2, 8,];
let reduceValue = arr1.reduce(function (previousValue, item, index, array) {
  console.log(previousValue);
});