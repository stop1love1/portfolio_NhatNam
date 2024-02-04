
function ham() {
    var x = document.getElementById("ip1") 
    x = Number(x.value) 
    if (x % 2 == 0) {
        document.getElementById("p1").innerHTML = "Số chẵn"; 
    } else {
        document.getElementById("p1").innerHTML = "Số lẻ"; 
    }
}