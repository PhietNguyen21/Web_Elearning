// SideBar Mini
var toggleBtn=document.querySelector('.sidebar__button');
var sideBarMini=document.querySelector('.sidebarmini');
var switchBtn=document.querySelector('#checkbox');


toggleBtn.addEventListener('click',function(){
    sideBarMini.classList.toggle('is-opened');
});

switchBtn.addEventListener('click',function(){
    document.querySelector('body').classList.toggle('darkMode');
});

