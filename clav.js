let buttons = document.querySelectorAll(".btn-digit");

for (let elem of buttons) {
    elem.addEventListener("click", function(){
        let number = this.value;
        document.querySelector("#text").value+=number;
    })
}

let clear = document.querySelector("#clear");

clear.addEventListener("click", function(){
    let text =document.querySelector("#text");
    text.value = text.value.substr(0, (text.value.length-1));
})

 function checkLength(){
     if(inner.value.length <=9)
     return true;
     else return false;
 }
