function vermas(id) {
    if (id == "mas") {
        document.getElementById("desplegar").style.display = "block";
        document.getElementById("mas").style.display = "none";
    } else {
        document.getElementById("desplegar").style.display = "none";
        document.getElementById("mas").style.display = "inline";
    }
}


/*SLIDER*/
var images = ['img/1.jpg', 'img/2.jpg', 'img/3.jpg'];

var i = 0;

function slideShow() {
    document.getElementById("image").src = images[i];
    if (i < images.length - 1) {
        i++;
    } else {
        i = 0;
    }
    setTimeout("slideShow()", 2000);
}

window.onload = slideShow;