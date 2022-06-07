var counterContainer = document.querySelector(".website-counter");
var resetButton = document.querySelector("#reset");
var visitCount = localStorage.getItem("page_view");

let isCounterIncremented = sessionStorage.getItem('isCounterIncremented');
if(!isCounterIncremented){
    if (visitCount) {
    visitCount = Number(visitCount) + 1;
    localStorage.setItem("page_view", visitCount);
  } else {
    visitCount = 1;
    localStorage.setItem("page_view", 1);
  }
 sessionStorage.setItem('isCounterIncremented',true); 
}
counterContainer.innerHTML = visitCount;