export const links = {
        fps_limit: 20,
        interactivity: {
            detect_on: "canvas",
            events: {
                onclick: { enable: false },
                onhover: {
                    enable: false,
                },
                resize: true
            },
            modes: {
                push: { quantity: 4 },
                attract: { distance: 100, duration: 0.6, factor: 5 }
            }
        },
        particles: {
            color: { value: "#333A73" },
            line_linked: {
                color: "#f1f1f1",
                distance: 10,
                enable: true,
                opacity: .6,
                width: 10
            },
            move: {
                attract: { enable: false, rotateX: 600, rotateY: 1200 },
                bounce: false,
                direction: "none",
                enable: true,
                out_mode: "out",
                random: false,
                speed: 2,
                straight: false
            },
            number: { density: { enable: true, value_area: 800 }, value: 80 },
            opacity: {
                anim: { enable: false, opacity_min: 0.1, speed: 1, sync: false },
                random: false,
                value: 0.3
            },
            shape: {
                character: {
                    fill: false,
                    font: "Verdana",
                    style: "",
                    value: "*",
                    weight: "400"
                },
                image: {
                    height: 100,
                    replace_color: true,
                    src: "images/github.svg",
                    width: 100
                },
                polygon: { nb_sides: 5 },
                stroke: { color: "#000000", width: 0 },
                type: "circle"
            },
            size: {
                anim: { enable: false, size_min: 0.1, speed: 40, sync: false },
                random: true,
                value: 5
            }
        },
        polygon: {
            draw: { enable: false, lineColor: "#ffffff", lineWidth: 0.5 },
            move: { radius: 10 },
            scale: 1,
            type: "none",
            url: ""
        },
        retina_detect: true
    }

