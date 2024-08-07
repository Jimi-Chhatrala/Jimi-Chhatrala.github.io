/**
 *  Generate random colors for theme
 */

/*Purple 250 - Green 142 - Blue 230 - Pink 340*/

const colors = [250, 142, 230, 340];

const random = Math.floor(Math.random() * colors.length);

/**
 * *************** TOTAL EXPERIENCE CALCULATOR METHOD
 */

function totalExperience() {
  var d1 = 2;
  var m1 = 1;
  var y1 = 2023;

  var date = new Date();
  var d2 = date.getDate();
  var m2 = 1 + date.getMonth();
  var y2 = date.getFullYear();
  var month = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

  if (d1 > d2) {
    d2 = d2 + month[m2 - 1];
    m2 = m2 - 1;
  }

  if (m1 > m2) {
    m2 = m2 + 12;
    y2 = y2 - 1;
  }

  var m = m2 - m1;
  var y = y2 - y1;

  document.getElementById("totalWorkExperience").innerHTML = "1"; //`${y}.${m}+`;
}

document.addEventListener("DOMContentLoaded", function () {
  let rand = colors[random];
  document.querySelector(":root").style.setProperty("--hue-color", rand);

  /**
   * *************** CALL TO TOTAL EXPERIENCE CALCULATOR METHOD
   */

  totalExperience();

  /**
   * ********************** TOTAL PROJECTS COMPLETED ************************
   */

  document.getElementById(
    "totalProjectsCompleted"
  ).innerHTML = `${rowsData.length}+`;
});

/*==================== MENU SHOW Y HIDDEN ====================*/

const navMenu = document.getElementById("nav-menu"),
  navToggle = document.getElementById("nav-toggle"),
  navClose = document.getElementById("nav-close");

/*===== MENU SHOW =====*/
/* Validate if constant exists */

if (navToggle) {
  navToggle.addEventListener("click", () => {
    navMenu.classList.add("show-menu");
  });
}

/*===== MENU HIDDEN =====*/
/* Validate if constant exists */

if (navClose) {
  navClose.addEventListener("click", () => {
    navMenu.classList.remove("show-menu");
  });
}

/*==================== REMOVE MENU MOBILE ====================*/

const navLink = document.querySelectorAll(".nav__link");

function linkAction() {
  const navMenu = document.getElementById("nav-menu");
  // When we click on each nav__link, we remove the show-menu class
  navMenu.classList.remove("show-menu");
}

navLink.forEach((n) => n.addEventListener("click", linkAction));

/*==================== ACCORDION SKILLS ====================*/

const skillsContent = document.getElementsByClassName("skills__content"),
  skillsHeader = document.querySelectorAll(".skills__header");

function toggleSkills() {
  let itemClass = this.parentNode.className;

  for (let i = 0; i < skillsContent.length; i++) {
    skillsContent[i].className = "skills__content skills__close";
  }

  if (itemClass === "skills__content skills__close") {
    this.parentNode.className = "skills__content skills__open";
  }
}

skillsHeader.forEach((el) => {
  el.addEventListener("click", toggleSkills);
});

/*==================== QUALIFICATION TABS ====================*/

const tabs = document.querySelectorAll("[data-target]"),
  tabContents = document.querySelectorAll("[data-content]");

tabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    const target = document.querySelector(tab.dataset.target);

    tabContents.forEach((tabContent) => {
      tabContent.classList.remove("qualification__active");
    });

    target.classList.add("qualification__active");

    tabs.forEach((tab) => {
      tab.classList.remove("qualification__active");
    });

    tab.classList.add("qualification__active");
  });
});

/*==================== SERVICES MODAL ====================*/

const modalViews = document.querySelectorAll(".services__modal"),
  modalBtns = document.querySelectorAll(".services__button"),
  modalCloses = document.querySelectorAll(".services__modal-close"),
  body = document.body;

let modal = function (modalClick) {
  modalViews[modalClick].classList.add("active-modal");
  body.classList.add("modal-open");
};

modalBtns.forEach((modalBtn, i) => {
  modalBtn.addEventListener("click", () => {
    modal(i);
  });
});

modalCloses.forEach((modalClose) => {
  modalClose.addEventListener("click", () => {
    modalViews.forEach((modalView) => {
      modalView.classList.remove("active-modal");
      body.classList.remove("modal-open");
    });
  });
});

/*==================== PORTFOLIO SWIPER  ====================*/

