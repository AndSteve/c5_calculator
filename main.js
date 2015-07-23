//Designate all global variables
var decimalVar = false;
var operatorSelect = false;
var adding = false;
var subtracting = false;
var multiplying = false;
var dividing = false;
var negative = false;
var displayContent = "";
var numArray = ["", ""];
var arrayIndex = 0;

$(document).ready(function() {
    //switch to determine input arrays
    $(".number").click(function() {
        console.log('Current position in number array is: '+arrayIndex)
        operatorSelect = false;
        var inputvar = $("#result_display").val();
        switch (true) {
            case $(this).hasClass('n0'):
                displayContent = inputvar + 0;
                break;
            case $(this).hasClass('n1'):
                displayContent = inputvar + 1;
                break;
            case $(this).hasClass('n2'):
                displayContent = inputvar + 2;
                break;
            case $(this).hasClass('n3'):
                displayContent = inputvar + 3;
                break;
            case $(this).hasClass('n4'):
                displayContent = inputvar + 4;
                break;
            case $(this).hasClass('n5'):
                displayContent = inputvar + 5;
                break;
            case $(this).hasClass('n6'):
                displayContent = inputvar + 6;
                break;
            case $(this).hasClass('n7'):
                displayContent = inputvar + 7;
                break;
            case $(this).hasClass('n8'):
                displayContent = inputvar + 8;
                break;
            case $(this).hasClass('n9'):
                displayContent = inputvar + 9;
                break;
            case $(this).hasClass('decimal'):
                if (!decimalVar) {
                    displayContent = inputvar + ".";
                    decimalVar = true;
                }
                break;
        }
        $("#result_display").val(displayContent);
        console.log(displayContent);
    });

    //operator selection switch

    $(".operator").click(function() {
        if (!operatorSelect) {
            switch (true) {
                case $(this).hasClass('division'):
                    numArray[arrayIndex] = $("#result_display").val();
                    operatorSelect = true;
                    displayContent = "";
                    console.log('Division called');
                    dividing = true;
                    multiplying = false;
                    subtracting = false;
                    adding = false;
                    break;
                case $(this).hasClass('multiplication'):
                    numArray[arrayIndex] = $("#result_display").val();
                    operatorSelect = true;
                    displayContent = "";
                    console.log('Multiplication called');
                    multiplying = true;
                    dividing = false;
                    subtracting = false;
                    adding = false;
                    break;
                case $(this).hasClass('subtraction'):
                    numArray[arrayIndex] = $("#result_display").val();
                    operatorSelect = true;
                    displayContent = "";
                    console.log('Subtraction called');
                    subtracting = true;
                    adding = false;
                    multiplying = false;
                    dividing = false;
                    break;
                case $(this).hasClass('addition'):
                    numArray[arrayIndex] = $("#result_display").val();
                    operatorSelect = true;
                    displayContent = "";
                    console.log('Addition called');
                    adding = true;
                    multiplying = false;
                    subtracting = false;
                    dividing = false;
                    break;
            }
            $("#result_display").val("");
            arrayIndex = 1;
            console.log('position in array index: '+arrayIndex);
        }console.log('Operation called');
    });

    $(".plusmin").click(function() {
        if (!negative) {
            var negStore = "-" + $("#result_display").val();
            $("#result_display").val(negStore);
            negative = true;
        } else {
            var storeValue = $("#result_display").val();
            $("#result_display").val(storeValue.slice(1));
            negative = false;
        }
    });

    //evaluate switch
    function evaluate() {
        numArray[arrayIndex] = $("#result_display").val();
        var results = "";
        switch (true) {
            case dividing:
                $("#result_display").val("/");
                results = Number(numArray[0]) / Number(numArray[1]);
                break;
            case multiplying:
                $("#result_display").val("*");
                results = Number(numArray[0]) * Number(numArray[1]);
                break;
            case subtracting:
                $("#result_display").val("-");
                results = Number(numArray[0]) - Number(numArray[1]);
                break;
            case adding:
                $("#result_display").val("+");
                results = Number(numArray[0]) + Number(numArray[1]);
                break;
            default:
                console.log('ERROR');
        }
        if (results == Infinity) {
            results = "Error: dividing by 0";
        }
        $("#result_display").val(results);
        console.log($("#result_display").val());
        arrayIndex = 0;
    }

    $(".evaluate").click(function() {
        evaluate();
        console.log('evaluate function was called');
    });

    $(".allClear").click(function() {
        numArray = ["", ""]
        $("#result_display").val("");
        decimalVar = false;
        arrayIndex = 0;
    });
});
