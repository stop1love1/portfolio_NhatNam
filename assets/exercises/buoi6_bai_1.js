function validateForm() {
    var x;
    x = document.forms["form"]["ho"].value;
    if (x == "") {
        alert("Bạn chưa nhập họ");
        return false;
    }
    x = document.getElementById("ten").value;
    if (x == "") {
        alert("Bạn chưa nhập tên");
        return false;
    }
    x = document.getElementById("sdt").value;
    if (isNaN(x) || x.length == 0 || x.length > 10) {
        alert("Điện thoại phải là số, mời nhập lại");
        return false;
    }
}