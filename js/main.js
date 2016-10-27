var heading = document.getElementsByTagName('h1')[0];

heading.addEventListener('click', function () {
    var myElement = document.createElement('p');

    myElement.innerHTML = 'This is click number x, where x is 1 on the first click, 2 on the second click, 3 on the third, etc.';

    document.getElementsByTagName('header')[0].appendChild(myElement);
});
