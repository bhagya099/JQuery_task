console.log("Linked.");

// Dramatis Personae
var hobbits = [
  'Frodo Baggins',
  'Samwise \'Sam\' Gamgee',
  'Meriadoc \'Merry\' Brandybuck',
  'Peregrin \'Pippin\' Took'
];

var buddies = [
  'Gandalf the Grey',
  'Legolas',
  'Gimli',
  'Strider',
  'Boromir'
];

var lands = ['The Shire', 'Rivendell', 'Mordor'];
var body = document.body;
var section = '<section></section>';

function makeMiddleEarth() {
  // your answers here
  let earth = $(section).attr('id', 'middle-earth');
  $(lands).each((i) => {
    const land = $('<article>').html(`<h1> ${lands[i]}`);
    $(earth).append(land);
  });
  $(body).append(earth);
}

makeMiddleEarth();

function makeHobbits() {
  // your answers here
  let hobbitClass = $('<ul>');
  $(hobbits).each((i) => {
    const li = $('<li class="hobbit">').text(hobbits[i]);

    $(hobbitClass).append(li);
  });

  $('article:nth-child(1)').append(hobbitClass);
}

makeHobbits();

function keepItSecretKeepItSafe() {
  // your answers here
  let ring = $('<div id="the-ring" class="magic-imbued-jewelry">');
  $('li:nth-child(1)').append(ring);
}

keepItSecretKeepItSafe();

function makeBuddies(){
  // your answers here
}

makeBuddies();

function beautifulStranger(){
  // your answers here
}

beautifulStranger();

function leaveTheShire(){
  // your answers here
}

leaveTheShire();

function forgeTheFellowship() {
  // your answers here
}

forgeTheFellowship();

function theBalrog(){
  // your answers here
}

theBalrog();

function hornOfGondor() {
  // your answers here
}

hornOfGondor();

function itsDangerousToGoAlone() {
  // your answers here
}

itsDangerousToGoAlone();

function weWantsIt() {
  // your answers here
}

weWantsIt();

function thereAndBackAgain(){
  // your answers here
}

thereAndBackAgain();
