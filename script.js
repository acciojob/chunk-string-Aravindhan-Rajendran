function stringChop(str, size) {
  // your code here
	let arr=[];
function stringChop(str, size) {
    let arr = [];
    for (let i = 0; i < str.length; i += size) {
        let chunk = str.substring(i, i + size);
        arr.push(chunk);
    }
    return arr;
}

// Do not change the code below
const str = propt("Enter String.");
const size = propt("Enter Chunk Size.");
alert(stringChop(str, size));
