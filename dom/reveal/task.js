window.addEventListener('scroll', function () {
    const reveals = document.querySelectorAll(".reveal");
    reveals.forEach(reveal=>{
        if (isVisible(reveal)) {
        reveal.classList.add("reveal_active");
    } else {
        reveal.classList.remove("reveal_active");
    }
    })
})
function isVisible(el) {
    const { top, bottom } = el.getBoundingClientRect();
    if (bottom < 0) {
        return false;
    }
    if (top > window.innerHeight) {
        return false;
    }
    return true;
}
