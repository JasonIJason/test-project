document.querySelector('html').onclick = function() {
    alert('НЕ ТЫКАЙ В БЕДНОГО НОСРОГА!!!');
}

var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');

function setUserName() {
    var myName = prompt('Please enter your name.');
    localStorage.setItem('name', myName);
    myHeading.textContent = 'Носороги-это круто, ' + myName;
  }

  if(!localStorage.getItem('name')) {
    setUserName();
  } else {
    var storedName = localStorage.getItem('name');
    myHeading.textContent = 'Носороги-это круто, ' + storedName;
  }

  myButton.onclick = function() {
    setUserName();
  }
  