let name = document.getElementById("input");
let submit = document.getElementById("button");
let output = document.getElementById("output");

function call(){
    if(!name.checkValidity()){
        alert("Please fill the Name!");
    }else{
        fetch("https://api.agify.io?name="+name.value)
        .then(res => res.json())
        .then(res => {
            output.value = res.age;
        });
    }
}

submit.addEventListener("click",call)