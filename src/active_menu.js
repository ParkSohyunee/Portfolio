"use strict";

const navBarMenu = document.querySelectorAll(".navbar__menu__item");
const sections = document.querySelectorAll(".section");

const observerOptions = {
  root: null,
  rootMargin: "0px",
  threshold: 0.5,
};

const observer = new IntersectionObserver(onserverCallback, observerOptions);

function onserverCallback(entries) {
  console.log(entries);
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      const targetId = entry.target.id;
      console.log(targetId);
      activateMenu(targetId);
    }
  });
}

const activateMenu = (targetId) => {
  navBarMenu.forEach((menuItem) => {
    const data = menuItem.getAttribute("data-target");
    if (data === targetId) {
      menuItem.classList.add("active");
    } else {
      menuItem.classList.remove("active");
    }
  });
};

sections.forEach((section) => {
  observer.observe(section);
});
