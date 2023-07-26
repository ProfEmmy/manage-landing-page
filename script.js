const testimonies = document.querySelectorAll('.testimony')

Array.from(testimonies).forEach(testimony => {
    testimony.addEventListener("mouseenter", () => {
        testimonies.forEach(tes => {
            tes.style.animationPlayState = "paused"
        })
    })

    testimony.addEventListener("mouseleave", () => {
        testimonies.forEach(tes => {
            tes.style.animationPlayState = "running"
        })
    })
})



const menu_icon = document.querySelector(".menu-icon")
const overlay = document.querySelector(".overlay")
const nav = document.querySelector(".navigator-div")
const nav_div = document.querySelector(".navigator")
const close_icon = document.querySelector(".close_icon")

menu_icon.addEventListener("click", () => {
    overlay.classList.remove("display")
    nav.classList.remove("remove-nav-div")
    nav_div.classList.remove("remove-nav")
    menu_icon.classList.add("display")
    close_icon.classList.remove("display")
})

close_icon.addEventListener("click", () => {
    overlay.classList.add("display")
    nav.classList.add("remove-nav-div")
    nav_div.classList.add("remove-nav")
    menu_icon.classList.remove("display")
    close_icon.classList.add("display")
})