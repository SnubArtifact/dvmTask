import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";


gsap.registerPlugin(ScrollTrigger);



function Animation() {


  //imgThing was duplicating but couldn't be found in html
  const allImgThings = document.querySelectorAll('#imgThing');
if (allImgThings.length > 1) {
  for (let i = 1; i < allImgThings.length; i++) {
    allImgThings[i].remove();
  }
}


//had to create elements because js wasn't able to access DOM

const elements = {
firstline: document.getElementById("firstline"),
secondline: document.getElementById("secondline"),
arrow: document.getElementById("arrowlogo"),
treeleft1: document.getElementById("treeleft1"),
treeleft2: document.getElementById("treeleft2"),
treeleft3: document.getElementById("treeleft3"),
treeRight1: document.getElementById("treeRight1"),
treeRight2: document.getElementById("treeRight2"),
treeRight3: document.getElementById("treeRight3"),
movingPath: document.getElementById("movingpath"),
greenThing: document.getElementById("greenThing"),
movingPath2: document.getElementById("movingpath2"),
movingPath3 : document.getElementById("movingpath3"),
progressBar : document.getElementById("progress"),
movingPath4 : document.getElementById("movingpath4"),
movingPath5 : document.getElementById("movingpath5")

};



//path lengths

const path2 = elements.movingPath2.querySelector('path');
const pathLength2 = path2.getTotalLength();
const path = elements.movingPath.querySelector('path');
const pathLength = path.getTotalLength();
const path3 = elements.movingPath3.querySelector('path');
const pathLength3 = path3.getTotalLength();
const path4 = elements.movingPath4.querySelector('path');
const pathLength4 = path4.getTotalLength();
const path5 = elements.movingPath5.querySelector('path');
const pathLength5 = path5.getTotalLength();





//tree animation

const treeTimeline = gsap.timeline({
  scrollTrigger: {
    trigger: "#masterdiv",
    start: "top top", 
    end: "+=300", 
    scrub: 1,
    pin:"#greenThing",
    anticipatePin: 1, 
  }
});

treeTimeline.to(elements.firstline, {
 opacity:1,
  duration: 0.2,
  ease: "bounce.out"
});

treeTimeline.to(elements.secondline, {
 opacity:1,
  duration: 0.2,
  ease: "bounce.out"
},"<");


const treesConfig = [
  { element: "#treeleft1", x: -50, scale: 0.99, delay: 0 },
  { element: "#treeRight1", x: 300, scale: 0.9, delay: 0 },
  { element: "#treeleft2", x: -40, y: 90, scale: 0.9, delay: 0.2 },
  { element: "#treeRight3", x: 600, y:70, scale: 0.99, delay: 0 },
  { element: "#treeRight2", x: 200, scale: 0.9, delay: 0.1 },
  { element: "#treeleft3", x: -200, scale: 0.9, delay: 0 }
];


treesConfig.forEach(({ element, x, y, scale, delay }) => {
  treeTimeline.to(element, {
   
    x,
    y,
    scale,
    delay,
    ease: "power2.inOut"
  }, "<"); 
});



//progress bar

 gsap.to(elements.progressBar, {
    scrollTrigger: {
      trigger: document.body, 
      start: "top top",
      end: "224% top",
      scrub: true,
    },
    width: "100%",
    ease: "none",
  });



 







// path1 animation
gsap.set(path, {
strokeDasharray: pathLength,
strokeDashoffset: pathLength,

});

gsap.to(path, {
  
strokeDashoffset: 0,
scrollTrigger: {
trigger: elements.movingPath,
start: "-20% top", 
end: "+=750", 
scrub: 1,

},
ease: "none"
});





// path2 animation
gsap.set(path2, {
strokeDasharray: pathLength2,
strokeDashoffset: pathLength2,

});

gsap.to(path2, {
strokeDashoffset:0,
scrollTrigger: {
trigger: elements.movingPath,
start: "73% top",
end: "+=1060", 
scrub: 1,

},
ease: "none"
});







//path3 animation

gsap.set(path3, {
strokeDasharray: pathLength3,
strokeDashoffset: pathLength3,

});

gsap.to(path3, {
strokeDashoffset:0,
scrollTrigger: {
trigger: elements.movingPath3,
start: "70% top", 
end: "+=700", 
scrub: 1,

},
ease: "none"
});


//path4 animation
gsap.set(path4, {
strokeDasharray: pathLength4,
strokeDashoffset: pathLength4,

});

gsap.to(path4, {
strokeDashoffset:0,
scrollTrigger: {
trigger: elements.movingPath4,
start: "-5% top", 
end: "+=1600", 
scrub: 1,

},
ease:"none"
})



//path5 animation
gsap.set(path5, {
strokeDasharray: pathLength5,
strokeDashoffset: pathLength5,

});

gsap.to(path5, {
strokeDashoffset:0,
scrollTrigger: {
trigger: elements.movingPath5,
start: "-10% top", 
end: "+=2000", 
scrub: 1,

},
ease:"none"
})








gsap.from("#firstparatext",{
  scrollTrigger:{
    trigger:elements.movingPath5,
    start:"-8% top",
    end:"0% top",
    scrub:1,
  },
  opacity:0
});

gsap.from("#secondparatext",{
  scrollTrigger:{
    trigger:elements.movingPath5,
    start:"-3% top",
    end:"5% top",
    scrub:1,
  },
  opacity:0
})


gsap.to("#paraimg",{
  y:"-0.8%",
  scrollTrigger:{
    trigger:elements.movingPath5,
    start:"0% top",
    end:"14% top",
    scrub:1.5,

  },
  
})





//yellow section animation


const yellow = gsap.timeline({
  scrollTrigger: {
    trigger: document.body,
    start: "65% top",
    end: "115% top", 
    scrub: true,
    
    
    pin: "#greenThing",
    
   
    anticipatePin: 1,
    toggleActions: "play none none reverse"
  }
});


yellow.to("#hundred", {
  opacity: 1,
  duration: 4,
  y: "-110%"
});

yellow.from("#clock-svg", {
  opacity: 0,
  duration: 3
}, 0)


yellow.to("#watchpointer",{
  opacity:1,
  duration:2
},7)



yellow.from("#text3", {
  opacity: 0,
  duration: 1
},"+=3")

yellow.from("#numberlarge-svg", {
  opacity: 0,
  duration: 2
},"+=5")

yellow.to("#imgThing", {
  y: "35%",
  duration: 4,
}, "+=12");


yellow.to("#text3", {
  color: "#d0fffe"
}, "+=0.7");

yellow.to("#numberlarge", {
  fill: "#d0fffe"
}, "<");

yellow.to("#watchpointer", {
  fill: "#d0fffe"
}, "<+=0.3");

yellow.to("#watch", {
  fill: "#d0fffe"
}, "<");

yellow.to("#watchface", {
  fill: "rgba(244, 250, 252, 0)"
}, "<+=0.3");

yellow.to("#text2", {
  color: "#d0fffe"
}, "<+=0.2");

yellow.to("#hundred", {
  color: "#d0fffe"
}, "<");

yellow.to("#text4", {
  opacity: 1,
  color: "#d0fffe"
}, "<-=0.7");









   




// background color timeline
const colorTimeline = gsap.timeline({
  scrollTrigger: {
    trigger: document.body,
    start: "87 top",
    end:"+=663", 
    scrub: 1,
    
  }
});


colorTimeline
  .fromTo(elements.greenThing, 
    { backgroundColor: "#47b27a" },
    { backgroundColor: "#12735e", end:"+=250" }
  )
  
  .to(elements.greenThing, { backgroundColor: "#e6ce00", end:"+=500" });


}







// initialize animations
if (document.readyState === "complete" || document.readyState === "interactive") {
setTimeout(Animation, 100);
} else {
document.addEventListener("DOMContentLoaded", Animation);
}