
function doanso(min,max) {
    return Math.floor(Math.random()*(max-min))+min;
}
function ham() {
    var x = document.getElementById("in")
    x = Number(x.value)
    var y = doanso(1,10);
    if (x > 10 || x < 1) {
        document.getElementById("out").innerHTML = "Chỉ chấp nhận số từ 1-10, hãy nhập lại";
    } else if (x == y) {
        document.getElementById("out").innerHTML = "Chúc mừng bạn đã đoán đúng số là " + y;
    } else if (x != y) {
        document.getElementById("out").innerHTML = "Bạn đã đoán sai , số đúng là " + y;
    }
}