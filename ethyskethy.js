let button = document.createElement('button');
button.textContent = "Change grid";
document.body.appendChild(button);

let div = document.querySelector(".container");

button.addEventListener('click', () => {
    let value = prompt("Combien de carrés ?");

    if (value >= 100) {
        return;
    }
    if (value < 100) {
        div.innerHTML = "";
        for (let i = 0; i < value**2; i++) {
            let secondSquare = document.createElement('div');
            secondSquare.classList.add("square");
            secondSquare.style.flexBasis = `calc(100% / ${value})`;
            div.appendChild(secondSquare);
            
            secondSquare.addEventListener("mouseenter", () => {
                secondSquare.style.backgroundColor = "blue";
            })
        }
    }
})

function grid() {
    for (let i = 0; i < 256; i++) {
        let square = document.createElement('div');
        square.classList.add("square");
        div.appendChild(square);
        square.addEventListener("mouseenter", () => {
            square.style.backgroundColor = "blue";
        })
    }
}

grid();