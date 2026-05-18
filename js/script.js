/* MENU MOBILE */

const burger = document.querySelector(".hamburger");
const nav = document.querySelector(".nav-links");

burger.addEventListener("click", ()=>{
nav.classList.toggle("active");
});

/* BACK TO TOP */

const topBtn = document.getElementById("topBtn");

window.onscroll = ()=>{
if(document.documentElement.scrollTop>300){
topBtn.style.display="block";
}else{
topBtn.style.display="none";
}
};

topBtn.onclick=()=>{
window.scrollTo({top:0,behavior:"smooth"});
};

/* COUNTER */

const counters=document.querySelectorAll(".counter");

counters.forEach(counter=>{
counter.innerText="0";

const update=()=>{
const target=+counter.dataset.target;
const c=+counter.innerText;

const inc=target/200;

if(c<target){
counter.innerText=Math.ceil(c+inc);
setTimeout(update,10);
}
else{
counter.innerText=target;
}
};
update();
});

/* FORM VALIDATION */

const form=document.querySelector("#contactForm");

if(form){
form.addEventListener("submit",(e)=>{
e.preventDefault();

let email=form.email.value;

if(!email.includes("@")){
alert("Email inválido");
return;
}

alert("Mensagem enviada com sucesso!");
form.reset();
});
}
