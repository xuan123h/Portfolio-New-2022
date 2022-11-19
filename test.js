var menu = document.querySelector("#menu-bars");
var header = document.querySelector("header");
menu.onclick = () => {
  menu.classList.toggle("fa-times");
  header.classList.toggle("active");
};
window.onscroll = () => {
  menu.classList.remove("fa-times");
  header.classList.remove("active");
};
// slider
var arrImg = [];
function loadImg() {
  for (var i = 0; i < arrImg.length; i++) {
    arrImg[i] = new Image();
    arrImg[i].src = "img/Picture" + (i + 1) + "png";
  }
}
var arrayImg2 = [
  "img/Picture1.png",
  "img/Picture2.png",
  "img/Picture3.png",
  "img/Picture4.png",
];
var img = document.getElementById("img");
var index = 0;
function next() {
  if (index === arrayImg2.length - 1) index = -1;
  index++;
  img.src = arrayImg2[index];
}
function prev() {
  if (index === 0) index = arrayImg2.length;
  index--;
  img.src = arrayImg2[index];
}
var t = 0;
function play() {
  clearInterval(t);
  t = setInterval("next()", 6000);
}
// validateForm
function validateForm() {
  var name = document.getElementById("txtName").value;
  var email = document.getElementById("txtEmail").value;
  var phone = document.getElementById("txtPhone").value;
  var msgName = document.getElementById("nameErr");
  var msgEmail = document.getElementById("emailErr");
  var msgPhone = document.getElementById("phoneErr");
  var hasErrorName = true;
  var hasErrorEmail = true;
  var hasErrorPhone = true;
  if (name == "") {
    msgName.innerHTML = "Họ và tên không được để trống !";
  } else {
    msgName.innerHTML = "";
    hasErrorName = false;
  }
  if (isNaN(phone) || length(x) == 0 || length(x) > 10) {
    alert("điện thoại phải là số, mời nhập lại");
    msgPhone.innerHTML = "Phone không được để trống";
    return false;
  }
  if (email == "") {
    msgEmail.innerHTML = "Email không được để trống !";
  } else {
    msgEmail.innerHTML = "";
    hasErrorName = false;
  }
  if ((hasErrorName == true, hasErrorEmail == true, hasErrorPhone == true)) {
    return false;
  } else {
    alert("Contact me success !");
  }
}
