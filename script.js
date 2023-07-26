let display=document.getElementById('display');
let btnDec=document.getElementById('btnDec');
let btnRes=document.getElementById('btnRes');
let btnInc=document.getElementById('btnInc');

let value=0;

btnDec.addEventListener("click",()=>{
    value=value-1;
display.textContent=value;
});

btnRes.addEventListener("click",()=>{
    value=0;
display.textContent=value;
});

btnInc.addEventListener("click",()=>{
    value=value+1;
display.textContent=value;
});