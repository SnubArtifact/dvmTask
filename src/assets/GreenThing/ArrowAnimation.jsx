import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

function ArrowAnimation() {
  const arrow = document.getElementById("arrowlogo");
  const progressBar = document.getElementById("progress");
  
  if (!arrow || !progressBar) {
    console.error("Elements not found");
    return;
  }

  
  const arrowAnim = gsap.to(arrow, {
    scrollTrigger: {
        trigger:document.body,
        triggerActions:"play none play reset"
    },
    y: 450,
    duration: 1,
    ease: "power1.inOut",
    repeat: -1,
    yoyo: true,
    paused: true 
  });

  
  const progressObserver = new ResizeObserver(() => {
    const currentWidth = progressBar.offsetWidth / progressBar.parentElement.offsetWidth * 100;
    
    
    if (currentWidth > 0 && arrowAnim.paused()) {
      arrowAnim.play();
    }


    if (currentWidth >= 2.69) {
      gsap.to(arrow, {

        opacity: 0,
        duration: 0.3,
        onComplete: () => {
          arrowAnim.pause(); 
        }


      });
    }

    if(currentWidth == 0){
      gsap.to(arrow, {
        opacity: 1,
        duration: 2,
        onComplete: () => {
          arrowAnim.resume(); 
        }
      });
    }
  });

  progressObserver.observe(progressBar);
}


if (document.readyState === "complete" || document.readyState === "interactive") {
  setTimeout(ArrowAnimation, 100);
} else {
  document.addEventListener("DOMContentLoaded", ArrowAnimation);
}
