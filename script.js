const arrowLeft = document.querySelector('.roomHomePage__section-grid2-arrow--left');
const arrowRight = document.querySelector('.roomHomePage__section-grid2-arrow--right');
const slider2 = document.querySelectorAll('.roomHomePage__section-grid2-item');
const texts = document.getElementById('slider--2')
const image = document.querySelectorAll('.roomHomePage__section-image');
const imgs = document.getElementById('imgs');

let index = 0;

let interval = setInterval(run, 2000);

function run() {
    index++;

    changeImage();
    changeSlide();
};

function changeImage() {
    if(index > image.length -1) {
    index = 0
    }else if(index < 0) {
        index = image.length - 1
    }

    imgs.style.transform = `translateX(${-index * 600}px)`
};

function changeSlide() {
    if(index > slider2.length -1) {
    index = 0
    }else if(index < 0) {
        index = slider2.length - 1
    }

    texts.style.transform = `translateY(${-index * 450}px)`
}

function resetInterval () {
    clearInterval(interval)
    interval = setInterval(run, 2000)
}

arrowRight.addEventListener('click', () => {
    index++;
    changeImage();
    changeSlide();
    resetInterval();
 })
 
 
 arrowLeft.addEventListener('click', () => {
     index--;
     changeImage();
     changeSlide();
     resetInterval();
 })