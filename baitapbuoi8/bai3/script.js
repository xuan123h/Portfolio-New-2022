function validateForm() {
  var x;
  x = document.getElementById("txt_dienthoai").value;
  if (isNaN(x) || length(x) == 0 || length(x) > 10) {
    alert("điện thoại phải là số, mời nhập lại");
    return false;
  }
}
