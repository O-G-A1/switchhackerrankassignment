let permission = confirm("Are you in for a switch?");
if(permission==true){
let userInput= prompt("What is your name?").toLowerCase();
let show;
let firstletter = userInput[0];

    switch(firstletter){
            case "a":
            case "e":
            case "i":
            case "o":
            case "u":
            
        show= "A";
        alert(show);
        console.log(show);

        break;

            case "b":
            case "c":
            case "d":
            case "f":
            case "g":
    
            show="B";
            alert(show);
            console.log(show);


        break;

            case "h":
            case "j":
            case "k":
            case "l":
            case "m":

            show="C";
            alert(show);
            console.log(show);


        break;


            case "n":
            case "p":
            case "q":
            case "r":
            case "s":

            show="D";
            alert(show);
            console.log(show);


        break;


            case "t":
            case "v":
            case "w":

            show="E";
            alert(show);
            console.log(show);


        break;

                case "x":
                case "y":
                case "z":


                show="F";
                alert(show);
                console.log(show);
    
        }
    
     

}


