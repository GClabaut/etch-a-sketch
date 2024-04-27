const container = document.querySelector('.container');


function etch(size) {
    let boxSize = size;
    let sizePercent = ( 1 / boxSize ) * 100;
    
    const div = document.createElement('div');
    div.setAttribute('class', 'sketch');
    div.style.flex = `0 0 ${sizePercent}%`
    
    for (let i = 0; i < boxSize * boxSize; i++) {
        container.appendChild(div.cloneNode(true));
    }
}

etch(16);