var suma=0,num2=0;
const Botonesac=document.querySelector('.ac');
const Botonesplus=document.querySelector('.Aster');
const Botonesporc=document.querySelector('.Porc');
const BotonesEntre=document.querySelector('.Bet');
const Botones7=document.querySelector('.seven');
const Botones8=document.querySelector('.eight');
const Botones9=document.querySelector('.nine');
const BotonesX=document.querySelector('.Por');
const Botones4=document.querySelector('.four');
const Botones5=document.querySelector('.five');
const Botones6=document.querySelector('.six');
const Botonesmenus=document.querySelector('.MINUS');
const Botones1=document.querySelector('.one');
const Botones2=document.querySelector('.two');
const Botones3=document.querySelector('.three');
const BotonesMas=document.querySelector('.PLUS');
const Botones0=document.querySelector('.Buttons-0');
const BotonesPunto=document.querySelector('.punto');
const BotonesEqual=document.querySelector('.equal');
const Blank1=document.querySelector('Text');


Botonesac.addEventListener('click',ac);
Botonesplus.addEventListener('click',ac);
Botonesporc.addEventListener('click',ac);
BotonesEntre.addEventListener('click',ac);
Botones7.addEventListener('click',ac);
Botones8.addEventListener('click',ac);
Botones9.addEventListener('click',ac);
BotonesX.addEventListener('click',ac);
Botones4.addEventListener('click',ac);
Botones5.addEventListener('click',ac);
Botones6.addEventListener('click',ac);
Botonesmenus.addEventListener('click',ac);
Botones1.addEventListener('click',ac);
Botones2.addEventListener('click',ac);
Botones3.addEventListener('click',ac);
BotonesMas.addEventListener('click',ac);
Botones0.addEventListener('click',ac);
BotonesPunto.addEventListener('click',ac);
BotonesEqual.addEventListener('click',ac);

const ac =()=>{
    document.getElementById('Text').innerHTML="0";
}



