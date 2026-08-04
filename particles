// =====================================================
// PARTICLES.JS
// =====================================================

const canvas = document.getElementById("particles");
const ctx = canvas.getContext("2d");

let width;
let height;

let particles = [];

const mouse = {

    x: -9999,
    y: -9999,
    radius: 160

};

// -----------------------------------------------------

function resize(){

    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;

}

resize();

window.addEventListener("resize", resize);

// -----------------------------------------------------

class Particle{

    constructor(){

        this.reset();

        this.x = Math.random() * width;
        this.y = Math.random() * height;

    }

    reset(){

        this.x = Math.random() * width;
        this.y = Math.random() * height;

        this.vx = (Math.random() - .5) * .35;
        this.vy = (Math.random() - .5) * .35;

        this.radius = Math.random() * 2 + 1;

        this.alpha = Math.random() * .6 + .2;

    }

    update(){

        this.x += this.vx;
        this.y += this.vy;

        if(this.x < 0 || this.x > width){

            this.vx *= -1;

        }

        if(this.y < 0 || this.y > height){

            this.vy *= -1;

        }

        const dx = this.x - mouse.x;
        const dy = this.y - mouse.y;

        const distance = Math.sqrt(dx*dx + dy*dy);

        if(distance < mouse.radius){

            const force = (mouse.radius - distance) / mouse.radius;

            const angle = Math.atan2(dy,dx);

            this.x += Math.cos(angle) * force * 4;
            this.y += Math.sin(angle) * force * 4;

        }

    }

    draw(){

        ctx.beginPath();

        ctx.fillStyle =
            `rgba(255,255,255,${this.alpha})`;

        ctx.shadowBlur = 15;
        ctx.shadowColor = "#4fd8ff";

        ctx.arc(
            this.x,
            this.y,
            this.radius,
            0,
            Math.PI*2
        );

        ctx.fill();

        ctx.shadowBlur = 0;

    }

}

// -----------------------------------------------------

const COUNT = 180;

for(let i=0;i<COUNT;i++){

    particles.push(new Particle());

}

// -----------------------------------------------------

function connect(){

    for(let a=0;a<particles.length;a++){

        for(let b=a+1;b<particles.length;b++){

            const dx =
                particles[a].x -
                particles[b].x;

            const dy =
                particles[a].y -
                particles[b].y;

            const dist =
                Math.sqrt(dx*dx + dy*dy);

            if(dist < 120){

                const opacity =
                    (120-dist)/120;

                ctx.beginPath();

                ctx.strokeStyle =
                    `rgba(100,180,255,${
                        opacity*.18
                    })`;

                ctx.lineWidth = 1;

                ctx.moveTo(
                    particles[a].x,
                    particles[a].y
                );

                ctx.lineTo(
                    particles[b].x,
                    particles[b].y
                );

                ctx.stroke();

            }

        }

    }

}

// -----------------------------------------------------

function animate(){

    ctx.clearRect(
        0,
        0,
        width,
        height
    );

    particles.forEach(p=>{

        p.update();
        p.draw();

    });

    connect();

    requestAnimationFrame(animate);

}

animate();

// -----------------------------------------------------

window.addEventListener("mousemove",e=>{

    mouse.x = e.clientX;
    mouse.y = e.clientY;

});

window.addEventListener("mouseleave",()=>{

    mouse.x = -9999;
    mouse.y = -9999;

});

// -----------------------------------------------------

window.addEventListener("click",(e)=>{

    for(let i=0;i<12;i++){

        particles.push({

            x:e.clientX,
            y:e.clientY,

            vx:(Math.random()-.5)*8,
            vy:(Math.random()-.5)*8,

            radius:2+Math.random()*4,

            alpha:1,

            life:120,

            update(){

                this.x += this.vx;
                this.y += this.vy;

                this.life--;

                this.alpha =
                    this.life/120;

            },

            draw(){

                ctx.beginPath();

                ctx.fillStyle=
                    `rgba(0,220,255,${this.alpha})`;

                ctx.arc(
                    this.x,
                    this.y,
                    this.radius,
                    0,
                    Math.PI*2
                );

                ctx.fill();

            }

        });

    }

});

// -----------------------------------------------------

setInterval(()=>{

    particles = particles.filter(p=>{

        if(p.life !== undefined){

            p.update();

            return p.life > 0;

        }

        return true;

    });

},16);

// =====================================================
// END
// =====================================================
