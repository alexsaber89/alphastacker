var letters = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
function stackLetters() {
  var letterRow = "";
  var noSpaces = "";
  for (var i = 0; i < letters.length; i++) {
    letterRow += letters[i];
    noSpaces = letterRow.replace(/\s/g, "");
    if (noSpaces.length % 5 === 0) {
      letterRow += " ";
    } else {
      console.log(letterRow);
    }
  }
}
stackLetters();