// Locomotive JS for smooth scrolling
const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});

window.addEventListener("DOMContentLoaded", function () {
    // gsap for animations
    gsap.from(".nav-link", {
        stagger: 0.2,
        y: 15,
        opacity: 0,
        ease: Power2,
    });

    gsap.from(".animElem2", {
        stagger: 0.3,
        y: 80,
        opacity: 0,
        duration: 1.2,
        ease: Expo,
    });

    // Shery JS for 3d effects

    Shery.mouseFollower({
        skew: false,
        ease: "cubic-bezier(0.19, 1, 0.22, 1)",
        duration: 0.4,
    });

    Shery.makeMagnet(".nav-link");

    Shery.textAnimate(".headings h1", {
        style: 2,
    });

    Shery.imageEffect("#animImg2", {
        style: 3,
        config: {
            "uFrequencyX": {
                "value": 12.4,
                "range": [0, 100]
            },
            "uFrequencyY": {
                "value": 4.96,
                "range": [0, 100]
            },
            "uFrequencyZ": {
                "value": 24.79,
                "range": [0, 100]
            },
            "geoVertex": {
                "range": [1, 64],
                "value": 20.26
            },
            "zindex": {
                "value": -9996999,
                "range": [-9999999, 9999999]
            },
            "aspect": {
                "value": 0.7005278716216217
            },
            "gooey": {
                "value": false
            },
            "infiniteGooey": {
                "value": false
            },
            "growSize": {
                "value": 4,
                "range": [1, 15]
            },
            "durationOut": {
                "value": 1,
                "range": [0.1, 5]
            },
            "durationIn": {
                "value": 1.5,
                "range": [0.1, 5]
            },
            "displaceAmount": {
                "value": 0.5
            },
            "masker": {
                "value": true
            },
            "maskVal": {
                "value": 1.56,
                "range": [1, 5]
            },
            "scrollType": {
                "value": 0
            },
            "noEffectGooey": {
                "value": true
            },
            "onMouse": {
                "value": 1
            },
            "noise_speed": {
                "value": 0.2,
                "range": [0, 10]
            },
            "metaball": {
                "value": 0.2,
                "range": [0, 2]
            },
            "discard_threshold": {
                "value": 0.5,
                "range": [0, 1]
            },
            "antialias_threshold": {
                "value": 0.002,
                "range": [0, 0.1]
            },
            "noise_height": {
                "value": 0.5,
                "range": [0, 2]
            },
            "noise_scale": {
                "value": 10,
                "range": [0, 100]
            }
        },
    });

    Shery.imageEffect("#animImg1", {
        style: 5,
        config: {
            "a": {
                "value": 1.98,
                "range": [0, 30]
            },
            "b": {
                "value": -0.79,
                "range": [-1, 1]
            },
            "zindex": {
                "value": -9996999,
                "range": [-9999999, 9999999]
            },
            "aspect": {
                "value": 0.7068529523327854
            },
            "gooey": {
                "value": false
            },
            "infiniteGooey": {
                "value": false
            },
            "growSize": {
                "value": 4,
                "range": [1, 15]
            },
            "durationOut": {
                "value": 1,
                "range": [0.1, 5]
            },
            "durationIn": {
                "value": 1.5,
                "range": [0.1, 5]
            },
            "displaceAmount": {
                "value": 0.5
            },
            "masker": {
                "value": true
            },
            "maskVal": {
                "value": 1.5,
                "range": [1, 5]
            },
            "scrollType": {
                "value": 0
            },
            "geoVertex": {
                "range": [1, 64],
                "value": 1
            },
            "noEffectGooey": {
                "value": true
            },
            "onMouse": {
                "value": 1
            },
            "noise_speed": {
                "value": 0.2,
                "range": [0, 10]
            },
            "metaball": {
                "value": 0.2,
                "range": [0, 2]
            },
            "discard_threshold": {
                "value": 0.5,
                "range": [0, 1]
            },
            "antialias_threshold": {
                "value": 0.002,
                "range": [0, 0.1]
            },
            "noise_height": {
                "value": 0.5,
                "range": [0, 2]
            },
            "noise_scale": {
                "value": 10,
                "range": [0, 100]
            }
        },
    });

    Shery.imageEffect("#pictureAnim1, #pictureAnim2", {
        style: 4,
        config: {
            "uColor": {
                "value": false
            },
            "uSpeed": {
                "value": 0.6,
                "range": [0.1, 1],
                "rangep": [1, 10]
            },
            "uAmplitude": {
                "value": 1.5,
                "range": [0, 5]
            },
            "uFrequency": {
                "value": 2.73,
                "range": [0, 10]
            },
            "geoVertex": {
                "range": [1, 64],
                "value": 14.02
            },
            "zindex": {
                "value": -9996999,
                "range": [-9999999, 9999999]
            },
            "aspect": {
                "value": 0.643324607329843
            },
            "gooey": {
                "value": false
            },
            "infiniteGooey": {
                "value": false
            },
            "growSize": {
                "value": 4,
                "range": [1, 15]
            },
            "durationOut": {
                "value": 1,
                "range": [0.1, 5]
            },
            "durationIn": {
                "value": 1.5,
                "range": [0.1, 5]
            },
            "displaceAmount": {
                "value": 0.5
            },
            "masker": {
                "value": true
            },
            "maskVal": {
                "value": 1.56,
                "range": [1, 5]
            },
            "scrollType": {
                "value": 0
            },
            "noEffectGooey": {
                "value": true
            },
            "onMouse": {
                "value": 1
            },
            "noise_speed": {
                "value": 0.2,
                "range": [0, 10]
            },
            "metaball": {
                "value": 0.2,
                "range": [0, 2]
            },
            "discard_threshold": {
                "value": 0.5,
                "range": [0, 1]
            },
            "antialias_threshold": {
                "value": 0.002,
                "range": [0, 0.1]
            },
            "noise_height": {
                "value": 0.5,
                "range": [0, 2]
            },
            "noise_scale": {
                "value": 10,
                "range": [0, 100]
            }
        },
    });

    Shery.imageEffect("#bottleEffect", {
        style: 5,
        config: {
            "a": {
                "value": 0.99,
                "range": [0, 30]
            },
            "b": {
                "value": -0.9,
                "range": [-1, 1]
            },
            "zindex": {
                "value": -9996999,
                "range": [-9999999, 9999999]
            },
            "aspect": {
                "value": 1.849629144851658
            },
            "gooey": {
                "value": true
            },
            "infiniteGooey": {
                "value": true
            },
            "growSize": {
                "value": 4,
                "range": [1, 15]
            },
            "durationOut": {
                "value": 1,
                "range": [0.1, 5]
            },
            "durationIn": {
                "value": 1.5,
                "range": [0.1, 5]
            },
            "displaceAmount": {
                "value": 0.5
            },
            "masker": {
                "value": true
            },
            "maskVal": {
                "value": 1.13,
                "range": [1, 5]
            },
            "scrollType": {
                "value": 0
            },
            "geoVertex": {
                "range": [1, 64],
                "value": 1
            },
            "noEffectGooey": {
                "value": true
            },
            "onMouse": {
                "value": 1
            },
            "noise_speed": {
                "value": 0.74,
                "range": [0, 10]
            },
            "metaball": {
                "value": 0.15,
                "range": [0, 2],
                "_gsap": {
                    "id": 34
                }
            },
            "discard_threshold": {
                "value": 0.5,
                "range": [0, 1]
            },
            "antialias_threshold": {
                "value": 0,
                "range": [0, 0.1]
            },
            "noise_height": {
                "value": 0.5,
                "range": [0, 2]
            },
            "noise_scale": {
                "value": 6.61,
                "range": [0, 100]
            }
        },
        gooey: true,
    });

    // show and hide video on 'mouse enter' and 'mouse leave'
    const joinBtn = document.querySelector("#join-btn");
    const video = document.querySelector("#bg-video");

    joinBtn.addEventListener("mouseenter", function () {
        gsap.to(video, {
            opacity: 1,
            duration: 1,
        });
    });

    joinBtn.addEventListener("mouseleave", function () {
        gsap.to(video, {
            opacity: 0,
            duration: 1,
        });
    });
});