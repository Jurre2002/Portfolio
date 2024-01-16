/* Aan en uitzetten van de navbar */

let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navigationbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x')
    navbar.classList.toggle('huidig')
}

 
/* Activeren van de links */

let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

/* Hier maak ik twee variabeles aan waarme ik alle selecties en navigatielinks selecteer */

window.onscroll = () => {
    sections.forEach(sec => {
        /* In deze code bepaal ik de scrollpositie en sectie informatie
        De top is de huidige scrollpositie van het venster
        De offset is de bovenrand positie. Hier verminder ik het met 150px om de styling soort van te verbeteren.
        De heigt is de hoogte van de sectie.
        De id is de waarde van de huidige sectie */
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let heigt = sec.offsetHeight;
        let id = sec.getAttribute('id');
        /* Ik kijk of de sectie zichtbaar is*/
        if(top >= offset && top < offset + heigt) {
            /* Hier verwijder ik de huige link en voeg ik de 'goede' link toe als die overeenkomt met de sectie. */
            navLinks.forEach(links => {
                links.classList.remove('huidig');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('huidig');
            });
        };
    });
    /* De icon en navigatiebalk wordt verwijdert */
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('huidig');
};


