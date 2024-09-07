var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    pagination: {
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});

function NumberAnimation(limit, increment, element, suffix) {
    let i = 0
    const myinterval = setInterval(() => {
        i += increment
        element.innerText = `${i}${suffix}`
        if (i > limit) {
            if (limit >= 1000) {
                element.innerText = `${Math.round(limit / 1000)}k${suffix}`
            } else {
                element.innerText = `${limit}${suffix}`
            }
            clearInterval(myinterval)
        }
    }, 5);
}

const totalmembers = document.getElementById('totalmembers')
const activemembers = document.getElementById('activemembers')
const growthrate = document.getElementById('growthrate')
const stats = document.querySelector('.stats')
const myText = document.querySelectorAll('.Text')
let temp = 0

const Textobserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        entry.target.classList.toggle('animateText', entry.isIntersecting)
    })
})

const Statsobserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting && temp == 0) {
            NumberAnimation(1000, 13, totalmembers, '+')
            NumberAnimation(90, 1, activemembers, '%')
            NumberAnimation(70, 1, growthrate, '%')
            temp = 1
        }
    })
}, { threshold: 1 })

Statsobserver.observe(stats)
myText.forEach(e => {
    Textobserver.observe(e)
})

