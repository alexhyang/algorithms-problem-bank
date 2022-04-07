// vanilla javascript
document.addEventListener("DOMContentLoaded", function () {
  const id = document.querySelector("#task");
  addElement();
  headingListenToClick();
});

function addElement() {
  const newElem = document.createElement("div");
  newElem.textContent = "text under div";
  document.querySelector(".main").append(newElem);
}

function headingListenToClick() {
  document.querySelector("h1").addEventListener("click", changeRed);
}

function changeRed(e) {
  console.log(e.target);
  e.target.style.color = "red";
}

// jQuery
$(function () {
  const id = $("#task");
  $(".main").append("<div>text under div</div>");
  $("h1").on("click", changeRed);
});
