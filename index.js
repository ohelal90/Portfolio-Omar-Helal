var greetUser = function(){
    var userName = prompt("What is your name?");
    
    if(userName !== ""){
    alert("Hello " + userName);
    } else {
        greetUser();
    
        }
    };

    greetUser();  