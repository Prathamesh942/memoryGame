let cont = document.querySelector('.container');
let box = document.querySelectorAll('.box');

let fc = null;
let isTimeoutActive = false;

box.forEach((element) => {
    element.firstChild.hidden = true;
    element.style.background = 'lightblue';
});

let movediv = document.querySelector('.moves');

let moves = 0;

box.forEach((element) => {
    element.onclick = (event) => {
        moves++;
        movediv.innerHTML = `Moves: ${moves}`;
        console.log(moves);
        if(!isTimeoutActive){
            if (fc==null) {
                fc = event.target.firstChild;
                fc.hidden = false;
            }else{
                if(event.target.firstChild.className == fc.className){
                    event.target.firstChild.hidden = false;
                    fc = null;
                }else{
                    event.target.firstChild.hidden = false;
                    isTimeoutActive = true;
                    setTimeout(()=>{
                        fc.hidden = true;
                        event.target.firstChild.hidden = true;
                        fc = null;
                        isTimeoutActive = false;
                    }, 400);
                }
            }
        }
    };
});