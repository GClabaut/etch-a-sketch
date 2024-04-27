const container = document.querySelector('.container');


function etch(size) {
    let boxSize = size;
    let percentSize = ( 1 / boxSize ) * 100;
    
    const div = document.createElement('div');
    div.setAttribute('class', 'sketch');
    div.style.flex = `0 0 ${percentSize}%`;
    
    for (let i = 0; i < boxSize * boxSize; i++) {
        container.appendChild(div.cloneNode(true));
    };
};

etch(16);

const boxes = document.querySelectorAll('.sketch');

boxes.forEach(box => {
    box.addEventListener('mouseover', () => {
        let randomColor = Math.floor(Math.random()*16777215).toString(16);
        box.style.background = `#${randomColor}`;
    });
});