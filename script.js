const body = document.querySelector('.page');
console.log(body);

const input = document.createElement('input');
input.classList.add('input');

const paragraf = document.createElement('p');
paragraf.classList.add('paragraf');

body.append(input, paragraf);

input.addEventListener('input', () => {
    timerId;
    console.log('есть');
});


const timerId = setInterval(() => {
    // paragraf.append(input.value);
    paragraf.innerHTML = input.value;
}, 300)

timerId;