let swiperPortfolio = new Swiper(".portfolio__container", {
  cssMode: true,
  loop: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

/*==================== TESTIMONIAL ====================*/

let swiperTestimonial = new Swiper(".testimonial__container", {
  loop: true,
  grabCursor: true,
  spaceBetween: 48,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    dynamicBullets: true,
  },
  breakpoints: {
    568: {
      slidesPerView: 1,
    },
    700: {
      slidesPerView: 2,
    },
  },
});

/*==================== SCROLL SECTIONS ACTIVE LINK ====================*/

const sections = document.querySelectorAll("section[id]");

function scrollActive() {
  const scrollY = window.pageYOffset;

  sections.forEach((current) => {
    const sectionHeight = current.offsetHeight;
    const sectionTop = current.offsetTop - 50;
    sectionId = current.getAttribute("id");

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      document
        .querySelector(".nav__menu a[href*=" + sectionId + "]")
        .classList.add("active-link");
    } else {
      document
        .querySelector(".nav__menu a[href*=" + sectionId + "]")
        .classList.remove("active-link");
    }
  });
}
window.addEventListener("scroll", scrollActive);

/*==================== CHANGE BACKGROUND HEADER ====================*/

function scrollHeader() {
  const nav = document.getElementById("header");
  // When the scroll is greater than 200 viewport height, add the scroll-header class to the header tag
  if (this.scrollY >= 80) nav.classList.add("scroll-header");
  else nav.classList.remove("scroll-header");
}
window.addEventListener("scroll", scrollHeader);

/*==================== SHOW SCROLL UP ====================*/

function scrollUp() {
  const scrollUp = document.getElementById("scroll-up");
  // When the scroll is higher than 560 viewport height, add the show-scroll class to the a tag with the scroll-top class
  if (this.scrollY >= 560) scrollUp.classList.add("show-scroll");
  else scrollUp.classList.remove("show-scroll");
}
window.addEventListener("scroll", scrollUp);

/*==================== DARK LIGHT THEME ====================*/

const themeButton = document.getElementById("theme-button");
const darkTheme = "dark-theme";
const iconTheme = "uil-sun";

// Previously selected topic (if user selected)
const selectedTheme = localStorage.getItem("selected-theme");
const selectedIcon = localStorage.getItem("selected-icon");

// We obtain the current theme that the interface has by validating the dark-theme class
const getCurrentTheme = () =>
  document.body.classList.contains(darkTheme) ? "dark" : "light";
const getCurrentIcon = () =>
  themeButton.classList.contains(iconTheme) ? "uil-moon" : "uil-sun";

// We validate if the user previously chose a topic
if (selectedTheme) {
  // If the validation is fulfilled, we ask what the issue was to know if we activated or deactivated the dark
  document.body.classList[selectedTheme === "dark" ? "add" : "remove"](
    darkTheme
  );
  themeButton.classList[selectedIcon === "uil-moon" ? "add" : "remove"](
    iconTheme
  );
}

// Activate / deactivate the theme manually with the button
themeButton.addEventListener("click", () => {
  // Add or remove the dark / icon theme
  document.body.classList.toggle(darkTheme);
  themeButton.classList.toggle(iconTheme);
  // We save the theme and the current icon that the user chose
  localStorage.setItem("selected-theme", getCurrentTheme());
  localStorage.setItem("selected-icon", getCurrentIcon());
});

/**
 * ************ Portfolio Navigation and Items Control ******************
 */

$(document).ready(function () {
  var $list = $(".card-product-box .card").hide(),
    $curr;

  $(".work-item")
    .on("click", function () {
      var $this = $(this);
      $this.addClass("active-work").siblings().removeClass("active-work");
      $curr = $list.filter("." + this.id).hide();
      $curr.slice(0, 2).show(400);
      $list.not($curr).hide(300);
      checkLoadMoreButton(); // Check if "Load More" button needs to be shown or hidden
    })
    .filter(".active-work")
    .click();

  $("#LoadMore").on("click", function () {
    var hiddenItems = $curr.filter(":hidden");
    hiddenItems.slice(0, 2).slideDown("slow");
    if (hiddenItems.length <= 2) {
      $(this).hide(); // Hide the "Load More" button if there are no more items to show
    }
  });

  function checkLoadMoreButton() {
    if ($curr.filter(":hidden").length === 0) {
      $("#LoadMore").hide(); // Hide the button if no hidden items are left
    } else {
      $("#LoadMore").show(); // Show the button if there are hidden items
    }
  }
});

// $(document).ready(function () {
//   var $list = $(".card-product-box .card").hide(),
//     $curr;

