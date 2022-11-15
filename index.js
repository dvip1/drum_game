function clickable() {
    var audio = new Audio('sounds/tom-1.mp3');
    audio.play();
}
//detects button presses
for (let i = 0; i < 7; i++) {
    document.querySelectorAll("button")[i].addEventListener("click", function () {
        var button = this.innerHTML;
        makeSound(button);
        animate(button);
    });
}
//detects keyboard presses
for (let i = 0; i < 7; i++) {
    document.addEventListener("keydown", function (e) {
        var button = e.key;
        makeSound(button);
        animate(button);
    });
}

function makeSound(a) {
    switch (a) {
        case 'w':
            var audio = new Audio('sounds/tom-1.mp3');
            audio.play();
            break;
        case 'a':
            var audio = new Audio('sounds/tom-2.mp3');
            audio.play();
            break;
        case 's':
            var audio = new Audio('sounds/tom-3.mp3');
            audio.play();
            break;
        case 'd':
            var audio = new Audio('sounds/tom-4.mp3');
            audio.play();
            break;
        case 'j':
            var audio = new Audio('sounds/snare.mp3');
            audio.play();
            break;
        case 'k':
            var audio = new Audio('sounds/crash.mp3');
            audio.play();
            break;
        case 'l':
            var audio = new Audio('sounds/kick-bass.mp3');
            audio.play();
            break;
        default:
            break;
    }
}
function animate(a) {
    //add anumation when a certain key is pressed 
   var activeButton = document.querySelector("." + a);
    activeButton.classList.add("pressed");
    setTimeout(function () {
        activeButton.classList.remove("pressed");
    }
        , 100);
            
}