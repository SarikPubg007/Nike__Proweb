let green =  document.getElementById('green');
let black =  document.getElementById('black');
let urlBg = document.getElementById('url');

let header = document.querySelector('.header');
green.addEventListener('click', function () { 
    header.classList.toggle('color__Bg_green');
    header.classList.add('color__Bg_green');
    header.classList.remove('color__Bg_black');
    header.classList.remove('color__Bg_Url');

 })
 urlBg.addEventListener('click', function () { 
   //  header.classList.toggle('color__Bg_black');
    header.classList.add('color__Bg_black');
    header.classList.remove('color__Bg_green');
    header.classList.remove('color__Bg_Url');
 })
 black.addEventListener('click', function () { 
    header.classList.toggle('color__Bg_Url');
    header.classList.add('color__Bg_Url');
    header.classList.remove('color__Bg_green');
    header.classList.remove('color__Bg_black');

 })
 

