var title = document.querySelector('h1');

var greetUser = function greetUser(){
    var userName = prompt('What is your name?');

    if(userName !== ''){
        title.textContent += '. Welcome, ' + userName;
    }
    else{
        greetUser();
    }
};

greetUser();