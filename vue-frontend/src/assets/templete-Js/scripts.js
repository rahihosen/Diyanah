window.addEventListener("DOMContentLoaded", (event) => {
  // Toggle the side navigation
  const sidebarToggle = document.body.querySelector("#sidebarToggle");
  if (sidebarToggle) {
    sidebarToggle.addEventListener("click", (event) => {
      event.preventDefault();
      document.body.classList.toggle("sb-sidenav-toggled");
      localStorage.setItem(
        "sb|sidebar-toggle",
        document.body.classList.contains("sb-sidenav-toggled")
      );
    });
  }
});

//code for 576px responsive
var menu_btn = document.querySelector("#menu-btn");
var sidebar = document.querySelector("#sidebar");
var container = document.querySelector(".my-container");
var overlay = document.querySelector(".overlay-sidebar");
menu_btn.addEventListener("click", () => {
  sidebar.classList.toggle("active-nav");
  container.classList.toggle("active-cont");
});

const width =
  window.innerWidth ||
  document.documentElement.clientWidth ||
  document.body.clientWidth;
const height =
  window.innerHeight ||
  document.documentElement.clientHeight ||
  document.body.clientHeight;

//console.log(width);
if (width <= 576) {
  $(function () {
    // document.getElementById("#sidebar-wrapper").style.marginLeft = "-15rem"
    sidebar.classList.toggle("active-nav");
    container.classList.toggle("active-cont");
  });

  menu_btn.addEventListener("click", () => {
    // sidebar.classList.toggle("active-nav");
    container.classList.toggle("active-cont");
    overlay.classList.toggle("d-none");
  });

  container.addEventListener("click", () => {
    // sidebar.classList.toggle("active-nav");
    sidebar.classList.remove("active-nav");

    // container.classList.toggle("active-cont");
  });

  overlay.addEventListener("click", () => {
    // sidebar.classList.toggle("active-nav");
    sidebar.classList.remove("active-nav");
    overlay.classList.add("d-none");

    // container.classList.toggle("active-cont");
  });
}


$(document).ready(function ($) {
  // Declare the body variable
  var $body = $("body");

  // Function that shows and hides the sidebar cart
  $(".cart-button, .close-button, #sidebar-cart-curtain").click(function (e) {
    e.preventDefault();

    // Add the show-sidebar-cart class to the body tag
    $body.toggleClass("show-sidebar-cart");

    // Check if the sidebar curtain is visible
    if ($("#sidebar-cart-curtain").is(":visible")) {
      // Hide the curtain

      $("#sidebar-cart-curtain").fadeOut(500);
      $(".sticky-header-cart").show();
    } else {
      // Show the curtain
      $("#sidebar-cart-curtain").fadeIn(500);
      $(".sticky-header-cart").hide();
    }
  });

  $("#cart-close, .cart-close").click(function (e) {
    // working here...
    e.preventDefault();
    // Check if the sidebar curtain is visible
    if ($("#sidebar-cart-curtain").is(":visible")) {
      $body.toggleClass("show-sidebar-cart");
      // Hide the curtain
      $("#sidebar-cart-curtain").fadeOut(1000);
      $(".sticky-header-cart").show();
    }
  });
});


let items = document.querySelectorAll(".carousel .carousel-item");

items.forEach((el) => {
  const minPerSlide = 4;
  let next = el.nextElementSibling;
  for (var i = 1; i < minPerSlide; i++) {
    if (!next) {
      // wrap carousel by using first child
      next = items[0];
    }
    let cloneChild = next.cloneNode(true);
    el.appendChild(cloneChild.children[0]);
    next = next.nextElementSibling;
  }
});
