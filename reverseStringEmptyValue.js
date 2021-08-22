function reverse(string)
{

let reverse='';
for (let char of string)
{
reverse= char+reverse;
}
return reverse;

}

const name= 'Nazim'

console.log(reverse(name))