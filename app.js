/* Intro Function */
let intro = document.querySelector(".intro");
let text = document.querySelector(".text-header");
let textSpan = document.querySelectorAll(".text");

/* When content of page loads */
window.addEventListener('DOMContentLoaded', ()=>{
  /* Add active class to the elements to make them rise */
  setTimeout(()=>{
    textSpan.forEach((span, idx)=>{
      setTimeout(()=>{
        span.classList.add("active");
      }, (idx + 1) * 400)
    });

    /* Replace the class "active" with the class "fade" to make the element go away */
    setTimeout(()=>{
      textSpan.forEach((span, idx)=>{
        setTimeout(()=>{
          span.classList.remove("active");
          span.classList.add("fade");
        }, (idx + 1) * 50)
      })
    }, 2000);

    /* Makes the colored background go away too */
    setTimeout(()=>{
      intro.style.top = "-100vh";
    }, 2300)
  }, 1000)
});

// /* Main button scroll function */
function smoothScroll(target, duration) {
  var target = document.querySelector(target);
  var targetPosition = target.getBoundingClientRect().top - 29; /* Subtract the margin of the element */  
  var startPosition = window.pageYOffset;
  var distance = targetPosition - startPosition;
  var startTime = null;

  function animation(currentTime) {
    if (startTime === null) {
      startTime = currentTime;
    }
    var timeElapsed = currentTime - startTime;
    var run = easeInOut(timeElapsed, startPosition, distance, duration);
    
    window.scrollTo(0, run);
    if (timeElapsed < duration) {
      requestAnimationFrame(animation);
    }
  }

  function easeInOut (t, b, c, d) {
    t /= d/2;
    if (t < 1) return c/2*t*t*t*t + b;
    t -= 2;
    return -c/2 * (t*t*t*t - 2) + b;
  };

  requestAnimationFrame(animation);
}

let btn = document.querySelector(".button");

btn.addEventListener("click", function(){
  smoothScroll("#first", 1250);
})
