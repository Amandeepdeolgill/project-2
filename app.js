let btn = document.querySelector("button");
let inp = document.querySelector("input");
let ul = document.querySelector("ul");

function getRandomColor() {
    return '#' + Math.floor(Math.random()*16777215).toString(16);
  }

btn.addEventListener("click", ()=> {
    let list = document.createElement("li");
    list.innerText =  inp.value;
    ul.appendChild(list);
    inp.value = ""; 
    list.style.backgroundColor = getRandomColor();
    list.style.fontWeight = "bold";
    let delbtn = document.createElement("button");
    delbtn.innerText = "Remove";
    delbtn.classList.add("del");
    list.appendChild(delbtn);
});
ul.addEventListener("click", (event) => {
    if (event.target.classList.contains("del")) {
        let liItem = event.target.parentElement;
        liItem.remove();
    }
});
