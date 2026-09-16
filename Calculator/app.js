

const screen = document.querySelector('.screen');
const buttons = document.querySelectorAll('.btn');
const clear = document.querySelector('.btn-clear');
const equal = document.querySelector('.btn-equal');

buttons.forEach((button) => {
    button.addEventListener('click', () => {
        let value = button.innerHTML;
        screen.value += value;
    });
});

equal.addEventListener('click', () => {
    if (screen.value === '') {
        screen.value = "";
    } else {
        let answer = eval(screen.value);
        screen.value = answer;
    }
});

clear.addEventListener('click', (e) => {
    screen.value = "";
});

