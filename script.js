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

const mobile_subscribe_form = document.querySelector("#mobile-subscribe-form")
const mobile_email_field = document.querySelector(".mobile-email-field")
const mobile_error_p = document.querySelector(".mobile_error_p")

mobile_subscribe_form.addEventListener("submit", e => {
    e.preventDefault()

    let value = mobile_email_field.value
    if (value.includes("/") || !(value.includes("@")) || !(value.includes("."))) {
        mobile_email_field.classList.add("error")
        mobile_error_p.style.display = "block"
        mobile_error_p.innerText = "Please insert a valid email"
    } else {
        mobile_email_field.classList.remove("error")
        mobile_error_p.innerText = ""
        mobile_email_field.value = ""
        mobile_error_p.style.display = "none"
    }
})

// Check if the current device is a mobile or tablet
function isMobileDevice() {
    return (typeof window.orientation !== "undefined") || (navigator.userAgent.indexOf('IEMobile') !== -1);
}

// Disable scrolling on the x-axis for mobile devices
function disableXScroll() {
    if (isMobileDevice()) {
        document.addEventListener("touchmove", preventXScroll, { passive: false });
    } else {
        // For non-mobile devices, use the previous method to disable x-axis scrolling
        window.addEventListener("scroll", preventXScroll, { passive: false });
    }
}

// Enable scrolling on the x-axis for mobile devices
function enableXScroll() {
    if (isMobileDevice()) {
        document.removeEventListener("touchmove", preventXScroll, { passive: false });
    } else {
        // For non-mobile devices, use the previous method to enable x-axis scrolling
        window.removeEventListener("scroll", preventXScroll, { passive: false });
    }
}

// Prevent default scrolling behavior on the x-axis for mobile devices
function preventXScroll(event) {
    event.preventDefault();
}

// Call the disableXScroll function to disable x-axis scrolling when needed
disableXScroll();

  // Call the enableXScroll function to enable x-axis scrolling when needed
  // enableXScroll();
