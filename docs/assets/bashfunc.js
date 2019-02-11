function nextImage(imgs) {
    for (var i = 0; i < imgs.length; i++) {
        if (imgs[0].style.opacity !== '0' && imgs[0].style.opacity !== '1') {
            imgs[0].style.opacity = '1';
            break;
        }
        else if (imgs[i].style.opacity == '1' || imgs[i].style.opacity == '') {
            imgs[i].style.opacity = '0';
            if (i + 1 < imgs.length) {
                imgs[i + 1].style.opacity = '1';
            } else {
                imgs[0].style.opacity = '1';
            }
            break;
        }
    }
    setTimeout(nextImage, 5000, imgs);
}

var figures = document.getElementsByClassName('slideshow');
function figuresSlide(i) {
    return function () {
        nextImage(figures[i].getElementsByTagName('img'));
    };
}

if (figures != null) {
    for (var i = 0; i < figures.length; i++) {
        if (figures[i].className == 'slideshow') {
            var wrapper = figuresSlide(i);
        }
        setTimeout(wrapper(i), 5000);
    }
}