//   $(".work-item")
//     .on("click", function () {
//       var $this = $(this);
//       $this.addClass("active-work").siblings().removeClass("active-work");
//       $curr = $list.filter("." + this.id).hide();
//       $curr.slice(0, 2).show(400);
//       $list.not($curr).hide(300);
//     })
//     .filter(".active-work")
//     .click();

//   $("#LoadMore").on("click", function () {
//     $curr.filter(":hidden").slice(0, 2).slideDown("slow");
//   });
// });

// $(document).ready(function () {
//   var $list = $(".work-container .work-card").hide(),
//     $curr;

//   $(".work-item")
//     .on("click", function () {
//       var $this = $(this);
//       $this.addClass("active-work").siblings().removeClass("active-work");
//       $curr = $list.filter("." + this.id).hide();
//       $curr.slice(0, 3).show(400);
//       $list.not($curr).hide(300);
//     })
//     .filter(".active-work")
//     .click();

//   $("#LoadMore").on("click", function () {
//     $curr.filter(":hidden").slice(0, 3).slideDown("slow");
//   });
// });

// $(document).ready(function () {
// var $list = $(".work-container .work-card").hide(),
// $curr;

// let $curr;

// $(".work-item")
//   .on("click", function () {
//     var $this = $(this);
//     $this.addClass("active-work").siblings().removeClass("active-work");
//     $curr = $list.filter("." + this.id).hide();
//     $curr.slice(0, 3).show(400);
//     $list.not($curr).hide(300);
//   })
//   .filter(".active-work")
//   .click();

// $("#LoadMore").on("click", function () {
//   $curr.filter(":hidden").slice(0, 3).slideDown("slow");
// });
// });

/**
 * *************** PORTFOLIO VIEWS COUNTER *********************************
 */

// window.addEventListener("load", function () {
//   const countElement = document.getElementById("count");
//   async function countVisits() {
//     await fetch("https://api.countapi.xyz/update/qwerty/ytrewq/?amount=1")
//       .then((res) => res.json())
//       .then((res) => {
//         countElement.innerHTML = res.value + "+";
//       });
//   }
//   countVisits();
// });

/**
 *
 */

// let section = document.querySelector(".skills");

/**
 * *********** SKILLS SECTION PROGRESS BAR WIDTH INCREASE ANIMATION
 */

// let section = document.querySelector(".uil-download-alt");

// let spans = document.querySelectorAll(".progress span");

// let nums = document.querySelectorAll(".nums .num");

// let started = false; // Function Started ? No

// function startCount(el) {
//   let goal = el.dataset.goal;
//   let count = setInterval(() => {
//     el.textContent++;
//     if (el.textContent == goal) {
//       clearInterval(count);
//     }
//   }, 2000 / goal);
// }

// window.onscroll = function () {
//   // ********************************* PROGRESS BAR ***************************

//   if (window.scrollY >= section.offsetTop) {
//     spans.forEach((span) => {
//       span.style.width = span.dataset.width;
//     });

//     // ********************************* PROGRESS PERCENTAGE ***************************

//     if (!started) {
//       nums.forEach((num) => startCount(num));
//     }
//     started = true;
//   }
// };

/**
 * ******************** SKILLS SECTION PROGRESS PERCENTAGE NUMBER INCREASE
 */

// let section = document.querySelector(".three");

// window.onscroll = function () {
//   if (window.scrollY >= section.offsetTop) {

//   }
// };

/**
 * ********* PORTFOLIO SEARCH BAR FUNCTIONALITY
 */

// DESIGN CODE

const icon = document.querySelector(".icon");
const search = document.querySelector(".search");

// icon.onclick = function () {
//   search.classList.toggle("active");
//   document.getElementById("mysearch").focus();
// };

document.addEventListener("click", function (event) {
  if (event.target.closest(".search")) {
    return;
  } else {
    // search.classList.remove("active");
    // matchList.innerHTML = "";
    // document.getElementById("mysearch").value = "";
    // document.querySelector(".search").classList.remove("overflow");
  }
});

// CODE FUNCTIONALITY

const mysearch = document.getElementById("mysearch");

const matchList = document.getElementById("match-list");

const clearBtn = document.querySelector(".clear");

// clearBtn.addEventListener("click", function () {
//   matchList.innerHTML = "";
// });

const searchProjects = (searchText) => {
  let matches = rowsData.filter((project) => {
    const regex = new RegExp(`^${searchText}`, "gi");

    return project.title.match(regex);
  });

  if (searchText.length === 0) {
    matches = [];
    matchList.innerHTML = "";
  } else {
    // document.querySelector(".search.active").style = "overflow: visible;";
    document.querySelector(".search").classList.add("overflow");

    outputHtml(matches);
  }
};

