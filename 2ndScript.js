<script src="https://cdn.jsdelivr.net/npm/gsap@3.13.0/dist/gsap.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/gsap@3.13.0/dist/ScrollTrigger.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/gsap@3.13.0/dist/SplitText.min.js"></script>


var cl = gsap.timeline()

cl.from("#testi-1", {
 scrollTrigger:{
    trigger:"#testi-1",
    scroller : "body",
    start:"top 90%",
    markers:true,
  //  end:"top -80%",
    scrub:1
  },
y:100,
opacity:0,
duration: 0.5,

}); 

cl.from("#testi-2", {
 scrollTrigger:{
    trigger:"#testi-2",
    scroller : "body",
    start:"top 90%",
   // end:"top -80%",
    scrub:1
  },
y:100,
opacity:0,
duration: 0.5,

}); 

cl.from("#testi-3", {
 scrollTrigger:{
    trigger:"#testi-3",
    scroller : "body",
    start:"top 90%",
  //  end:"top -60%",
    scrub:1
  },
y:100,
opacity:0,

duration: 1,

}); 

cl.from("#testi-4", {
 scrollTrigger:{
    trigger:"#testi-4",
    scroller : "body",
    start:"top 90%",
   // end:"top -60%",
    scrub:1
  },
y:100,
opacity:0,

duration: 1,

}); 

cl.from("#testi-5", {
 scrollTrigger:{
    trigger:"#testi-5",
    scroller : "body",
    start:"top 90%",
  //  end:"top -60%",
    scrub:1
  },
y:100,
opacity:0,

duration: 1,

}); 




var tl2 = gsap.timeline({
  scrollTrigger:{
    trigger:"#About",
    scroller : "body",
    start:"top 90%",
    end:"top -70%",
    scrub:1
  }
})

tl2.from("#tag-left", {
x:-30,
opacity:0,
duration: 0.5,
},"st1"); 

tl2.from("#tag-right", {
x:30,
opacity:0,
duration: 0.5,
},"st1"); 

tl2.from("#tag-box3", {
x:-80,
opacity:0,
duration: 0.5,
},"st1"); 

tl2.from("#tag-box4", {
x:80,
opacity:0,
duration: 0.5,
},"st1"); 

tl2.from("#tag-box5", {
x:-80,
opacity:0,
duration: 0.5,
},"st1"); 

tl2.from("#tag-box6", {
x:80,
opacity:0,
duration: 0.5,
},"st1"); 



//section 8



var tl = gsap.timeline(); 

tl.from(".head-h1, .h4-menu, .nav-btn ", {

y:-30,
delay:1,
opacity:0,
duration: 0.6, 
stagger:0.2

}); 


var menu = document.querySelector(".nav-menu"); 
var cross = document.querySelector(".cross"); 
var tl = gsap.timeline(); 

tl.to(".full-div", {
right:"0",
duration: 0.6, }); 

tl.from(".drop-link",{
x:150, 
duration: 0.5,
stagger:0.2, 
opacity:0 });

tl.pause();

menu.addEventListener("click",function(){
tl.play() 
console.log("menu")
}); 

cross.addEventListener("click",function(){
tl.reverse() 
}) 

