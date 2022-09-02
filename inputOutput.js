function add() {
    var no1 = document.querySelector(".num1").value
    var no2 = document.querySelector(".num2").value
    var no3 = parseInt(no1) + parseInt(no2)
    document.querySelector(".result1").innerHTML = no3
}
function sub() {
    var no1 = document.querySelector(".num1").value
    var no2 = document.querySelector(".num2").value
    var no3 = parseInt(no1) - parseInt(no2)
    document.querySelector(".result2").innerHTML = no3
}
function mul() {
    var no1 = document.querySelector(".num1").value
    var no2 = document.querySelector(".num2").value
    var no3 = parseInt(no1) * parseInt(no2)
    document.querySelector(".result3").innerHTML = no3
}
function div() {
    var no1 = document.querySelector(".num1").value
    var no2 = document.querySelector(".num2").value
    var no3 = parseInt(no1) / parseInt(no2)
    document.querySelector(".result4").innerHTML = no3
}
