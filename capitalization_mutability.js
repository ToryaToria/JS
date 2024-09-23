function capitalizeWord(word) {
  let w = word[0].toUpperCase();
  return word = w + word.slice(1);
}

let a = capitalizeWord('capitalizeWord');
console.log (a);
	