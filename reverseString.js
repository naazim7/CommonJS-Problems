function reverse(string)
{
// Step:1 First convert String to Array With Split Method


const arrayFromStr=string.split('')


// Step 2:Then Reverse This array

const reverseArray= arrayFromStr.reverse()

// Step :3 Join This Reverse array


const joint= reverseArray.join("");

Return 

return joint;


}
const name= 'nazim'
console.log(reverse(name))