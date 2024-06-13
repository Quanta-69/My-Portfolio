let home_section = document.querySelector('.home');
let about_section = document.querySelector('.about');
let service_section = document.querySelector('.services');
let projects_section = document.querySelector('.projects');
let contact_section = document.querySelector('.contact');

let home_link = document.querySelector('.home-link');
let about_link = document.querySelector('.about-link');
let service_link = document.querySelector('.service-link');
let projects_link = document.querySelector('.projects-link');
let contact_link = document.querySelector('.contact-link');

const menuIcon = document.querySelector('#menu-icon');
const navbar = document.querySelector('.navbar');
const navbg = document.querySelector('.nav-bg');
menuIcon.addEventListener('click', () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
    navbg.classList.toggle('active');
});

function $view_home(){
    home_link.classList.add('active');
    about_link.classList.remove('active');
    service_link.classList.remove('active');
    projects_link.classList.remove('active');
    contact_link.classList.remove('active');

    home_section.classList.remove('hidden');
    about_section.classList.add('hidden');
    service_section.classList.add('hidden');
    projects_section.classList.add('hidden');
    contact_section.classList.add('hidden');
};
function $view_about(){
    about_link.classList.add('active')
    home_link.classList.remove('active')
    service_link.classList.remove('active');
    projects_link.classList.remove('active');
    contact_link.classList.remove('active');

    about_section.classList.remove('hidden');
    home_section.classList.add('hidden');
    service_section.classList.add('hidden');
    projects_section.classList.add('hidden');
    contact_section.classList.add('hidden');
};

function $view_projects(){
    projects_link.classList.add('active');
    home_link.classList.remove('active');
    about_link.classList.remove('active');
    service_link.classList.remove('active');
    contact_link.classList.remove('active');

    projects_section.classList.remove('hidden');
    home_section.classList.add('hidden');
    about_section.classList.add('hidden');
    service_section.classList.add('hidden');
    contact_section.classList.add('hidden');
};

function $view_contact(){
    contact_link.classList.add('active');
    home_link.classList.remove('active');
    about_link.classList.remove('active');
    service_link.classList.remove('active');
    projects_link.classList.remove('active');

    contact_section.classList.remove('hidden');
    home_section.classList.add('hidden');
    about_section.classList.add('hidden');
    service_section.classList.add('hidden');
    projects_section.classList.add('hidden');
};

function $view_services(){
    service_link.classList.add('active');
    contact_link.classList.remove('active');
    home_link.classList.remove('active');
    about_link.classList.remove('active');
    projects_link.classList.remove('active');

    service_section.classList.remove('hidden');
    home_section.classList.add('hidden');
    about_section.classList.add('hidden');
    projects_section.classList.add('hidden');
    contact_section.classList.add('hidden');
}