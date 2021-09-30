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
    document.getElementById("clock").classList.remove('clock');
    document.getElementById("clock").classList.add('clock-2');
    document.getElementById("container").classList.remove('container');
    document.getElementById("container").classList.add('container-2');
  }
}, 1000);