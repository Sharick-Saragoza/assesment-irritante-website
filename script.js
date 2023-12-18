// Ihpone ID
const iphoneImage = document.getElementById('iphone');

// Functie
function knipperImage() {
    if (iphoneImage.style.opacity === '0') {
        iphoneImage.style.opacity = '1';
    } else {
        iphoneImage.style.opacity = '0';
    }
}

// Function to start blinking when the button is clicked
function startKnipperen() {

    setInterval(knipperImage, 100);

}

document.getElementById('buttonIOS').addEventListener('click', startKnipperen);
