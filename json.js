function validation(event){
event.preventDefault();
const data = new FormData(event.target);
const value1 = Object.fromEntries(data.entries());
console.log({value1});
  }
const form = document.querySelector('myForm');
myForm.addEventListener('submit', validation);