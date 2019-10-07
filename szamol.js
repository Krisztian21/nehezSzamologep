"use strict";

let kiir = 0;
let feltolt = "";
let elsoSzam = 0;
let masodikSzam = 0;
let muvelet="";

function egy(){
    feltolt += 1;
    document.getElementById("ablak").value = +feltolt;
}
function ketto(){
    feltolt += 2;
    document.getElementById("ablak").value = +feltolt;
}
function harom(){
    feltolt += 3;
    document.getElementById("ablak").value = +feltolt;
}
function negy(){
    feltolt += 4;
    document.getElementById("ablak").value = +feltolt;
}
function ot(){
    feltolt += 5;
    document.getElementById("ablak").value = +feltolt;
}
function hat(){
    feltolt += 6;
    document.getElementById("ablak").value = +feltolt;
}
function het(){
    feltolt += 7;
    document.getElementById("ablak").value = +feltolt;
}
function nyolc(){
    feltolt += 8;
    document.getElementById("ablak").value = +feltolt;
}
function kilenc(){
    feltolt += 9;
    document.getElementById("ablak").value = +feltolt;
}
function nulla(){
    if(feltolt.length !=0){
        feltolt += 0;
        document.getElementById("ablak").value = +feltolt;
    } 
}
function ossz() {
    elsoSzam = +feltolt;
    feltolt = "";
    muvelet="összeadás";
    document.getElementById("ablak").value="";
    }
function kiv() {
    elsoSzam = +feltolt;
    feltolt = "";
    muvelet="kivonás";
    document.getElementById("ablak").value="";
    }
function szoroz() {
    elsoSzam = +feltolt;
    feltolt = "";
    muvelet="szorzás";
    document.getElementById("ablak").value="";
    }
function oszt() {
    elsoSzam = +feltolt;
    feltolt = "";
    muvelet="osztás";
    document.getElementById("ablak").value="";
    }
function ered() {
    masodikSzam = +feltolt;
        switch(muvelet){
            case "összeadás":
                document.getElementById("ablak").value= +elsoSzam + +masodikSzam;
                break;
            case "kivonás":
                document.getElementById("ablak").value= +elsoSzam - +masodikSzam;
                break;
            case "szorzás":
                document.getElementById("ablak").value= +elsoSzam * +masodikSzam;
                break;
            case "osztás":
                document.getElementById("ablak").value= +elsoSzam / +masodikSzam;
                break;
        }
}