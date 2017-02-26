function myFunction() {
    var y = parseInt(document.getElementById("txt1").value);
    var z = parseInt(document.getElementById("txt2").value);
    var x = y + z;
    document.getElementById("demo").innerHTML = x;
    
}
function validateForm() {
    var x = document.forms["myForm"]["firstname"].value;
    if (x == "") {
        alert("Name must be filled out");
        return false;
    }
}