/*-------------------------------------------------*/
/* GRAPHIC ROTATE */
/*-------------------------------------------------*/
var rotate = 16;

var pageX = $(document).width();
var pageY = $(document).height();
var mouseY= 0;
var mouseX= 0;

  $(document).mousemove(function(e) {
    mouseX = event.pageY;
    mouseY = event.pageX;
    rotateY = -(pageY/2-mouseY)/pageY*rotate;
    rotateX = (pageX/1-mouseX)/pageX*rotate;
    $('.graphic').css({ '-webkit-transform' : ' translateY(-50%) scale(1) perspective( 4000px ) rotateY('+rotateY+'deg) rotateX('+rotateX+'deg)'});
  });


/*-------------------------------------------------*/
/* ANY KEY TO ENTER FUNCTION */
/*-------------------------------------------------*/
document.addEventListener('keydown', function(event) {
    // Get the button element
    const button = document.getElementById('myButton');
    
    // Simulate a button click
    button.click();
});