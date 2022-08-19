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
    dropBtn[i].addEventListener("click", e => {
        const menus = document.querySelectorAll('.dropdown');
        console.log(e.target);
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
window.onclick = function (e) {
    if (!e.target.matches('.drop-btn')) {
        var dropdowns = document.getElementsByClassName('dropdown');
        var i;
        for (i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('on')) {
                openDropdown.classList.remove('on');
            }
        }
    }
    if (!e.target.matches('.results') && results.classList.contains('active')) {
        results.classList.remove('active');
    }
}

// search
const input = document.querySelector('.search');
results = document.querySelector('.results')
input.addEventListener('input', e => {
    text = e.target.value;
    console.log(text);
    if (text && text.trim().length > 0) {
        text = text.trim().toLowerCase();
        results.classList.add('active');
        results.innerHTML = `「${text}」に一致する検索結果：`;
    } else {
        results.classList.remove('active');
    }
})



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
back.addEventListener('click', () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
})

// footer
const date = document.querySelector('.date');
date.innerHTML = new Date().getFullYear();













