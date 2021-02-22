//THIS USES POINTER EVENTS, BUT IN SOME SITUATIONS I'M SURE YOU'D WANT TO DISPLAY: NONE

const button = document.querySelector('button');

button.addEventListener('click', number);

function number() {
    document.querySelector('h1').innerHTML = Math.floor(Math.random() * 100);
    button.style.pointerEvents = 'none'; //Removes the ability for the button to be clicked
    setTimeout(function() { //Allows the button to be clicked after 3 seconds
        button.style.pointerEvents = 'all'; 
    }, 3000)
}