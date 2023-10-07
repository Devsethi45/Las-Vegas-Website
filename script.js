let navLinks = document.querySelector(".navlink")

        function showMenu(){
            navLinks.style.right = "0"
            navLinks.style.opacity = "1"
        }
        function hideMenu(){
            navLinks.style.right = "-200px"
        }

let tl1 = gsap.timeline({
    scrollTrigger: {
        trigger: "#page1",
        scroll: "#main",
        // markers: true,
    }
})
tl1.from(".left", {
    opacity: 0,
    duration: .6,
    y: "100",
})

let tl2 = gsap.timeline({
    scrollTrigger: {
        trigger: "#page2",
        scroll: "#main",
        // markers: true,
        start: "top 65%",
        end: "bottom 10%",
    }
})
tl2.from(".heading h1", {
    opacity: 0,
    duration: .6,
    y: "60",
})
tl2.from(".col", {
    opacity: 0,
    duration: .6,
    x: "20",
})

let tl3 = gsap.timeline({
    scrollTrigger: {
        trigger: "#page3",
        scroll: "#main",
        // markers: true,
        start: "top 65%",
        end: "bottom 10%",
    }
})
tl3.from(".side" ,{
    opacity: 0,
    duration: .4
})
tl3.from(".row" ,{
    opacity: 0,
    duration: .6,
    stagger: 0.3,
    x: "-50"
})
let tl4 = gsap.timeline({
    scrollTrigger: {
        trigger: "#page4",
        scroll: "#main",
        // markers: true,
        start: "top 60%",
        end: "bottom 10%",
    }
})
tl4.from(".title-head" ,{
    opacity: 0,
    y: "-30",
    duration: .6
})
tl4.from(".left1" ,{
    y: "30",
    opacity: 0,
    duration: .6,
})
let tl5 = gsap.timeline({
    scrollTrigger: {
        trigger: ".right1",
        scroll: "#main",
        // markers: true,
        start: "top 60%",
        end: "bottom 10%",
    }
})
tl5.from(".right1" ,{
    opacity: 0,
    duration: .7,
    y: "-30"
})
let tl6 = gsap.timeline({
    scrollTrigger: {
        trigger: ".right2",
        scroll: "#main",
        // markers: true,
        start: "top 65%",
        end: "bottom",
    }
})
tl6.from(".right2" ,{
    opacity: 0,
    duration: .8,
    x: "-50"
}, "d")
tl6.from(".left2" ,{
    opacity: 0,
    duration: .8,
    x: "50",
}, "d")

let tl7 = gsap.timeline({
    scrollTrigger: {
        trigger: ".knowledge-section",
        scroll: "#main",
        // markers: true,
        start: "top 70%",
        end: "bottom 10%",
    }
})
tl7.from(".know-left" ,{
    duration: .8,
    x: "40",
    opacity: 0
})
let tl8 = gsap.timeline({
    scrollTrigger: {
        trigger: ".know-right",
        scroll: "#main",
        // markers: true,
        start: "top 55%",
        end: "bottom 10%",
    }
})
tl8.from(".know-right" ,{
    duration: .8,
    x: "-40",
    opacity: 0
})
