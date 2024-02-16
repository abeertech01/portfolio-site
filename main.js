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

      if (scrollPosition >= tabTop && scrollPosition <= tabBottom) {
        tabBtns[i].classList.add("active")
      } else {
        tabBtns[i].classList.remove("active")
      }
    })
  })
})
