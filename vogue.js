var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
  showDivs(slideIndex += n);
}

function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("mySlides");
  if (n > x.length) {slideIndex = 1}
  if (n < 1) {slideIndex = x.length} ;
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  x[slideIndex-1].style.display = "block";
}

document.onkeydown = function(e) {
  switch (e.keyCode) {
      case 37:
          //left
          e.preventDefault();
          slideIndex--;
          showDivs(slideIndex);
          break;
      case 39:
          //right
          e.preventDefault();
          slideIndex++;
          showDivs(slideIndex);
          break;
  }
}