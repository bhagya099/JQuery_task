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
  // create an `aside` tag
  // attach an `unordered list` of the `'buddies'` in the aside

  let aside = $('<aside>');
  let ul = $('<ul>');
  $(buddies).each((i) => {
    const li = $('<li>').text(buddies[i]);
    $(ul).append(li);
  });
  $(aside).append(ul);
  // insert your aside as a child element of `rivendell`
  $('article:nth-child(2)').append(aside);
}

makeBuddies();

function beautifulStranger() {
  // your answers here
  // change the `'Strider'` text to `'Aragorn'`
  $('aside > ul > li:nth-child(4)').text('Aragorn');
}

beautifulStranger();

function leaveTheShire() {
  // your answers here
  // assemble the `hobbits` and move them to `rivendell`
  let riven = $('article:nth-child(2)');
  let hobbit = $('article:nth-child(1) ul');
  $(riven).append(hobbit);
}

leaveTheShire();

function forgeTheFellowship() {
  // your answers here
  // create a new div called `'the-fellowship'` within `rivendell`
  let div = $('<div class="the-fellowship>');
  // add each `hobbit` and `buddy` one at a time to `'the-fellowship'`
  let hobBuds = [...hobbits, ...buddies];
  for (let i of hobBuds) {
    let newPerson = $('<p>').text(i);
    $(div).append(newPerson);
    alert(`${i} is added`);
  }
  $('article:nth-child(2)').append(div);
  // after each character is added make an alert that they // have joined your party
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
