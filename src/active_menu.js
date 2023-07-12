"use strict";

const sectionIds = [
  "#home",
  "#about",
  "#skills",
  "#projects",
  "#testimonial",
  "#contact",
];
const sections = sectionIds.map((id) => document.querySelector(id));
const navItems = sectionIds.map((id) =>
  document.querySelector(`[href="${id}"]`)
);
const visibleSections = sectionIds.map((id) => false);
let activeNavItem = navItems[0];

const observerOptions = {
  root: null,
  rootMargin: "-20% 0px 0px 0px",
  threshold: [0, 0.98],
};

const observer = new IntersectionObserver(onserverCallback, observerOptions);
sections.forEach((section) => {
  observer.observe(section);
});

function onserverCallback(entries) {
  let selectLastOne;
  entries.forEach((entry) => {
    const index = sectionIds.indexOf(`#${entry.target.id}`);
    visibleSections[index] = entry.isIntersecting;
    selectLastOne =
      index === sectionIds.length - 1 &&
      entry.isIntersecting &&
      entry.intersectionRatio >= 0.95;
  });
  // console.log(`마지막 섹션 보여주기!! ${selectLastOne}`);

  const navIndex = selectLastOne
    ? sectionIds.length - 1
    : findFirstIntersecting(visibleSections);
  // console.log(`navIndex: ${sectionIds[navIndex]}`);

  selectNavItem(navIndex);
}

function findFirstIntersecting(intersections) {
  const index = intersections.indexOf(true);
  return index >= 0 ? index : 0;
}

function selectNavItem(index) {
  const navItem = navItems[index];
  if (!navItem) return;
  activeNavItem.classList.remove("active");
  activeNavItem = navItem;
  activeNavItem.classList.add("active");
}
