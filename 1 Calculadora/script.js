const display = document.querySelector("#display");
const buttons = document.querySelectorAll("button");

buttons.forEach((item)=>{
    item.onclick=()=>{
        if(item.id == "clear"){
            display.innerText = "";
        }
        else if ( item.id == "backspace"){
            
        }
    }
})