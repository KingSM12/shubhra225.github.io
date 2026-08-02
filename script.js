/* ===========================================
   TYPING ANIMATION
=========================================== */

new Typed("#typing", {

    strings: [

        "Java Developer",

        "IT Undergraduate",

        "AI Enthusiast",

        "Problem Solver",

        "Web Developer"

    ],

    typeSpeed: 70,

    backSpeed: 40,

    backDelay: 1800,

    loop: true

});


/* ===========================================
   LOADING SCREEN
=========================================== */

window.addEventListener("load", () => {

    setTimeout(() => {

        const loader = document.getElementById("loader");

        loader.style.opacity = "0";

        loader.style.visibility = "hidden";

        loader.style.transition = "0.8s";

    }, 1200);

});


/* ===========================================
   SMOOTH NAVIGATION
=========================================== */

document.querySelectorAll("nav a").forEach(link => {

    link.addEventListener("click", function(e) {

        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));

        target.scrollIntoView({

            behavior: "smooth"

        });

    });

});


/* ===========================================
   HEADER EFFECT
=========================================== */

const header = document.querySelector("header");

window.addEventListener("scroll", () => {

    if(window.scrollY > 80){

        header.style.background = "rgba(5,10,20,.95)";

        header.style.boxShadow = "0 8px 30px rgba(0,0,0,.35)";

    }

    else{

        header.style.background = "rgba(0,0,0,.20)";

        header.style.boxShadow = "none";

    }

});


/* ===========================================
   SCROLL REVEAL
=========================================== */

const observer = new IntersectionObserver(entries=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.classList.add("show");

}

});

},{
threshold:.2
});

document.querySelectorAll("section").forEach(sec=>{

sec.classList.add("hidden");

observer.observe(sec);

});


/* ===========================================
   FLOATING IMAGE
=========================================== */

const image = document.querySelector(".hero-right img");

let angle = 0;

setInterval(()=>{

angle += 0.02;

image.style.transform =

`translateY(${Math.sin(angle)*10}px)`;

},20);


/* ===========================================
   PARALLAX EFFECT
=========================================== */

window.addEventListener("mousemove",(e)=>{

let x = (window.innerWidth/2 - e.pageX)/60;

let y = (window.innerHeight/2 - e.pageY)/60;

image.style.filter="drop-shadow("+x+"px "+y+"px 30px rgba(0,212,255,.35))";

});


/* ===========================================
   ACTIVE NAVIGATION
=========================================== */

const sections=document.querySelectorAll("section");
const navLinks=document.querySelectorAll("nav a");

window.addEventListener("scroll",()=>{

let current="";

sections.forEach(section=>{

const top=section.offsetTop-120;

if(pageYOffset>=top){

current=section.getAttribute("id");

}

});

navLinks.forEach(link=>{

link.classList.remove("active");

if(link.getAttribute("href")==="#"+current){

link.classList.add("active");

}

});

});


/* ===========================================
   SCROLL TO TOP BUTTON
=========================================== */

const topBtn=document.createElement("button");

topBtn.innerHTML="↑";

topBtn.id="topBtn";

document.body.appendChild(topBtn);

topBtn.style.cssText=`

position:fixed;

right:30px;

bottom:30px;

width:55px;

height:55px;

border:none;

border-radius:50%;

background:#00D4FF;

font-size:22px;

font-weight:bold;

cursor:pointer;

display:none;

z-index:999;

box-shadow:0 10px 25px rgba(0,0,0,.3);

transition:.3s;

`;

window.addEventListener("scroll",()=>{

if(window.scrollY>300){

topBtn.style.display="block";

}

else{

topBtn.style.display="none";

}

});

topBtn.onclick=()=>{

window.scrollTo({

top:0,

behavior:"smooth"

});

};


/* ===========================================
   CONSOLE MESSAGE
=========================================== */

console.log("%cWelcome Recruiter 👋","font-size:24px;color:#00D4FF;font-weight:bold");

console.log("%cDesigned & Developed by Shubhradip Mazumder","font-size:18px;color:white;");
