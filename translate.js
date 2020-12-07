// Translation must all be done in a translate function that takes a string parameter
function translate(str) {
// Convert each word to lowercase
  str = str.toLowerCase();

  const vowels = ["a", "e", "i", "o", "u"];
  let vowelIndex = 0;

  if (vowels.includes(str[0])) {
    return str + "way";
  }
  else { 
     const strArray = str.split ("") 
     console.log(strArray);

     while(!vowels.includes(strArray[0]))
{
    //taking off the first letter of the array
    const firstLetter = strArray.shift();
    console.log(strArray);

    strArray.push(firstLetter)
    console.log(strArray);
}
str = strArray.join("") + "ay"
return str;
  }
}
   


