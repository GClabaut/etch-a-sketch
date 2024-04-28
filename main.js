const container = document.querySelector('.container');
const button = document.querySelector('button');


function etch(size) {
    let boxSize = size;
    let percentSize = ( 1 / boxSize ) * 100;
    
    const div = document.createElement('div');
    div.setAttribute('class', 'sketch');
    div.style.flex = `0 0 ${percentSize}%`;
    
    for (let i = 0; i < boxSize * boxSize; i++) {
        container.appendChild(div.cloneNode(true));
    };

    const boxes = document.querySelectorAll('.sketch');

    boxes.forEach(box => {
        box.addEventListener('mouseover', () => {
            let randomColor = Math.floor(Math.random()*16777215).toString(16);
            box.style.background = `#${randomColor}`;

            // Somewhat working loop to progressively hide other boxes when entering another one
            // for (let j = 0; j <= boxes.length; j++) {
            //     if (box.style.opacity < 1) {
            //         box.style.opacity = 1;
            //     } else {
            //         boxes[j].style.opacity = boxes[j].style.opacity - 0.1;
            //     };
            // };

            if (box.style.opacity <= 0) {
                box.style.opacity = 0.1;
            } else {
                box.style.opacity = parseFloat(box.style.opacity) + 0.1;
            };

        });
    });
};

etch(16);

button.addEventListener('click', () => {
    let result = prompt('Change the box size');
    while (!Number.isInteger(parseInt(result)) || result <= 0 || 100 < result) {
        result = prompt('Change the box size (must be between 1 and 100)');
    }

    while (container.firstChild) {
        container.removeChild(container.firstChild);
    };

    etch(result);
});

const num = '1';
const op = num + 1;
console.log(op)