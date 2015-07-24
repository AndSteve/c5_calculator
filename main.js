//Define all global variables
var decimalVar = false;
var operatorSelect = false;
var adding = false;
var subtracting = false;
var multiplying = false;
var dividing = false;
var negative = false;
var decimal = false;
var displayContent = "";
var numArray = ["", ""];
var arrayIndex = 0;
/*********
 *Number pads input switch that will choose what number to input and concat it to the
 *current arrayIndex's string
 *
 *********/
$(document).ready(function() {
    //switch to determine input into array
    $(".number").click(function() {
        console.log('Current position in number array is: ' + arrayIndex);
        operatorSelect = false;
        //displayContent gets assigned new value with each click on a number
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
    /*******
     *on click handler for any of the operator buttons that will set the 
     *operator variable (dividing/multiplying/etc...) for the evaluate function's
     *switch.
     *******/
    $(".operator").click(function() {
        if (!operatorSelect) {
            switch (true) {
                // selecting switch via class
                case $(this).hasClass('division'):
                    numArray[arrayIndex] = $("#result_display").val();
                    operatorSelect = true;
                    displayContent = "";
                    console.log('Division called');
                    //this will set the desired operator for the evaluate function
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
                    //this will set the desired operator for the evaluate function
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
                    //this will set the desired operator for the evaluate function
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
                    //this will set the desired operator for the evaluate function
                    adding = true;
                    multiplying = false;
                    subtracting = false;
                    dividing = false;
                    break;
                case $(this).hasClass('decimal'):
                    numArray[arrayIndex] = $("#result_display").val();
                    operatorSelect = true;
                    displayContent = arrayIndex[0] + displayContent;
                    console.log('decimal called');
                    decimal = true;
                    adding = false;
                    multiplying = false;
                    subtracting = false;
                    dividing = false;
                    break;
            }
            $("#result_display").val("");
            //after an operator has been selected this moves the index to the second position
            //so it is ready to receive second input
            arrayIndex = 1;
            console.log('arrayIndex changed to 1')
        }
    });
    // supposed to be inserting a '-' infront of the current arrayIndex's value
    //DWP THIS ONE
    //Calls this function when the .plusmin class html element is clicked
    //checks if the negative var is true then if the value in the current array slot is positive executes this block
    //concats a - into the front of the current array slot's value
    //sets the negative variable for any future calls to this function
    //if the first 'if' function was false this else statement slices out the first value in current array slot
    /********
     *Equals <span> on click event will call evaluate function
     *function evaluate() takes value in numarray 0 and 1 and does math
     *then prints out to display and clears the input array
     *******/
    function evaluate() {
        numArray[arrayIndex] = $("#result_display").val();
        var results = "";
        switch (true) {
            /*
             *check operator variable for a true boolean value;
             *sets the input field with ID 'result_display' to the selected operator
             *grabs the strings in the numArray converting it to a number then does the math to them. and sets the result variable to the answer
             *breaks out of the switch function once an operation has completed
             */
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
        } ///Checks if the result is Infinity to see if divide by 0 was entered
        if (results == Infinity) {
            results = "Error: dividing by 0";
        }
        $("#result_display").val(results); //grabs the value from the result variable and puts it into the result_display
        console.log($("#result_display").val());
        arrayIndex = 0; //Resets the position of where input from buttons goes to back to the first entry in the numArray
    }
    //calls the evaluate function with a click event handler
    $(".evaluate").click(function() {
        evaluate();
        console.log('evaluate function was called');
    });
    //resets array and display

    $(".allClear").click(function() {
        console.log('Cleared all')
        numArray = ["", ""]
        $("#result_display").val("");
        decimalVar = false;
        arrayIndex = 0;
    });
});
