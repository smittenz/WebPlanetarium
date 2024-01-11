let texts =[
  'Webb Telescope, auroras on Jupiter',
  'Hubble, Neptune',
  'Webb, The rings of Neptune',
  'Hubble, Southern Ring Galaxy',
  'Webb, Southern Ring Galaxy',
  'Hubble, Proto Star (a star being born)',
  'Webb, Proto Star',
  'Hubble, Proto Star',
  'Webb, Two Merging galaxies',
  'Hubble, spiral galaxy NGC 3351',
  'Webb, Cart Wheel Galaxy',
  'Webb, Stephans Quintuplet',
  'Hubble, Stephanss Qintuplet',
  'Webb, Collision of galaxies IC 1623 or VV 114, about 275 million light years away',
  'Hubble, The Turantuala NebulaThe largest star forming Nebula known',
  'Webb, Tarantula Nebula, has a radius of 931 light years',
  'Hubble, The Phantom Galaxy',
  'Webb, The Phantom Galaxy',
  'Webb, Carnia Nebula',
  'Webb, The iconic Pillars of Creation, a small part of the Eagle Nebula',
  'Hubble, Wold Dawrf galaxy',
  'Webb, Wolf Galaxy',
  'Spitzer, Wolf Galaxy',
  'Webb, galaxy cluster SMACS 0723',
  'Webb, galaxy cluster SMACS 0723 X-ray',
  'Webb, Stephans Quintuplet',
  'pair of galaxies called VV 191 uses data collected in infrared light by Webb and in both visible and ultraviolet light by Hubble',
  'Webb, pair of colliding stars shed shells of cosmic dust.'
];

let timestamps = [0, 10000, 20000, 30000, 40000, 50000, 60000, 70000, 80000, 92000, 100000, 110000, 120000, 200000, 21000, 22000, 230000, 240000, 255000, 270000]
let currentText = '';
let vid;
let displayText = false;
let overlay;
let currentTextIndex = 0;

function preload() {
  vid = createVideo('planet.mp4');
  vid.hide();
  print('preload');
}
function videoReady() {
  vid.loop();
  setupText();
}
function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);
  frameRate(30);

  // Assuming vid is initialized somewhere
  vid.loop();

  // Create a p5.Graphics object with the default renderer
  overlay = createGraphics(700, 400);

  setupText();
}

function setupText() {
  overlay.text(texts[0], 10, overlay.height - 40); // Display the first text immediately

  let i = 0; // Start from the second text
  setInterval(() => {
    overlay.clear();
    overlay.text(texts[i], 10, overlay.height - 40);
    i = (i + 1) % texts.length; // Increment i and wrap around to 0 when it reaches the end
  }, 10000); // Display each text for 10 seconds

  // Reset currentTextIndex to 0 when the video ends
  vid.elt.onended = () => {
    i = 0;
  };
}

function draw() {
  orbitControl(2, 2, 0);
  background(100);
  noStroke();
  texture(vid);
  sphere(3000);

  // Draw the overlay as an image
  
  if (displayText) {
    push();
    translate(-width / 4, -height / 2);
    image(overlay, 0, 0);
    pop();
  }
}

function mousePressed() {
  if (mouseButton === RIGHT) {
    // When the right mouse button is clicked, toggle displayText
    displayText = true;

    return false; // prevent default
  }
}

function mouseReleased() {
  if (mouseButton === RIGHT) {
    // When the right mouse button is clicked, toggle displayText
    displayText = false;
    return false; // prevent default
  }
}