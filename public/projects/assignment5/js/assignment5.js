
var canvas = document.createElement("canvas");

canvas.width = 900;
canvas.height = 500;
canvas.style.border = "2px solid black";
var context = canvas.getContext("2d");
document.body.appendChild(canvas);


var showBackground = false;
var backgroundImage = new Image();
backgroundImage.onload = function () {
    showBackground = true;
};
backgroundImage.src = "images/1163620.jpg";


var showBug = false;
var bugImage = new Image();
bugImage.onload = function () {
    showBug = true;
};
bugImage.src = "images/bug.png";

var score = 0;


var bug = {
    x: 0,
    y: 0,
    delay: 2000 // movement in pixels per second
}



canvas.onmousedown = function (e) {
    if (e.pageX >= bug.x
        && e.pageX <= bug.x + 70
        && e.pageY >= bug.y
        && e.pageY <= bug.y + 70)
    {
        reset();
        bug.delay -= 50;
        if (bug.delay > 1600) {
            ++score;
        }
        if (bug.delay == 1600)
        {
            ++score;
            swal( "Let's go to the next level", "success");
        }
        if (bug.delay < 1600 && bug.delay > 800)
        {
            ++score;
        }
        if (bug.delay == 800)
        {
            ++score;
            swal("Let's go to the further level", "success");
        }
        if (bug.delay < 800 && bug.delay > 0) {
    
            ++score;
        }
        else if (bug.delay == 0) {
            ++score;
            swal("Congratulation!", "success");
            score = 0;
            bug.delay = 2600;
        }
               
        then = Date.now()
    }
}



var reset = function () {

    bug.x = 70 + Math.random() * ((canvas.width - 125) - 70);
    bug.y = 70 + Math.random() * ((canvas.height - 125) - 70);

}


var render = function () {
    if (showBackground) {
        context.drawImage(backgroundImage,0,0);
    }
    if (showBug) {
        context.drawImage(bugImage, bug.x, bug.y);
    }
    
    var scoreResult = document.getElementById('scoreResult');
    var result = "Score:" + score;
    scoreResult.innerHTML = result;
}
function resetScore() {
    score = 0;
    bug.delay = 2600;
}
function resetSpeed() {
    bug.delay = 2600;
}
scoreResult = score.value;
var main = function () {
    var now = Date.now();
    var delta = now - then;
    if (delta > bug.delay) {
        reset();
        then = now;
    }
    render();

    requestAnimationFrame(main);
}

var w = window;
requestAnimationFrame = w.requestAnimationFrame || w.webkitRequestAnimationFrame || w.msRequestAnimationFrame || w.mozRequestAnimationFrame;


reset();
var then = Date.now();
main();


