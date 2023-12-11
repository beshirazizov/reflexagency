/* 
    pointer.js was created by OwL for use on websites, 
     and can be found at https://seattleowl.com/pointer.
*/

const pointer = document.createElement("div")
pointer.id = "pointer-dot"
const ring = document.createElement("div")
ring.id = "pointer-ring"
document.body.insertBefore(pointer, document.body.children[0])
document.body.insertBefore(ring, document.body.children[0])

let mouseX = -100
let mouseY = -100
let ringX = -100
let ringY = -100
let mouseDown = false
const init_pointer = () => {

    window.onmousemove = (mouse) => {
        mouseX = mouse.clientX
        mouseY = mouse.clientY
    }

    window.onmousedown = () => {
        mouseDown = true
    }

    window.onmouseup = () => {
        mouseDown = false
    }

    $('a, button').hover(function () {
        mouseDown = true
    }, function () {
        mouseDown = false
    });

    const trace = (a, b, n) => {
        return (1 - n) * a + n * b;
    }
    window["trace"] = trace

    const render = () => {
        ringX = trace(ringX, mouseX, 0.1)
        ringY = trace(ringY, mouseY, 0.1)

        ring.style.padding = 25 + "px";

        if (mouseDown) {
            $(ring).css("border-color","#105fef");
        } else {
            $(ring).css("border-color","#aaaaaa");
        }

        pointer.style.transform = `translate(${mouseX}px, ${mouseY}px)`
        ring.style.transform = `translate(${ringX - 24.1}px, ${ringY - 24.1}px)`

        requestAnimationFrame(render)
    }
    requestAnimationFrame(render)
}