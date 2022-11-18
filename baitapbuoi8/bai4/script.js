// 2. Slider
var dotItem = document.querySelectorAll(".dot");
var arrayImg = [];
function loadImg() {
  for (var i = 0; i < arrayImg.length; i++) {
    arrayImg[i] = new Image();
    arrayImg[i].src = "../assets/img/slide" + (i + 1) + ".png";
  }
}
var arrayImg2 = [
  "../../img/slide1.jpg",
  "../../img/slide2.jpg",
  "../../img/slide3.jpg",
  "../../img/slide4.jpg",
];
var hinh = document.getElementById("hinh");
var index = 0;
function next() {
  if (index === arrayImg2.length - 1) index = -1;
  index++;
  hinh.src = arrayImg2[index];
}
function prev() {
  if (index === 0) index = arrayImg2.length;
  index--;
  hinh.src = arrayImg2[index];
}
var t = 0;
function play() {
  clearInterval(t);
  t = setInterval("next()", 4000);
}
