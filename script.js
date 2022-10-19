const body = document.querySelector('.page');
console.log(body);

const input = document.createElement('input');
input.classList.add('input');

const paragraf = document.createElement('p');
paragraf.classList.add('paragraf');

body.append(input, paragraf);

function doneTyping(event) {
    paragraf.innerHTML = event.target.value;
};

const debounce = (callback, delay) => {
    let typingTimer;

    return (...args) => {
        typingTimer && clearTimeout(typingTimer);
        typingTimer = setTimeout(() => callback(...args), delay);

    }
}

const debounceTyping = debounce(doneTyping, 300);

input.addEventListener('input', debounceTyping);
