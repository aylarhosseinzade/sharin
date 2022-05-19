function LottieScrollTrigger(vars) {
    let playhead = { frame: 0 },
        target = gsap.utils.toArray(vars.target)[0],
        speeds = { slow: "+=2000", medium: "+=1000", fast: "+=500" },
        st = { trigger: target, pin: true, start: "top top", end: speeds[vars.speed] || "+=1000", scrub: 1 },
        animation = lottie.loadAnimation({
            container: target,
            renderer: vars.renderer || "svg",
            loop: false,
            autoplay: false,
            path: vars.path
        });
    for (let p in vars) { // let users override the ScrollTrigger defaults
        st[p] = vars[p];
    }
    animation.addEventListener("DOMLoaded", function() {
        gsap.to(playhead, {
            frame: animation.totalFrames - 1,
            ease: "none",
            onUpdate: () => animation.goToAndStop(playhead.frame, true),
            scrollTrigger: st
        });
    });
}

function animation() {

    const animationContainer = document.querySelector('.animationContainer')

    LottieScrollTrigger({
        target: animationContainer,
        path: 'https://assets4.lottiefiles.com/packages/lf20_uDOk66.json',
        speed: 'medium',
        scrub: 1,
        onUpdate: (self) => {
            const features = document.querySelectorAll('.feature')
            console.log(self.progress)
            if (self.progress > 0.100) {
                features[0].classList.add('active')
            } else {
                features[0].classList.remove('active')
            }
        }
    })

}

function init() {

    animation()

}

// wait until DOM is ready
document.addEventListener("DOMContentLoaded", function(e) {
    // make sure window is always at top on reload
    window.onbeforeunload = function() {
            window.scrollTo(0, 0);
        }
        // wait until window is loaded - all images, styles-sheets, fonts, links, and other media assets
        // you could also use addEventListener() instead
    window.onload = function() {
        // OPTIONAL - waits til next tick render to run code (prevents running in the middle of render tick)
        window.requestAnimationFrame(function() {

            init();

        })
    }
})