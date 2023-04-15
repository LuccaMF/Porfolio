var typed = new Typed (".typedText", {
    strings: ["desenvolvedor Front-End."],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 2000,
    loop: true
})

//menu-sectionn responsivo

let show = true;

const menuSection = document.querySelector(".menu-section")
const menuToggle = document.querySelector(".menu-toggle")

menuToggle.addEventListener("click", () => {

    document.body.style.overflow = show ? "hidden" : "initial"

    menuSection.classList.toggle("on", show)
    show = !show;
})