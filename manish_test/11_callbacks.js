function greeting(name){
        console.log(`hello ${name}`)
        }

        function getUserInput(callback){
        let x = prompt("please enter your name");
        callback (x);
        }
        getUserInput(greeting);

        