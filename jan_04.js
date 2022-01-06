//*********--------Program 1  Reverse a String--------************

var a ="Hello";
function reverseString(str) {
    // Step 1. Use the split() method to return a new array
    var splitString = str.split(""); // var splitString = "hello".split("");
    // ["h", "e", "l", "l", "o"]
 
    // Step 2. Use the reverse() method to reverse the new created array
    var reverseArray = splitString.reverse(); // var reverseArray = ["h", "e", "l", "l", "o"].reverse();
    // ["o", "l", "l", "e", "h"]
 
    // Step 3. Use the join() method to join all elements of the array into a string
    var joinArray = reverseArray.join(""); // var joinArray = ["o", "l", "l", "e", "h"].join("");
    // "olleh"
    
    //Step 4. Return the reversed string
    return joinArray; // "olleh"
}
 console.log(reverseString(a));


 //*********--------Program 2  Reverse a String--------************

 const b = "Reverse the string"
 function reverseString1(str) {
    var newString = "";
    for (var i = str.length - 1; i >= 0; i--) {
        newString += str[i];
    }
    return newString;
}
console.log(reverseString(b));



 //*********--------Program 3  Repeate the string pattern --------************
function repeatStringNumTimes(string, times) {
    var repeatedString = "";
    while (times > 0) {
      repeatedString += string;
      times--;
    }
    return repeatedString;
  }
  console.log(repeatStringNumTimes("abc", 3));


   //*********--------Program 4 Repeate the string pattern --------************
  function repeatStringNumTimes1(string, times) {
    if (times > 0)
      return string.repeat(times);
    else
      return "";
  }
  console.log(repeatStringNumTimes1("xyz", 3));