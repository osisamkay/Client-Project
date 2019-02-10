window.onload = function () {

  // Toggle button
  const Toggle = document.querySelector(".imge");

  const Navlink = document.querySelector(".navlink");

  Toggle.addEventListener('click', function () {
    Navlink.classList.toggle("navlinkshow");
  })


  // on scroll Navigation
  const Nav = document.querySelector('.nav');
  window.addEventListener('scroll', function () {
    if (window.pageYOffset > 104) {
      Nav.setAttribute("style",
        "position:fixed;top:0;z-index:9;background-color:rgba(255,255,255,.9);box-shadow:0px 3px 6px rgba(0,0,0,.6);transition:500ms");
    } else {
      Nav.setAttribute("style",
        "position:relative;top:104");
    }
  });

  AOS.init();
};
