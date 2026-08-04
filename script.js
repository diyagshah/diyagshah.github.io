// =====================================================
// MAIN.JS
// =====================================================

gsap.registerPlugin(ScrollTrigger);

// -----------------------------------------------------
// HERO INTRO
// -----------------------------------------------------

gsap.from(".logo",{
    opacity:0,
    y:-40,
    duration:1,
    ease:"power3.out"
});

gsap.from("nav a",{

    opacity:0,
    y:-30,
    duration:0.8,
    stagger:0.1,
    delay:.2,
    ease:"power3.out"

});

gsap.from(".eyebrow",{

    opacity:0,
    y:40,
    duration:1,
    delay:.3

});

gsap.from("h1",{

    opacity:0,
    y:80,
    duration:1.2,
    delay:.5,
    ease:"power4.out"

});

gsap.from(".hero-content p",{

    opacity:0,
    y:40,
    duration:1,
    delay:.8

});

gsap.from(".buttons a",{

    opacity:0,
    y:50,
    duration:1,
    stagger:.2,
    delay:1

});

// -----------------------------------------------------
// TYPED TEXT
// -----------------------------------------------------

const gradient = document.querySelector(".gradient-text");

if(gradient){

    gradient.innerHTML =
        '<span id="typed"></span>';

    new Typed("#typed",{

        strings:[
            "Beautiful",
            "Fast",
            "Interactive",
            "Elegant",
            "Modern"
        ],

        typeSpeed:70,
        backSpeed:40,
        backDelay:1800,
        loop:true

    });

}

// -----------------------------------------------------
// SCROLL REVEALS
// -----------------------------------------------------

gsap.utils.toArray("section").forEach(section=>{

    gsap.from(section,{

        opacity:0,
        y:100,

        duration:1,

        ease:"power3.out",

        scrollTrigger:{

            trigger:section,

            start:"top 80%"

        }

    });

});

// -----------------------------------------------------
// PROJECT CARDS
// -----------------------------------------------------

VanillaTilt.init(

    document.querySelectorAll(".card"),

    {

        max:12,

        speed:400,

        glare:true,

        "max-glare":0.35,

        scale:1.03

    }

);

// -----------------------------------------------------
// SKILLS
// -----------------------------------------------------

document.querySelectorAll(".skill").forEach(skill=>{

    skill.addEventListener("mouseenter",()=>{

        gsap.to(skill,{

            rotation:gsap.utils.random(-6,6),

            duration:.25

        });

    });

    skill.addEventListener("mouseleave",()=>{

        gsap.to(skill,{

            rotation:0,

            duration:.35

        });

    });

});

// -----------------------------------------------------
// BUTTON GLOW
// -----------------------------------------------------

document.querySelectorAll(".primary,.secondary")
.forEach(button=>{

    button.addEventListener("mousemove",e=>{

        const rect=button.getBoundingClientRect();

        const x=e.clientX-rect.left;

        const y=e.clientY-rect.top;

        button.style.setProperty("--x",`${x}px`);
        button.style.setProperty("--y",`${y}px`);

    });

});

// -----------------------------------------------------
// CUSTOM CURSOR
// -----------------------------------------------------

const cursor=document.querySelector(".cursor");

window.addEventListener("mousemove",e=>{

    gsap.to(cursor,{

        x:e.clientX,

        y:e.clientY,

        duration:.18,

        ease:"power3.out"

    });

});

document.querySelectorAll("a,.card,.skill").forEach(item=>{

    item.addEventListener("mouseenter",()=>{

        cursor.classList.add("grow");

    });

    item.addEventListener("mouseleave",()=>{

        cursor.classList.remove("grow");

    });

});

// -----------------------------------------------------
// PARALLAX BACKGROUND
// -----------------------------------------------------

const blobs=document.querySelectorAll(".gradient");

window.addEventListener("mousemove",(e)=>{

    const x=(e.clientX/window.innerWidth)-0.5;
    const y=(e.clientY/window.innerHeight)-0.5;

    blobs.forEach((blob,index)=>{

        gsap.to(blob,{

            x:x*70*(index+1),
            y:y*70*(index+1),

            duration:2,

            ease:"power2.out"

        });

    });

});

// -----------------------------------------------------
// NAVBAR BLUR
// -----------------------------------------------------

const header=document.querySelector("header");

window.addEventListener("scroll",()=>{

    if(window.scrollY>100){

        header.style.background="rgba(5,8,22,.75)";
        header.style.backdropFilter="blur(30px)";
        header.style.borderColor="rgba(255,255,255,.18)";

    }else{

        header.style.background="rgba(255,255,255,.05)";
        header.style.borderColor="rgba(255,255,255,.10)";

    }

});

// -----------------------------------------------------
// MAGNETIC BUTTONS
// -----------------------------------------------------

document.querySelectorAll(".primary,.secondary").forEach(button=>{

    button.addEventListener("mousemove",(e)=>{

        const rect=button.getBoundingClientRect();

        const x=e.clientX-(rect.left+rect.width/2);

        const y=e.clientY-(rect.top+rect.height/2);

        gsap.to(button,{

            x:x*.25,

            y:y*.25,

            duration:.3

        });

    });

    button.addEventListener("mouseleave",()=>{

        gsap.to(button,{

            x:0,
            y:0,
            duration:.45,
            ease:"elastic.out(1,0.3)"

        });

    });

});

// -----------------------------------------------------
// SCROLL PROGRESS BAR
// -----------------------------------------------------

const progress=document.createElement("div");

progress.style.position="fixed";
progress.style.left="0";
progress.style.top="0";
progress.style.height="4px";
progress.style.background="linear-gradient(90deg,#00d2ff,#8b5cf6)";
progress.style.zIndex="999999";
progress.style.width="0%";

document.body.appendChild(progress);

window.addEventListener("scroll",()=>{

    const total=
        document.body.scrollHeight-window.innerHeight;

    const amount=(window.scrollY/total)*100;

    progress.style.width=amount+"%";

});

// -----------------------------------------------------
// RANDOM FLOATING ANIMATION
// -----------------------------------------------------

gsap.utils.toArray(".skill,.card").forEach(item=>{

    gsap.to(item,{

        y:gsap.utils.random(-8,8),

        duration:gsap.utils.random(3,6),

        repeat:-1,

        yoyo:true,

        ease:"sine.inOut"

    });

});

// =====================================================
// END
// =====================================================
