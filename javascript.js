window.addEventListener("load", init);

function ID(elem) {
    return document.getElementById(elem);
}

function CLASS(elem) {
    return document.getElementsByClassName(elem);
}
function $(elem) {
    return document.querySelectorAll(elem);
}

var szimbolum = "X";
var lepesek = 1;
var lepeslista = [];
function generalas(){
    var txt = "";
    for (let index = 0; index < 9; index++) {
        txt +=`<div id="${index}"><p></p></div>`;
    }
    ID("generalas").innerHTML=txt;
    for (let index = 0; index < 9; index++) {    
        ID(index).addEventListener("click",letetel)
    }
}
function init() {
    generalas();
}
function letetel(){
    leptetes();
    console.log(event.target.id);
    var kattintott = event.target.id;
    nyerte();
    lepeslista.push(kattintott);
    ID(kattintott).innerHTML="<p>"+szimbolum+"</p>"
    ID(kattintott).removeEventListener("click",letetel)
    ID(kattintott).style.background="lightgray";
}
function leptetes(){  
    if (lepesek % 2 == 1){
        szimbolum = "X";
        lepesek++;
    }else{
        szimbolum = "O";
        lepesek++;
    }
}
function nyerte(){
    for (let index = 0; index < lepeslista.length; index++) {
    }
}