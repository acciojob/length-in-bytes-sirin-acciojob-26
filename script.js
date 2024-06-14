const byteSize = (str) => {
  // write your code here
	
    // Create a new Blob object with the given string
    const blob = new Blob([str]);
    // Return the size property of the Blob object, which is the size of the string in bytes
    return blob.size;


};

// Do not change the code below
const str = prompt("Enter some string.");
alert(byteSize(str));
