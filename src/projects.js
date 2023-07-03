"use strict";

// 프로젝트 필터링 관련 로직
const categories = document.querySelector(".projects__categories");
const projects = document.querySelectorAll(".project");
const projectsContainer = document.querySelector(".projects");

categories.addEventListener("click", (event) => {
  const filter = event.target.dataset.filter;
  if (filter === undefined) return;

  // Active 메뉴를 재설정
  handleActiveSelection(event.target);

  // 프로젝트 필터링
  filterProjects(filter);
});

const handleActiveSelection = (target) => {
  const active = document.querySelector(".category--selected");
  active.classList.remove("category--selected");
  target.classList.add("category--selected");
};

const filterProjects = (filter) => {
  projects.forEach((project) => {
    if (filter === "All" || filter === project.dataset.type) {
      project.classList.remove("invisible");
    } else {
      project.classList.add("invisible");
    }
  });

  projectsContainer.classList.add("animation-out");
  setTimeout(() => {
    projectsContainer.classList.remove("animation-out");
  }, 250);
};
