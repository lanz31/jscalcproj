function addition() {
    var num1 = document.getElementById('num1').value;
    var num2 = document.getElementById('num2').value;

    if (isNaN(num1) || isNaN(num2)) {
        alert("Must enter a number.");
    }
    else if (num1 == "" || num2 == "") {
        alert("Invalid input");
    }
    else {
        num1 = Number(num1);
        num2 = Number(num2);

        var sum = num1 + num2;

        alert("Sum is: " + sum);
    }
}

function subtraction() {
    var num1 = document.getElementById('num1').value;
    var num2 = document.getElementById('num2').value;

    if (isNaN(num1) || isNaN(num2)) {
        alert("Must enter a number.");
    }
    else if (num1 == "" || num2 == "") {
        alert("Invalid input");
    }
    else {
        num1 = Number(num1);
        num2 = Number(num2);

        var diff = num1 - num2;

        alert("Difference is: " + diff);
    }
}

function multiplication() {
    var num1 = document.getElementById('num1').value;
    var num2 = document.getElementById('num2').value;

    if (isNaN(num1) || isNaN(num2)) {
        alert("Must enter a number.");
    }
    else if (num1 == "" || num2 == "") {
        alert("Invalid input");
    }
    else {
        num1 = Number(num1);
        num2 = Number(num2);

        var prod = num1 * num2;

        alert("Product is: " + prod);
    }
}

function division() {
    var num1 = document.getElementById('num1').value;
    var num2 = document.getElementById('num2').value;

    if (isNaN(num1) || isNaN(num2)) {
        alert("Must enter a number.");
    }
    else if (num1 == "" || num2 == "") {
        alert("Invalid input");
    }
    else {
        num1 = Number(num1);
        num2 = Number(num2);

        var quo = num1 / num2;

        alert("Quotient is: " + quo);
    }
}