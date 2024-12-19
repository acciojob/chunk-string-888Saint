function stringChop(str, size) {
  // If the input string is null or the size is not a positive number, return an empty array
  if (!str || size <= 0) {
    return [];
  }

  const chunks = [];
  for (let i = 0; i < str.length; i += size) {
    chunks.push(str.slice(i, i + size));
  }

  return chunks;
}

// Do not change the code below
const str = prompt("Enter String.");
const size = parseInt(prompt("Enter Chunk Size."), 10);
alert(stringChop(str, size));
