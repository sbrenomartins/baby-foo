var y = 11;

// Update the count down every 1 second
var x = setInterval(function() {

  y -= 1;

  // Display the result in the element with id="demo"
  document.getElementById("timer").innerHTML = y;

  // If the count down is finished, write some text
  if (y < 0) {
    clearInterval(x);
    document.getElementById("timer").innerHTML = "\n\nAntonella";
    document.getElementById("clock").style = "border: none; background-color: white;";
    document.getElementById("container").style = "background: pink; background-image: url('./img/fireworks.gif');";
    document.getElementById("text").style = "display: block;";
  }
}, 1000);