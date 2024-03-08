import "./style.css"

document.addEventListener("DOMContentLoaded", function () {
  let tabs = document.querySelectorAll(".tab")
  let tabBtns = document.querySelectorAll(".tab-btn")

  tabBtns.forEach((button) => {
    button.addEventListener("click", function () {
      let targetId = button.getAttribute("data-target")
      let targetElement = document.querySelector(targetId)

      targetElement.scrollIntoView({
        behavior: "smooth",
      })
    })
  })

  window.addEventListener("scroll", function () {
    let scrollPosition = window.scrollY

    tabs.forEach((tab, i) => {
      let tabTop = tab.offsetTop
      let tabBottom = tabTop + tab.clientHeight
      const heading = tab.querySelector(".heading-name")

      if (scrollPosition >= tabTop && scrollPosition <= tabBottom) {
        tabBtns[i].classList.add("active")
        heading.classList.add("stickiness")
      } else {
        tabBtns[i].classList.remove("active")
        heading.classList.remove("stickiness")
      }
    })
  })
})
