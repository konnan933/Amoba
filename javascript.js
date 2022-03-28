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
var nev_1 =""
var nev_2 =""
var szimbolum = "X";
var lepesek = 1;
var lepeslista = [];
const nyeroHelyzetek = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

function nyert_E(){
    for (let index = 0; index < nyeroHelyzetek.length; index++) {
        const nyerHelyzet = nyeroHelyzetek[index];
        var a = (this).nyerHelyzet[0]('id');
        var b = (this).nyerHelyzet[1]('id');
        var c = (this).nyerHelyzet[2]('id');
        if(a.innerHTML == b.innerHTML && b.innerHTML == c.innerHTML){
            
            return true;
        }
        console.log("asda")
    }
}

function generalas(){
    var txt = "";
    for (let index = 0; index < 9; index++) {
        txt +=`<div  id="${index}"><p></p></div>`;
    }
    ID("generalas").innerHTML=txt;
    for (let index = 0; index < 9; index++) {    
        ID(index).addEventListener("click",letetel)
    }
}
function init() {
    generalas();
    nevadas();
    nyert_E();
}
function letetel(){
    leptetes();
    console.log(event.target.id);
    var kattintott = event.target.id;
    lepeslista.push(kattintott);
    ID(kattintott).innerHTML="<p>"+szimbolum+"</p>"
    ID(kattintott).removeEventListener("click",letetel)
    ID(kattintott).style.background="lightgray";
}
function nevadas(){
    document.getElementById("hajra").addEventListener("click", function () {
        nev_1 = nev1Submit();
        nev_2 = nev2Submit();
      });
    console.log(nev_1)
    console.log(nev_2)
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
function nev1Submit(){
    return document.getElementById("j1");
}
function nev2Submit(){
    return document.getElementById("j2");
}