var cursor = document.querySelector("#cursor")
var cursor_blur = document.querySelector("#cursor-blur")

document.addEventListener("mousemove", function (dets) {
    cursor.style.left = dets.x + 30 + "px"
    cursor.style.top = dets.y + "px"

    cursor_blur.style.left = dets.x - 200 + "px"
    cursor_blur.style.top = dets.y - 200 + "px"
})

var nav_list = document.querySelectorAll('#nav a')
nav_list.forEach(function (element) {
    element.addEventListener("mouseenter", function () {
        cursor.style.scale = 2.5
        cursor.style.border = "1px solid #fff"
        cursor.style.backgroundColor = "transparent"
    })

    element.addEventListener("mouseleave", function () {
        cursor.style.scale = 1
        cursor.style.border = "0px solid #95C11E"
        cursor.style.backgroundColor = "#95C11E"
    })
})


gsap.to("#nav", {
    backgroundColor: "#000",
    duration: 0.5,
    height: "90px",
    scrollTrigger: {
        trigger: "#nav",
        scroller: "body",
        // markers: true,
        start: "top -10%",
        end: "top -11%",
        scrub: 1
    }
})

gsap.to("#main", {
    backgroundColor: "#000",
    scrollTrigger: {
        trigger: "#main",
        scroller: "body",
        // markers: true,
        start: "top -20%",
        end: "top -70%",
        scrub: 2
    }
})

gsap.from("#about-us img, #about-us-in", {
    y: 80,
    opacity: 0,
    duration: 1,
    stagger: 0.2,
    scrollTrigger: {
        trigger: "#about-us",
        scroller: "body",
        start: "top 60%",
        end: "top 58%",
        scrub: 3
    }
})

gsap.from(".card", {
    scale: 0.8,
    opacity: 0,
    duration: 1,
    stagger: 0.2,
    scrollTrigger: {
        trigger: ".card",
        scroller: "body",
        start: "top 70%",
        end: "top 65%",
        scrub: 2
    }
})

gsap.from("#colon1", {
    y: -70,
    x: -70,
    scrollTrigger: {
        trigger: "#colon1",
        scroller: "body",
        start: "top 75%",
        end: "top 90%",
        scrub: 4
    }
})

gsap.from("#colon2", {
    y: 70,
    x: 70,
    scrollTrigger: {
        trigger: "#colon1",
        scroller: "body",
        start: "top 75%",
        end: "top 90%",
        scrub: 4
    }
})

gsap.from("#page4 h1", {
    y: 50,
    scrollTrigger: {
        trigger: "#page4 h1",
        scroller: "body",
        start: "top 75%",
        end: "top 45%",
        scrub: 4
    }
})
