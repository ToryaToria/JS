
let str = 'aAqqeE';

let i = 0;
let j = 0;
let str_rez = "";

let k = 0;

let alf = "aAeEiIoOuUyY"

while (i < str.length) 
{
		while (j < alf.length && k !== 1) 
		{
			if (str[i] === alf[j] ) 
			{
				str_rez = str_rez + "!"; k = 1;
				console.log (str_rez);
				console.log(k);

			} else 
			{
				str_rez = str_rez + str[i];
				console.log (str_rez);
				console.log(k);

			}
			j = j+1;
		}
 console.log(k);
	i = i+1;
	k = 0;
}

console.log (str, str_rez);