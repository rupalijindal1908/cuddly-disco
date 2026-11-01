function changeColour() {
    var r = Math.random() * 256;
    var g = Math.random() * 256;
    var b = Math.random() * 256;
    var bgcolour = "rgb(" + r + "," + g + "," + b + ")";
    document.body.style.backgroundColor = bgcolour;
}