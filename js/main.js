
// Click Event to add list of Jurassic Park Dinosaurs
var dinoNames = document.getElementsByTagName('h2')[0];

dinoNames.addEventListener('click', function () {
    var dinoList = document.createElement('ul');

    dinoList.innerHTML = '<li>T-Rex!</li><li>Velociraptor!</li><li>Veggie-saurus!</li><li>Triceratops!</li>';

    dinoNames.appendChild(dinoList).style.color = '#404040';
});

// Change color of main heading when moused over
var header = document.getElementsByTagName('h1')[0];

header.addEventListener('mouseover', function () {
    header.style.color = '#e6e600';
});


//Change the main image on double-click
var img = document.getElementsByTagName('img')[0];

img.addEventListener('dblclick', function () {
    img.src = 'http://filmconcertslive.com/wp-content/uploads/2016/01/Jurassic-park-still2.jpg';
});
