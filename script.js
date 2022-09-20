let numButtons = document.querySelectorAll(".num-button");
console.log('numButtons', numButtons);

let display = document.getElementById("display");
console.log('display div', display);

let opButtons = document.querySelectorAll(".op-button");
console.log('operational buttons', opButtons);

let equalButton = document.getElementById('equal-button');
console.log('equals button', equalButton);

let clearButton = document.getElementById('clear-button');
console.log('clear button', clearButton);

clearButton.addEventListener('click', () => {
    display.innerText = "";
})

equalButton.addEventListener('click', (event) => {
    let result = eval(display.innerText);
    display.innerText = result;
})

for (let button of opButtons) {
    console.log('button in operation buttons list', button);
    button.addEventListener("click", (event) => {

        console.log('inner text of button', button.innerText);
        console.log('inner text of event target', event.target.innerText);
        display.innerText += event.target.innerText;
    });
}
for (let button of numButtons) {
    // 'do the thing'
    console.log('button in number buttons list', button);
    button.addEventListener("click", (event) => {
        display.innerText += event.target.innerText;
    });
}
