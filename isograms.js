
let str = '122234';

let i = 0;
let j = 0;
let rez = true;

let k = 0;

str = str.toLowerCase();
console.log (str);

while (i < str.length) 
{
	j = i+1;
		while (j < str.length) 
		{
			console.log (str[i], str[j]);

			if (str[i] === str[j] && rez === true) 
			{
				 rez = false; k = 1;
				 console.log (rez, k, "end");
				 break; 
			} 
			j = j+1;
		}
	i = i+1;
}

console.log (rez, k);