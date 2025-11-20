
document.addEventListener("DOMContentLoaded",()=>{
  const btn=document.getElementById("theme-toggle");
  btn.addEventListener("click",()=>{
    document.body.classList.toggle("light");
  });
});
