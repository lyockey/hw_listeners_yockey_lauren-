
// Click Event to show names of Jurassic Park Dinosaurs
var dinoNames = document.getElementsByTagName('h2')[0];

dinoNames.addEventListener('click', function () {
    var dinoList = document.createElement('ul');

    dinoList.innerHTML = '<li>T-Rex!</li><li>Velociraptor!</li><li>Veggie-saurus!</li><li>Triceratops!</li>';

    dinoNames.appendChild(dinoList).style.color = '#404040';
});
