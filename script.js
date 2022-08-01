const preloader = document.querySelector('.preloader');
window.addEventListener('load', function () {
    preloader.classList.add('hide-preloader');
})

// hamburger menu

const open = document.querySelector('.open');
const mobileNav = document.querySelector('.nav');


open.addEventListener('click', function (e) {
    e.preventDefault();
    mobileNav.classList.toggle('on');
    open.classList.toggle('on');
})

// dropdown menu
const dropBtn = document.getElementsByClassName('drop-btn');
var i;

for (i = 0; i < dropBtn.length; i++) {
    dropBtn[i].addEventListener("click", function (e) {
        const menus = document.querySelectorAll('.dropdown');
        menus.forEach(function (menu) {
            if (menu === e.currentTarget.nextElementSibling) {
                menu.classList.toggle('on');
            }
            else {
                menu.classList.remove('on');
            }
        });
    });
}

// click anywhere to hide the dropdown
window.onclick = function (event) {
    if (!event.target.matches('.drop-btn')) {
        var dropdowns = document.getElementsByClassName('dropdown');
        var i;
        for (i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('on')) {
                openDropdown.classList.remove('on');
            }
        }
    }
}

// back to top
const back = document.querySelector('.to_top');
window.addEventListener('scroll', function () {
    const scrollHeight = window.pageYOffset;
    if (scrollHeight > 500) {
        back.classList.add('on');
    } else {
        back.classList.remove('on');
    };
});

back.addEventListener('click', function () {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
})

// footer
const date = document.querySelector('.date');
date.innerHTML = new Date().getFullYear();















//news

let newsIndex = 1;
showNews(newsIndex);

function plusNews(n) {
    showNews(newsIndex += n);
}

function currentNews(n) {
    showNews(newsIndex = n);
}

function showNews(n) {
    let i;
    let news = document.querySelectorAll('.news');
    let dots = document.querySelectorAll('.dot');
    if (n > news.length) { newsIndex = 1; }
    if (n < 1) { newsIndex = news.length; }
    for (i = 0; i < news.length; i++) {
        news[i].style.display = 'none';
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].classList.add('fire');
        dots[i].className = dots[i].className.replace('fire', '');
    }
    news[newsIndex - 1].style.display = 'grid';
    dots[newsIndex - 1].className += ' fire';
}

// review
const popUp = document.querySelector('.modal');
const pop = document.querySelector('.pop');
const cross = document.querySelector('.cross');


pop.addEventListener('click', function () {
    popUp.classList.add('on');
});

cross.addEventListener('click', function () {
    popUp.classList.remove('on');
});






