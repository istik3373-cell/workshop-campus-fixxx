// SCROLL KE WORKSHOP

document.getElementById("exploreBtn").addEventListener("click",()=>{

document.getElementById("workshop").scrollIntoView({

behavior:"smooth"

});

});

// BUTTON DAFTAR

document.querySelectorAll(".joinBtn").forEach(button=>{

button.addEventListener("click",()=>{

window.location.href="daftar.html";

});

});

// ANIMASI CARD

const cards=document.querySelectorAll(".card");

window.addEventListener("scroll",()=>{

cards.forEach(card=>{

const top=card.getBoundingClientRect().top;

if(top < window.innerHeight-100){

card.classList.add("show");

}

});

});

// COUNTER

const counters=document.querySelectorAll(".counter");

counters.forEach(counter=>{

counter.innerText='0';

const updateCounter=()=>{

const target=+counter.getAttribute('data-target');

const current=+counter.innerText;

const increment=target/100;

if(current<target){

counter.innerText=Math.ceil(current+increment);

setTimeout(updateCounter,20);

}else{

counter.innerText=target;

}

};

updateCounter();

});