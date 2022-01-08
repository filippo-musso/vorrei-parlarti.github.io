let intro = document.querySelector(".intro");
let text = document.querySelector(".text-header");
let textSpan = document.querySelectorAll(".text");

/* Intro Function */
window.addEventListener('DOMContentLoaded', ()=>{
  setTimeout(()=>{
    textSpan.forEach((span, idx)=>{
      setTimeout(()=>{
        span.classList.add("active");
      }, (idx + 1) * 400)
    });

    setTimeout(()=>{
      textSpan.forEach((span, idx)=>{
        setTimeout(()=>{
          span.classList.remove("active");
          span.classList.add("fade");
        }, (idx + 1) * 50)
      })
    }, 2000);

    setTimeout(()=>{
      intro.style.top = "-100vh";
    }, 2300)
  }, 1000)
});

/* Calcolate vh function */
function vh(v) {
  var h = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
  return (v * h) / 100;
}

/* First button scroll function */
let btnFirst = document.querySelector(".button")

btnFirst.addEventListener("click", ()=>{
   window.scrollTo({
    top: vh(100),
    left: 0, 
    behavior: "smooth"
   });
})