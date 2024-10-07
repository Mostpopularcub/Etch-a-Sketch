const sideLength = 600;
let rows = 16;
let columns = 16;

const sketchPad = document.querySelector('.sketch-pad');
sketchPad.style.height = `${sideLength}px`;
sketchPad.style.width = `${sideLength}px`;

function padGenerator(){
for (let i = 0; i < (rows*columns); i++) {
    
    const pixel = document.createElement('div');

    pixel.style.width = `${(sideLength/columns) -2}px`;
    pixel.style.height = `${(sideLength/rows) -2}px`;
    pixel.classList.add('pixel');

    sketchPad.appendChild(pixel);
    }

}

padGenerator()