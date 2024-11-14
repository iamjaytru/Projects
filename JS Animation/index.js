
const sidebarEl = document.querySelector(".sidebar");
const btnEl = document.querySelector("button");

btnEl.addEventListener("click", ()=>{
  sidebarEl.classList.toggle("hide");
});
