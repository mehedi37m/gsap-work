<!-- GSAP Libraries -->
<script src="https://cdn.jsdelivr.net/npm/gsap@3.13.0/dist/gsap.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/gsap@3.13.0/dist/ScrollTrigger.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/gsap@3.13.0/dist/SplitText.min.js"></script>


let box = document.querySelector("body");

Object.assign(box.style, {
 overflow-x: hidden;
});





window.addEventListener("wheel",function(dets){

if(dets.deltaY>0){
gsap.to(".marqure", {
  x:"-200%",   
  duration: 2,
  repeat: -1,
  ease: "none"
});

gsap.to(".dic-img", {
  rotate:180
});



}else{
gsap.to(".marqure", {
   x:"0%",   
  duration: 2,
  repeat: -1,
  ease: "none"
});
gsap.to(".dic-img", {
  rotate:0
});

}

});





var menu = document.querySelector(".nav-menu"); 
var cross = document.querySelector(".cross"); 
var tl = gsap.timeline(); 

tl.to(".full-div", {
right:"0",
duration: 0.6, }); 

tl.from(".drop-link",{
x:150, duration: 0.5,
stagger:0.2, 
opacity:0 });

tl.pause(); 

menu.addEventListener("click",function(){
tl.play() 
}); 

cross.addEventListener("click",function(){
tl.reverse() 
}) 





/* ============================
   Register Plugins
============================ */
gsap.registerPlugin(ScrollTrigger, SplitText);

/* ============================
   Marquee Animation
============================ */

/* ============================
   SplitText Animation (Hero Text)
============================ */
let split1 = SplitText.create(".animated-text", { type: "words, chars" });

gsap.from(split1.chars, {
  duration: 1,
  y: 100,
  opacity: 0,
  stagger: 0.15
});

/* ============================
   Horizontal Scroll Head
============================ */
gsap.to(".scroll-head", {
  x: "-90", // FIXED
  scrollTrigger: {
    trigger: ".scroll-container-2",
    start: "top 0%",
    end: "top -150%",
    scrub: 2,
    pin: true,
    scroller: "body"
  }
});

/* ============================
   Navbar Menu Animation
============================ */


/* ============================
   SVG String Effect
============================ */
const string = document.querySelector(".string");
const finalPath = `M 10 100 Q 600 100 1190 100`;

string.addEventListener("mousemove", e => {
  const path = `M 10 100 Q ${e.x} ${e.y} 1190 100`;
  gsap.to("svg path", {
    attr: { d: path },
    duration: 0.3,
    ease: "power3.out"
  });
});

string.addEventListener("mouseleave", () => {
  gsap.to("svg path", {
    attr: { d: finalPath },
    duration: 1.5,
    ease: "elastic.out(1,0.2)"
  });
});

/* ============================
   Cursor Follow Effect
============================ */
const cursor = document.querySelector(".cursor");

document.body.addEventListener("mousemove", e => {
  gsap.to(cursor, {
    x: e.x,
    y: e.y,
    duration: 0.1
  });
});

/* ============================
   Text Section Scroll Animations
============================ */
gsap.from(".text-div", {
  scrollTrigger: {
    trigger: ".text-section",
    start: "top 20%",
    end: "top 50%",
    scrub: 2
  },
  scale: 0,
  opacity: 0,
  rotation: 720,
  duration: 2,
  delay: 0.25
});

gsap.from(".text-div-2", {
  scrollTrigger: {
    trigger: ".text-section-2",
    start: "top 20%",
    end: "top 50%",
    scrub: 2
  },
  scale: 0,
  opacity: 0,
  rotation: -720,
  duration: 2,
  delay: 0.25
});

/* ============================
   Features Cards
============================ */
gsap.from("#features-card-1", {
  scrollTrigger: {
    trigger: "#hero-sec",
    start: "top 30%"
  },
  x: -50,
  duration: 2,
  delay: 0.25
});

gsap.from("#features-card-2", {
  scrollTrigger: {
    trigger: "#hero-sec",
    start: "top 40%"
  },
  y: 50,
  duration: 2,
  delay: 0.25
});

gsap.from("#features-card-3", {
  scrollTrigger: {
    trigger: "#hero-sec",
    start: "top 20%"
  },
  y: -50,
  duration: 2,
  delay: 0.25
});

/* ============================
   Intro + Middle Timelines
============================ */
function intro() {
  return gsap.timeline()
    .from("#grid-box-sec", { x: 200, opacity: 0, delay: 0.5 })
    .from(".card-box", { y: -20, opacity: 0 })
    .from(".card-box-2", { y: -20, opacity: 0 })
    .from(".card-box-3", { y: -20, opacity: 0 });
}

function middle() {
  return gsap.timeline()
    .from("#hero-sec", { x: -20, opacity: 0, duration: 1, delay: 0.25 })
    .from("#head-text", {
      scrollTrigger: {
        trigger: "#hero-sec #features-card-3",
        start: "top 60%"
      },
      x: 50,
      opacity: 0
    });
}

// Master timeline
let master = gsap.timeline();
master.add(intro()).add(middle());

/* ============================
   DOMContentLoaded Animations
============================ */
window.addEventListener("DOMContentLoaded", () => {
  gsap.from(".rabit-pic", {
    duration: 1,
    x: -200,
    opacity: 0,
    ease: "power2.out",
    repeat: -1,
    yoyo: true
  });

  gsap.from(".rotate-image", {
    duration: 10,
    rotation: 360,
    opacity: 1,
    repeat: -1,
    delay: 0.25
  });
});

/* ============================
   SplitText Animation (Heading)
============================ */
let split2 = SplitText.create(".heading-text-2", { type: "words, chars" });

gsap.from(split2.chars, {
  duration: 1,
  y: 100,
  autoAlpha: 0,
  stagger: 0.05
});

