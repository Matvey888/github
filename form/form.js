let btn = document.querySelector('.dop-btn');
let personalData = document.querySelector('.personal-data');


btn.addEventListener('click', () => {
  if (personalData.classList.contains('active')) {
    personalData.classList.remove('active')
  } else {
    personalData.classList.add('active')
  }
});