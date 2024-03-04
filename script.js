


function loading() {
    var tl = gsap.timeline()


    tl.to("#yellow", {
        top: "-100%",
        delay: 0.5,
        // duration: 1,
        duration: 0.7,
        ease: "expo.out"
    })
    tl.from("#yellow2", {
        top: "100%",
        // delay: 0.6,
        delay: 26,
        duration: 0.7,
        // duration: 0.7,
        ease: "expo.out"
    }, "anime")
    tl.to("#loader h1", {
        delay: 25,
        // delay: 0.6,
        duration: 0.7,
        color: "black",
    }, "anime")
    tl.to("#loader", {
        display: "none",
    })
    tl.to("#loader", {
        opacity: 0,
    })
}


loading()


function loco() {

    const scroll = new LocomotiveScroll({
        el: document.querySelector('#main'),
        smooth: true
    });
    // scroll.on("click0",function(){
    //     console.log("hellow")
    // })

    document.querySelector("#footer h2").addEventListener("click", () => {
        // console.log("hellow")
        scroll.scrollTo(0)
    })


    var elems = document.querySelectorAll(".elem")

    var page2 = document.querySelector("#page2")
    // console.log(elems)
    elems.forEach(function (ele) {
        // console.log(ele)
        ele.addEventListener("mouseenter", function () {
            // console.log("hellow")
            var bgimg = ele.getAttribute("data-img")
            // console.log(bgimg)
            page2.style.backgroundImage = `url(${bgimg})`
            // page2.style.background = `url(${bgimg})`
        })
    })

}

loco()