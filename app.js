let btn = document.querySelector("button");
let inp = document.querySelector("input");
let ul = document.querySelector("ul");

btn.addEventListener("click", ()=> {
    let list = document.createElement("li");
    list.innerText =  inp.value;
    ul.appendChild(list);
    inp.value = ""; 
    let delbtn = document.createElement("button");
    delbtn.innerText = "Remove";
    delbtn.classList.add("del");
    list.appendChild(delbtn);
});
ul.addEventListener("click", (event) => {
    console.dir(event.target);
    // Check if the clicked element has the class "del"
    if (event.target.classList.contains("del")) {
        let liItem = event.target.parentElement;
        liItem.remove();
    }
});
