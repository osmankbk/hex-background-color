const body = document.querySelector('body');
const button = document.querySelector('#btn');
const displayValue = document.querySelector('#hex-value');
const hexList = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F']

const hexColor = () => {
    let hex = '#';
    for (let i = 0; i < 6; i++) {
        const randomNum = Math.floor(Math.random() * hexList.length);
        hex += hexList[randomNum];
    }
    body.style.backgroundColor = hex;
    displayValue.textContent = hex;
}
hexColor();
button.addEventListener('click', hexColor);
