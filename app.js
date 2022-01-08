let intro = document.querySelector(".intro");
let text = document.querySelector(".text-header");
let textSpan = document.querySelectorAll(".text");
let textAfter = document.querySelector(".text-after")

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
})