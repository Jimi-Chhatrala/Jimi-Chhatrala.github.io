var loader = document.getElementById("preloader");

window.addEventListener("load", function () {
  $(".loader").delay(2000).fadeOut();
  $(".preloader").delay(2000).fadeOut();
  //   loader.style.display = "None";
  //   window.themeColor = $("body").data("theme-color");
});

$(document).ready(function () {
  $(window).scroll(function () {
    // sticky navbar on scroll script
    if (this.scrollY > 20) {
      $(".navbar").addClass("sticky");
    } else {
      $(".navbar").removeClass("sticky");
    }

    // scroll-up button show/hide script
    if (this.scrollY > 500) {
      $(".scroll-up-btn").addClass("show");
    } else {
      $(".scroll-up-btn").removeClass("show");
    }
  });

  // slide-up script
  $(".scroll-up-btn").click(function () {
    $("html").animate({ scrollTop: 0 });
    // removing smooth scroll on slide-up button click
    $("html").css("scrollBehavior", "auto");
  });

  $(".navbar .menu li a").click(function () {
    // applying again smooth scroll on menu items click
    $("html").css("scrollBehavior", "smooth");
  });

  // toggle menu/navbar script
  $(".toggle").click(function () {
    $(".navbar .menu").toggleClass("active");
    $(".toggle").toggleClass("active");
    // $(".menu-btn").toggleClass("active");
  });

  $(".menu-btn").click(function () {
    // $(".navbar .menu").toggleClass("active");
    $(".menu").removeClass("active");
    $(".toggle").removeClass("active");
  });

  // $(".menu-btn").click(function () {
  //   $(".navbar .menu").toggleClass("active");
  //   $(".menu-btn").toggleClass("active");
  // });

  // let menuToggle = document.querySelector(".toggle");

  // menuToggle.onclick = function () {
  //   menuToggle.classList.toggle("active");
  //   $(".navbar .menu").toggleClass("active");
  // };

  // typing text animation script
  var typed = new Typed(".typing", {
    strings: [
      "Frontend Designer",
      "Backend Developer",
      "Dedicated Programmer",
      "Team Player",
      "React Developer",
    ],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true,
  });

  var typed = new Typed(".typing-2", {
    strings: [
      "Frontend Designer",
      "Backend Developer",
      "Dedicated Programmer",
      "Team Player",
      "React Developer",
    ],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true,
  });

  // owl carousel script
  $(".carousel").owlCarousel({
    margin: 20,
    loop: true,
    autoplay: true,
    autoplayTimeOut: 2000,
    autoplayHoverPause: true,
    responsive: {
      0: {
        items: 1,
        nav: false,
      },
      600: {
        items: 2,
        nav: false,
      },
      1000: {
        items: 3,
        nav: false,
      },
    },
  });
});

// Mailing JavaScript Functions

const scriptURL =
  "https://script.google.com/macros/s/AKfycbxuhxOjV8rSrV-hNst-OIZj8JeZc12nFpz6pnIGfTor8t9Lth9_VRydMhvmS8fM3UxL/exec";
const form = document.forms["submit-to-google-sheet"];
const msg = document.getElementById("msg");
const sendBtn = document.getElementById("sendBtn");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  sendBtn.textContent = "sending...";
  fetch(scriptURL, { method: "POST", body: new FormData(form) })
    .then((response) => {
      msg.innerHTML =
        "<i class='fa fa-check' aria-hidden='true'></i> Message sent successfully.";
      setTimeout(function () {
        msg.innerHTML = "";
      }, 5000);
      sendBtn.textContent = "Send message";
      form.reset();
    })
    .catch((error) => console.error("Error!", error.message));
});

// JavaScript Functions for date insert

var today = new Date();

var date =
  today.getDate() + "-" + (today.getMonth() + 1) + "-" + today.getFullYear();

var time =
  today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();

var dateTime = date + " " + time;

document.getElementById("DateAndTime").value = dateTime;
