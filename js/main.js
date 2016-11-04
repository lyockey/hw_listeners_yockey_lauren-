
// Append a list of Jurassic Park Dinosaurs to second heading when clicked.
    // Listens for: Click
    // What's fired: An unordered list is appended to the h2 heading

var dinoNames = document.getElementsByTagName('h2')[0];

dinoNames.addEventListener('click', function () {
    var dinoList = document.createElement('ul');

    dinoList.innerHTML = '<li>T-Rex!</li><li>Velociraptor!</li><li>Veggie-saurus!</li><li>Triceratops!</li>';

    dinoNames.appendChild(dinoList).style.color = '#404040';
});

// Change the color of the main heading when moused over.
    // Listens for: mouseover
    // What's fired: The h1 heading text changes color from red to yellow
var header = document.getElementsByTagName('h1')[0];

header.addEventListener('mouseover', function () {
    header.style.color = '#e6e600';
});


//Change the source of the main image when double-clicked.
    // Listens for:  double-click
    // What's fired: The href changes sources to a new image file
var img = document.getElementsByTagName('img')[0];

img.addEventListener('dblclick', function () {
    img.src = 'http://filmconcertslive.com/wp-content/uploads/2016/01/Jurassic-park-still2.jpg';
});
