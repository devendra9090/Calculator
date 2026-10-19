const btns = document.querySelectorAll(".btn button");
const input = document.querySelector(".upper-area input")

btns.forEach((btn) => {
    btn.addEventListener("click", () => {
        if(btn.innerText === "="){
            input.value = eval(input.value);
        }
        else if(btn.innerText === "AC"){
            input.value = "";
        }
        else if( btn.innerText === "del"){
            input.value = input.value.slice(0,-1);
        }
        else{
        input.value += btn.innerText;
        }
        
    });
})