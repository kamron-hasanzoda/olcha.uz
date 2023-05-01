// querySelector
let body = document.body

// create header
let header = document.createElement('header')
let head_logo = document.createElement('img')
let category = document.createElement('div')
let cat_img = document.createElement('img')
let cat_p = document.createElement('p')
let search = document.createElement('div')
let search_inp = document.createElement('input')
let red = document.createElement('div')
let red_img = document.createElement('img')
let icons = document.createElement('div')
let icon1 = document.createElement('div')
let icon1_img = document.createElement('img')
let icon1_p = document.createElement('p')
let icon2 = document.createElement('div')
let icon2_img = document.createElement('img')
let icon2_p = document.createElement('p')
let icon3 = document.createElement('div')
let icon3_img = document.createElement('img')
let icon3_p = document.createElement('p')
let icon4 = document.createElement('div')
let icon4_img = document.createElement('img')
let icon4_p = document.createElement('p')

// style
head_logo.src = './img/olcha_logo.svg'
category.classList.add('category')
cat_img.src = './img/hamburger.svg'
cat_p.innerHTML = 'Каталог'
search.classList.add('search')
red.classList.add('red')
red_img.src = './img/search.svg'
icons.classList.add('icons')
icon1.classList.add('icon')
icon1_img.src = './img/static.svg'
icon1_p.innerHTML = 'Сравнение'
icon2.classList.add('icon')
icon2_img.src = './img/heart.svg'
icon2_p.innerHTML = 'Избранные'
icon3.classList.add('icon')
icon3_img.src = './img/shopping-cart.svg'
icon3_p.innerHTML = 'Корзина'
icon4.classList.add('icon')
icon4_img.src = './img/user.svg'
icon4_p.innerHTML = 'Войти'

// append
body.prepend(header)
header.append(head_logo, category, search, icons)
category.append(cat_img, cat_p)
search.append(search_inp, red)
red.append(red_img)
icons.append(icon1, icon2, icon3, icon4)
icon1.append(icon1_img, icon1_p)
icon2.append(icon2_img, icon2_p)
icon3.append(icon3_img, icon3_p)
icon4.append(icon4_img, icon4_p)

var swiper = new Swiper(".mySwiper", {
    pagination: {
        el: ".swiper-pagination",
        dynamicBullets: true,
    },
});

 

body.onscroll = () => {
    if (window.pageYOffset === 0) {
    header.style.top = '65px'
    header.style.opacity = '1'                
    } else {
        header.style.top = '0px' 
        header.style.opacity = '0.9'                
    }
    console.log('Текущая прокрутка сверху: ' + window.pageYOffset);
}