const outputHtml = (rowsData) => {
  if (rowsData.length > 0) {
    data =
      '<div class="work-container portfolio-container container work-grid card-product-box">';
    // for (let j = 0; j < rowsData.length; j++) {
    for (let j = rowsData.length - 1; j >= 0; j--) {
      let rowsDataImage = rowsData[j].image;
      let rowsDataTitle = rowsData[j].title;
      let rowsDataDescription = rowsData[j].description;
      let rowsDataDemoLink = rowsData[j].demolink;
      let rowsDataSourceCodeLink = rowsData[j].sourcecodelink;
      let rowsDataCategory = rowsData[j].category;

      // data += "<ul class='match-list'>";
      // data += '<li>';
      // data += '<div class="card-list">';
      // data += '<div class="matches-card">${match.title}</div><span class="view-project-modal-btn"><i class="uil uil-eye"></i></span>';
      // data += '</div>';
      // data += '</li>';
      // data += "</ul>";

      data += '<div class="work-card card all ' + `${rowsDataCategory}` + '">';
      data +=
        '<img src="./assets/img/' +
        `${rowsDataImage}` +
        '.png" alt="' +
        `${rowsDataTitle}` +
        '" class="work-img" />';
      data += '<h3 class="work-title">';
      data += `${
        rowsDataTitle.length > 30
          ? `${rowsDataTitle.substring(0, 34) + "..."}`
          : `${rowsDataTitle.substring(0, 50)}`
      }`;
      // `${rowsDataTitle}`
      data += "</h3>";
      data +=
        '<span class="work-button services__button project-links-button">';
      data += "View More";
      data += '<i class="uil uil-arrow-right work-button-icon"></i>';
      data += "</span>";
      data += '<div class="services__modal">';
      data += '<div class="services-modal-content">';
      data += '<i class="uil uil-times services__modal-close"></i>';
      data +=
        '<img src="./assets/img/' +
        `${rowsDataImage}` +
        '.png" alt="" class="work-modal-img" />';
      data +=
        '<h3 class="services-modal-title">' +
        `${rowsDataTitle.substring(0, 50)}` +
        "</h3>";

      data += '<p class="services-modal-description">';
      data += `${
        rowsDataDescription.length > 378
          ? `${rowsDataDescription.substring(0, 350) + "..."}`
          : `${rowsDataDescription.substring(0, 378)}`
      }`;

      data += "</p>";

      data += '<div class="project-techs">';

      const techstackArray = rowsData[j]["techstack"];

      for (let k = 0; k < techstackArray.length; k++) {
        data +=
          '<img src="./assets/img/' +
          `${techstackArray[k].toLowerCase()}` +
          '.svg" alt="" class="project-tech img-thumbnail" />';
      }

      data += "</div>";

      data += "<div class='project-show-links'>";
      data += "<div>";
      data +=
        '<a href="' +
        `${rowsDataDemoLink}` +
        '" target="_blank" class="work-button project-links-button">';
      data += "Demo";
      data += '<i class="uil uil-arrow-right work-button-icon"></i>';
      data += "</a>";
      data += "</div>";
      data += "<div>";
      data +=
        '<a href="' +
        `${rowsDataSourceCodeLink}` +
        '" target="_blank" class="work-button project-links-button">';
      data += "Source Code";
      data += '<i class="uil uil-github work-button-icon"></i>';
      data += "</a>";
      data += "</div>";
      data += "</div>";
      data += "</div>";

      data += "</div>";
      data += "</div>";
    }

    data += "</div>";
    // document.getElementById("boxData").innerHTML = data;

    matchList.innerHTML = data;
  }
};

// mysearch.addEventListener("input", () => searchProjects(mysearch.value));

// Contact Form Data Submit Mailing JavaScript Functions

const scriptURL =
  "https://script.google.com/macros/s/AKfycbw0PaVS1Aq6C2I1UVKbb0I8jGOpZnYNLgl0_5Gz4cHjf3SVW7BW7vxCo755RRr4jBXm/exec";
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
      }, 3000);
      sendBtn.textContent = "Send Message";
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

// -----------------------------------------------------------------

// document.addEventListener("DOMContentLoaded", function () {
//   const pageviewsCount = document.getElementById("pageviews-count");
//   const visitsCount = document.getElementById("visits-count");

//   async function fetchData() {
//     try {
//       if (sessionStorage.getItem("visit") === null) {
//         // New visit and pageview
//         updateCounter("type=visit-pageview");
//       } else {
//         // Pageview
//         updateCounter("type=pageview");
//       }

