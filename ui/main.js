console.log('Loaded!');

//change the text of the page that has the madi image
var element = document.getElementById('main-text');

element.innerHTML = 'New value';

// code for moving the image

var img = document.getElementById('madi');
img.onclick = function () {
       img.style.marginLeft = '100px';
}
                
