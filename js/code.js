// Add class active on navbar links
let navLinks = document.querySelectorAll(".navbar .links li ");

navLinks.forEach((link) => {
  link.addEventListener("click", (e) => {
    navLinks.forEach((lin) => {
      lin.classList.remove("active");
    });
    e.target.classList.add("active");
  });
});

// likes on swim
let hearts = document.querySelectorAll(".activities .like .heart");

likeCounter(hearts);

// function like counter
function likeCounter(element) {
  element.forEach((el) => {
    el.addEventListener("click", function (e) {
      e.target.parentElement.parentElement.querySelector(".count").innerHTML++;
    });
  });
}

// navbar menu toggler
let togglerBtn = document.querySelector(".navbar .toggle-btn");
let linksContainer = document.querySelector(".navbar .links-container");
linksContainer.onclick = (e) => {
  e.stopPropagation();
};

togglerBtn.addEventListener("click", (e) => {
  e.stopPropagation();
  linksContainer.classList.toggle("open");
});

document.addEventListener("click", (e) => {
  if (e.target !== togglerBtn && e.target !== linksContainer) {
    linksContainer.classList.remove("open");
  }
});

// Animation section
AOS.init();

// Scroll To Top Btn
let scrollBtun = document.querySelector(".scroll-top");

window.onscroll = () => {
  this.scrollY > 600
    ? (scrollBtun.style.display = "block")
    : (scrollBtun.style.display = "none");
};

scrollBtun.onclick = () => {
  window.scrollTo(0, 0);
};
