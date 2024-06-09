import "./style.css"

document.addEventListener("DOMContentLoaded", function () {
  const cursor = document.querySelector(".shadow-box")
  let tabs = document.querySelectorAll(".tab")
  let tabBtns = document.querySelectorAll(".tab-btn")

  document.addEventListener("mousemove", function (e) {
    let x = e.clientX
    let y = e.clientY

    cursor.style.top = y + "px"
    cursor.style.left = x + "px"
    cursor.style.display = "block"
  })

  document.addEventListener("mouseout", function () {
    cursor.style.display = "none"
  })

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
