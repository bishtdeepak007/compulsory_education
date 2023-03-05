
$('.owl-one').owlCarousel({
    loop: false,
    items: 1,
    paginationSpeed: 3000,
    autoplay: true,
    smartSpeed: 400,
    autoplayTimeout: 3000,
})

// --------------------------------------------onclick function in menu-icon
document.querySelector(".menu-icon").addEventListener("click", function () {
    document.querySelector("header").classList.toggle("active");

});
// --------------------------------------------onclick function in menu-icon


// --------------------------------------------for removing menu-item after click on section area
document.querySelector("section").addEventListener("click", function () {
    document.querySelector("header").classList.remove("active");

});
// --------------------------------------------for removing menu-item after click on section area


// --------------------------------------------for removing menu-item after scroll
window.addEventListener("scroll", function () {
    let x = document.querySelector("header")
    if (window.pageYOffset >= 100) {
        x.classList.remove("active");
    }

});
// --------------------------------------------for removing menu-item after scroll


//----------------------------------------------- for Header removing after a time
window.addEventListener('scroll', function () {

    let nav = document.getElementById('navbar');


    if (window.pageYOffset >= 500) {
        nav.classList.add('sticky');
    } else {
        nav.classList.remove('sticky');
    }
});
//----------------------------------------------- for Header removing after a time

// ----------------------------------------------for menu-icon padding
window.addEventListener('scroll', function () {

    let nav = document.querySelector('.menu-icon');


    if (window.pageYOffset >= 500) {
        nav.classList.add('set');
    } else {
        nav.classList.remove('set');
    }
});
// ----------------------------------------------for menu-icon padding

// ----------------------------------------------for bottom to top button
window.addEventListener('scroll', function () {

    let nav = document.getElementById('back-to-top');

    if (window.pageYOffset <= 400) {
        nav.classList.add('top');
    } else {
        nav.classList.remove('top');
    }
});
// ----------------------------------------------for bottom to top button