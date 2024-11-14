
const bgImgEl = document.getElementById("bg-image");

window.addEventListener("scroll", ()=>{
    updateImage();
})

  function updateImage(){
      bgImgEl.style.opacity = 1 - window.scrollY / 800;
      bgImgEl.style.backgroundSize = 160 - window.scrollY / 12 + "%";
  }
  