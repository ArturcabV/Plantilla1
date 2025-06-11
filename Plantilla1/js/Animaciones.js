function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
      rect.top <= window.innerHeight &&
      rect.bottom >= 0
    );
  }
  
  const animadas = document.querySelectorAll(".fadeout1");
  
  function checkAllVisibility() {
    animadas.forEach((el) => {
      if (isInViewport(el)) {
        el.classList.add("visible");
      } else {
        el.classList.remove("visible");
      }
    });
  }
  
  window.addEventListener("scroll", checkAllVisibility);
  window.addEventListener("DOMContentLoaded", checkAllVisibility);