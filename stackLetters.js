var letters = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
function stackLetters() {
  var letterRow = "";
  var noSpaces = "";
  for (var i = 0; i < letters.length; i++) {
    letterRow += letters[i];
    console.log(letterRow);
  }
}
stackLetters();