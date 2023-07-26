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

overlay.addEventListener("click", () => {
    overlay.classList.add("display")
    nav.classList.add("remove-nav-div")
    nav_div.classList.add("remove-nav")
    menu_icon.classList.remove("display")
    close_icon.classList.add("display")
})


const subscribe_form = document.querySelector("#subscribe-form")
const email_field = document.querySelector(".email-field")
const error_p = document.querySelector(".error_p")

subscribe_form.addEventListener("submit", e => {
    e.preventDefault()

    let value = email_field.value
    if (value.includes("/") || !(value.includes("@")) || !(value.includes("."))) {
        email_field.classList.add("error")
        error_p.style.display = "block"
        error_p.innerText = "Please insert a valid email"
    } else {
        email_field.classList.remove("error")
        error_p.innerText = ""
        email_field.value = ""
        error_p.style.display = "none"
    }
})