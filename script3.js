var inputValue = [window.prompt("Enter a value (under 10 million)!")];
let givenValue = inputValue;
document.write("You have entered "+inputValue);
document.write("<br>");
var count = 0;
for (inputValue => 0; inputValue--;){
    var arr = Array.from(String(inputValue), Number);
    var firstDigit = arr[0];
    var secondDigit = arr[1];
    var thirdDigit = arr[2];
    var fourthDigit = arr[3];
    var fifthDigit = arr[4];
    var sixthDigit = arr[5];
    var seventhDigit = arr[6];
    var eighthDigit = arr[7];
    if (firstDigit == 3||secondDigit == 3||thirdDigit == 3||fourthDigit == 3 || 
        fifthDigit == 3 || sixthDigit == 3 || seventhDigit == 3 || eighthDigit == 3){
        document.write("Three found at "+arr);
        document.write("<br>");
        count++;
        document.write("Count is "+count);
        document.write("<br>");
}
}
document.write("The set of integers up to and including "+givenValue+" have "+count+
" integer(s) containing three at least once. A ratio of "+(count/givenValue*100)+"\%.");
document.write("<br>");
if (count/givenValue == 0.5){
    document.write("VALUE FOUND")};
if (count/givenValue > 0.5){
    document.write("VALUE TOO HIGH")};
if (count/givenValue < 0.5){
    document.write("VALUE TOO LOW")};
