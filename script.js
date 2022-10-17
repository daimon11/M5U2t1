const body = document.querySelector('.page');
console.log(body);

const input = document.createElement('input');
input.classList.add('input');

const paragraf = document.createElement('p');
paragraf.classList.add('paragraf');

body.append(input, paragraf);


let typingTimer;                //timer identifier
const doneTypingInterval = 300;  //time in ms (0,3 seconds)

input.addEventListener('keyup', () => {
    clearTimeout(typingTimer);
    if (input.value) {
        typingTimer = setTimeout(doneTyping, doneTypingInterval);
    }
});

function doneTyping() {
    paragraf.innerHTML = input.value;
};