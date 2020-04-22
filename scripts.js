window.onload = function() {
    document.getElementById("distortion")
    .style.transform = 
    "translate(-50%,-50%) rotateX(0deg) rotateY(0deg) translateZ(0)";
}

document.onmousemove = function(e) {
    x = e.pageX, y = e.pageY;
    limit = 9;

    var ww = window.innerWidth || document.documentElement
    .clientWidth || document.body.clientWidth;
    var wh = window.innerHeight || document.documentElement
    .clientHeight || document.body.clientHeight;

    rotx = y * 100 / wh;
    rotx *= 180 / 100;
    rotx -= 90;
    rotx *= -1;

    roty = x * 100 / ww;
    roty *= 180 / 100;
    roty -= 90;

    document.getElementById("distortion").style.transform = 
    "translate(-50%, -50%) rotateX(" + (rotx * limit / 100) + "deg) rotateY(" + (roty * limit / 100) + "deg) translateZ(0)";
}
