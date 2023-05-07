window.addEventListener("scroll", function () {
    shrink();
  });
  
  let navbar = document.getElementById("header");
  
  function shrink() {
    if (scrollY > 100) {
      navbar.classList.add("navbar_shadow");
    } else {
          navbar.classList.remove("navbar_shadow");
      }
  }