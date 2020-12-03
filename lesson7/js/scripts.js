// ::::::::::CURRENT DATE ::::::::::::::::
//const options = {weekday: 'long', day: 'numeric', month: 'long', year:'numeric'};
//document.getElementById('currentdate').textContent = new Date().toLocaleDateString('en-US', options);

// day names array
const dayNames = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
    
];

// Long month names array
const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
];

const todaysdate = new Date();
const dayName = dayNames[todaysdate.getDay()];
const monthName = months[todaysdate.getMonth()];
const currentdate = dayName + ", " + todaysdate.getDate() + " " + monthName + " " + todaysdate.getFullYear();

document.getElementById('currentDate').textContent = currentdate;

document.getElementById("copyrightYear").innerHTML = todaysdate.getFullYear();

// ::::::::::HAMBURGER MENU ::::::::::::::::
const hambutton = document.querySelector('.ham');
const mainnav = document.querySelector('.navigation');

hambutton.addEventListener('click', () => {mainnav.classList.toggle('responsive')}, false);

// To solve the mid resizing issue with responsive class on
window.onresize = () => {if (window.innerWidth > 760) mainnav.classList.remove('responsive')};

// :::::::::::PANCAKE NOTICE ON FRIDAYS ::::::::::::::::::::
let day = new Date().getDay();
if (day == 5) {
    // document.querySelector(".message").style.backgroundColor = "pink";
    // document.querySelector(".message").style.visibility = "visible";

document.querySelector(".message").style.display = "block";
}
// To change the display property in JavaScript, consider the use of .style.display = "block" in a selection structure 
// where the condition looks at the day of the week through the Date() object and getDay() method.

// ::::::::::::::WEB FONT LOADER ::::::::::::::::::::
WebFont.load({google: {families: ['Montserrat', 'Noto']}});
          //  'Montserrat+Alternates:wght@800&family=Noto+Serif&display=swap'

// :::::::::::::::WIND CHILL CALCULATION ::::::::::::::::
let t = document.getElementById("currTemp").innerHTML;
let s = document.getElementById("speed").innerHTML;
let windchill = Math.round(35.74 + 0.6215 * t - 35.75 * s**0.16 + 0.4275 * t * s**0.16);
document.getElementById("chill").innerHTML = `${windchill}`;

// ::::::::::::CONTACT SYMBOLS :::::::::::::::::::::::::
src='https://kit.fontawesome.com/a076d05399.js'

// :::::::::::::PROGRESSIVE LAZY LOAD GALLERY IMAGES :::::::::::::::::
const imagesToLoad = document.querySelectorAll("img[data-src]");

const imgOptions = {
    threshold: .5,
    rootMargin: "0px 0px -50px 0px"
};

const loadImages = (image) => {
    image.setAttribute('src', image.getAttribute('data-src'));
    image.onload = () => {image.removeAttribute('data-src');};
};
if('IntersectionObserver' in window) {
    const imgObserver = new IntersectionObserver ((items, imgObserver) => {
        items.forEach((item) => {
            if(item.isIntersecting) {
                loadImages(item.target);
                imgObserver.unobserve(item.target);
            }
        });
    }, imgOptions);

        imagesToLoad.forEach((img) => {
            imgObserver.observe(img);
        });
} else{
    imagesToLoad.forEach((img) => {
        loadImages(img);
});
}