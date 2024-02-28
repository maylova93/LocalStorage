// Gem en enkelt værdi i Local Storage med nøglen "name" og værdien "Simon"
localStorage.setItem('name','Simon')

// Fjern værdien gemt under nøglen "name" fra Local Storage
localStorage.removeItem('name')


// Opret et objekt med navnet "myObj" og egenskaben "name" med værdien "Simon"
let myObj = {
    name: "Simon"
};

// Serialiser objektet "myObj" til en JSON-streng og gem det i Local Storage med nøglen "myObj"
let myObj_serialized = JSON.stringify(myObj);
localStorage.setItem("myObj", myObj_serialized);

// Hent JSON-strengen fra Local Storage under nøglen "myObj" og deserialiser den til et objekt
let myObj_deserialized = JSON.parse(localStorage.getItem("myObj"));

// Udskriv det deserialiserede objekt til konsollen
console.log(myObj_deserialized);



// Globals
let indkøbskurv = [];

// Function for at tilføje varer til indkøbskurven
function tilføjTilKurv(valgtProdukt) {
    indkøbskurv.push(valgtProdukt); // Tilføj det valgte produkt til indkøbskurven
}

// Eksempel på brug:
let valgtProdukt = {
    id: 1,
    navn: "Eksempelprodukt",
    pris: 100,
    antal: 1
};

tilføjTilKurv(valgtProdukt);
console.log(indkøbskurv); // Viser indkøbskurven med det tilføjede produkt


// Funktion til at behandle købet
function fuldførKøb() {
    // Simulering af betaling
    let totalPris = beregnTotalPris(); // Beregn den samlede pris for varerne i indkøbskurven
    console.log("Din samlede pris er: " + totalPris + " kr.");
    
    // Nulstil indkøbskurven efter købet
    indkøbskurv = [];
    console.log("Din indkøbskurv er blevet nulstillet.");
}

// Funktion til at beregne den samlede pris for varerne i indkøbskurven
function beregnTotalPris() {
    let totalPris = 0;
    for (let produkt of indkøbskurv) {
        totalPris += produkt.pris * produkt.antal;
    }
    return totalPris;
}

// Eksempel på brug:
fuldførKøb();





// Funktion til at gemme indkøbskurven i Local Storage
function gemIndkøbskurv() {
    localStorage.setItem('indkøbskurv', JSON.stringify(indkøbskurv));
}

// Funktion til at hente indkøbskurven fra Local Storage
function hentIndkøbskurv() {
    let gemtIndkøbskurv = localStorage.getItem('indkøbskurv');
    if (gemtIndkøbskurv) {
        indkøbskurv = JSON.parse(gemtIndkøbskurv);
    }
}

// Kald hentIndkøbskurv funktionen ved siden indlæses
window.addEventListener('load', hentIndkøbskurv);

// Funktion til at tilføje varer til indkøbskurven
function tilføjTilKurv(valgtProdukt) {
    indkøbskurv.push(valgtProdukt);
    gemIndkøbskurv(); // Gem indkøbskurven i Local Storage efter tilføjelse af et produkt
}

// Funktion til at fuldføre købet
function fuldførKøb() {
    // Simulering af betaling
    let totalPris = beregnTotalPris();
    console.log("Din samlede pris er: " + totalPris + " kr.");

    // Nulstil indkøbskurven efter købet
    indkøbskurv = [];
    gemIndkøbskurv(); // Gem indkøbskurven i Local Storage efter købet
    console.log("Din indkøbskurv er blevet nulstillet.");
}
