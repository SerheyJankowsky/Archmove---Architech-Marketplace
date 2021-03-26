var next = document.querySelector('.next')
var prev = document.querySelector('.prev')

var conteiner = document.querySelector('.section_conteeiner__scroll')
const width = conteiner.scrollWidth
let zero = 0;

function scroll(event) {
    const scrollWidth = 300
    if (event.target.classList.contains('prev')) {
        if (zero > 0) {
            zero = zero - scrollWidth
        }
    } else if (zero < width) {
        zero = zero + scrollWidth
    }
    conteiner.scroll(zero, 0)
}
prev.addEventListener('click', scroll)
next.addEventListener('click', scroll)


//Horizontal Scroll
const horizontal = document.querySelector(".section_conteeiner__scroll")

function horizontalSccroll(event) {
    if (event.deltaMode == event.DOM_DELTA_PIXEL) {
        var modifier = 1;
        // иные режимы возможны в Firefox
    } else if (event.deltaMode == event.DOM_DELTA_LINE) {
        var modifier = parseInt(getComputedStyle(this).lineHeight);
    } else if (event.deltaMode == event.DOM_DELTA_PAGE) {
        var modifier = this.clientHeight;
    }
    if (event.deltaY != 0) {
        // замена вертикальной прокрутки горизонтальной
        this.scrollLeft += modifier * event.deltaY;
        event.preventDefault();
    }
}
if (horizontal) {
    horizontal.addEventListener('wheel', horizontalSccroll)
}

//serch bar

const serchField = document.querySelector('.serch_field')
const block = document.querySelector('.show_input')

var check = false


function Show() {
    if (check == false) {
        serchField.style.opacity = '1'
        check = !check
    } else if (check == true) {
        serchField.style.opacity = '0'
        check = !check
    }
}


block.addEventListener('click', Show)