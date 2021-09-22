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
    // alert(`${i} is added`);
  }
  $('article:nth-child(2)').append(div);
  // after each character is added make an alert that they // have joined your party
}

forgeTheFellowship();

function theBalrog() {
  // your answers here
  // change the `'Gandalf'` text to `'Gandalf the White'`
  let gandlaf = $('aside ul li:nth-child(1)');
  gandlaf.text('Gandalf the White');
  // apply the following style to the element, make the // background 'white', add a grey border
  gandlaf.css('background', 'white');
  gandlaf.css('border', '3px solid grey');
}

theBalrog();

function hornOfGondor() {
  // your answers here
  // pop up an alert that the horn of gondor has been blown
  alert('the horn of gondor has been blown');
  // Boromir's been killed by the Uruk-hai!
  // Remove `Boromir` from the Fellowship
  $('aside li:nth-child(5)').remove();
}

// hornOfGondor();

function itsDangerousToGoAlone() {
  // your answers here
  // take `Frodo` and `Sam` out of the fellowship and move  them to `Mordor`
  
  
  let frodo = $('article:nth-child(2) > ul li:nth-child(1)');
  let sam = $('article:nth-child(2) > ul li:nth-child(2)');
  // add a div with an id of `'mount-doom'` to `Mordor`
  let div = $('<div id="mount-doom">');
  div.append(frodo)
   div.append(sam)
  let mordor = $('article:nth-child(3)')
  mordor.append(div)
}

itsDangerousToGoAlone();

function weWantsIt() {
  // your answers here
  // Create a div with an id of `'gollum'` and add it to Mordor
  let div = $('<div id="gollum">');
  // Remove `the ring` from `Frodo` and give it to `Gollum`
  // let ring = $('#the-ring');
  let frodo = $('artical:nth-child(3) > div li:nth-child(1)');
  let ring = $('.magic-imbued-jewelry');
  // frodo.remove(ring);
  div.append(ring);
  // Move Gollum into Mount Doom
  let mordor = $('article:nth-child(3)');
  mordor.append(div);
}

weWantsIt();

function thereAndBackAgain() {
  // your answers here
  // remove `Gollum` and `the Ring` from the document
  let gollum = $('#gollum');
  let ring = $('.magic-imbued-jewelry');
  gollum.remove();
  ring.remove();
  // Move all the `hobbits` back to `the shire`
  $('#mount-doom').remove();
  makeHobbits();
}

thereAndBackAgain();

