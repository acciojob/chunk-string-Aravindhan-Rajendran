
function stringChop(str, size) {
	    if (str === null) {
        return [];
    }
	
    let arr = [];
    for (let i = 0; i < str.length; i += size) {
        let chunk = str.substring(i, i + size);
        arr.push(chunk);
    }
    return arr;

}

// Do not change the code below
const str = prompt("Enter String.");
const size = prompt("Enter Chunk Size.");
alert(stringChop(str, size));
