//Toggle class active 

const navbarNav = document.querySelector
('.navbar-nav');

// ketika humberger menu di klik 
document.querySelector('#hamburger-menu').onclick = () => {
    navbarNav.classList.toggle('active');
};

// klik diluar side bar untuk menghilangkan toggle 
const hamburger = document.querySelector('#hamburger-menu');

document.addEventListener('click', function (e) { 
    if (!hamburger.contains(e.target) && !navbarNav.contains(e.target)) {
        navbarNav.classList.remove('active');
}
});