//       function updateCounter(type) {
//         // fetch("http://127.0.0.1:3002/api?" + type)
//         fetch("https://node-server-fawn.vercel.app/api?" + type)
//           .then((res) => res.json())
//           .then((data) => {
//             pageviewsCount.textContent = data.pageviews;
//             visitsCount.textContent = data.visits;
//           });
//       }
//     } catch (error) {
//       console.error("Error fetching data:", error);
//     }

//     sessionStorage.setItem("visit", "x");
//   }

//   fetchData();
// });

// // Function to make HTTP requests at regular intervals
// async function hitURL() {
//   try {
//     const response = await fetch("https://node-server-fawn.vercel.app/read");
//     const data = await response.json(); // Ensure the response is parsed as JSON
//     console.log("API Response:", data);
//   } catch (error) {
//     console.error("Error hitting URL:", error);
//   }
// }

// // Set an interval to hit the URL every 5 minutes (300000 milliseconds)
// setInterval(hitURL, 30000);

// ==================== FIREBASE VISITOR COUNTER START ====================

// Firebase Configuration and Logic

// Your Firebase configuration

const firebaseConfig = {
  apiKey: "AIzaSyBj0HtA-vyVz_g4LQ7Njuvm-fsr1zFFA2Y",
  authDomain: "website-visitor-counter.firebaseapp.com",
  projectId: "website-visitor-counter",
  storageBucket: "website-visitor-counter.appspot.com",
  messagingSenderId: "1040813132571",
  appId: "1:1040813132571:web:4bb0e95a6635d95e9b21be",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

// Function to update visitor and pageview counts
async function updateCounter(type) {
  const counterRef = db.collection("counters").doc("visitor_count");
  try {
    await db
      .runTransaction(async (transaction) => {
        const doc = await transaction.get(counterRef);
        if (!doc.exists) {
          transaction.set(counterRef, { visits: 0, pageviews: 0 });
          return { visits: 0, pageviews: 0 };
        }
        const data = doc.data();
        if (type === "type=visit-pageview") {
          transaction.update(counterRef, {
            visits: data.visits + 1,
            pageviews: data.pageviews + 1,
          });
          return {
            visits: data.visits + 1,
            pageviews: data.pageviews + 1,
          };
        } else if (type === "type=pageview") {
          transaction.update(counterRef, {
            pageviews: data.pageviews + 1,
          });
          return { visits: data.visits, pageviews: data.pageviews + 1 };
        }
      })
      .then((counts) => {
        document.getElementById(
          "visitor-count"
        ).textContent = `${counts.pageviews}+ page views, ${counts.visits}+ visits, and counting...`;
      });
  } catch (error) {
    console.error("Error updating counter:", error);
  }
}

// Check sessionStorage to determine if it's a new visit or just a pageview
function checkAndUpdateCounter() {
  if (sessionStorage.getItem("visit") === null) {
    // New visit and pageview
    updateCounter("type=visit-pageview");
    sessionStorage.setItem("visit", "x");
  } else {
    // Pageview
    updateCounter("type=pageview");
  }
}

// Call the function to update the count when the page loads
checkAndUpdateCounter();

// ==================== FIREBASE VISITOR COUNTER END ====================

// ==================== PRELOADER START ====================

document.addEventListener("DOMContentLoaded", function () {
  let preloaderText = document.getElementById("preloader-text");
  let progressBar = document.getElementById("progress-bar");

  const totalLength = progressBar.getTotalLength();
  progressBar.style.strokeDasharray = totalLength;
  progressBar.style.strokeDashoffset = totalLength;

  // Start loading progress
  let loadedPercentage = 0;
  let interval = setInterval(() => {
    if (loadedPercentage < 100) {
      loadedPercentage += Math.random() * 5; // Increment by a random value
      loadedPercentage = Math.min(loadedPercentage, 100);
      preloaderText.textContent = Math.floor(loadedPercentage) + "%";
      const offset = totalLength - totalLength * (loadedPercentage / 100);
      progressBar.style.strokeDashoffset = offset;
    } else {
      clearInterval(interval);
    }
  }, 200);

  // Wait for the entire page to load
  window.onload = function () {
    clearInterval(interval); // Clear any interval if still running
    preloaderText.textContent = "100%";
    progressBar.style.strokeDashoffset = 0;

    const preloader = document.getElementById("preloader");
    preloader.classList.add("fade-out");
    document.body.classList.remove("loading");
    document.body.classList.add("loaded");
    setTimeout(() => {
      preloader.style.display = "none"; // Hide preloader after fade-out
    }, 500); // Match the duration of the fade-out transition
  };
});

// ==================== PRELOADER END ====================
