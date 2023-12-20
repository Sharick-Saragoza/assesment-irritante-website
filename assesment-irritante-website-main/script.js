// Iphone ID
const iphoneImage = document.getElementById('iphone');

// (1) Functie laat de Iphone knipperen
function knipperImage() {
    if (iphoneImage.style.opacity === '0') {
        iphoneImage.style.opacity = '1';
    } else {
        iphoneImage.style.opacity = '0';
    }
}

function startKnipper() {

    setInterval(knipperImage, 100);

}

// Start de startKnipper functie wanneer je op de IOS button drukt
document.getElementById('buttonIOS').addEventListener('click', startKnipper);

// (2) Functie om automatisch te scrollen
function autoScroll() {
    setInterval(function() {
        window.scrollBy(0, 2);
    }, 20);
}

// Start de autoScroll functie wanneer je op de Android button drukt
document.getElementById('buttonAndroid')?.addEventListener('click', autoScroll);

